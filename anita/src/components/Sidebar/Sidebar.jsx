import * as React from "react";
import { Link } from 'react-router-dom';
import { auth, db, storage } from '../../firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { ref, getDownloadURL } from "firebase/storage";
import dpSample from "/src/assets/images/dpsample.png"; // Import the default placeholder image
import MAXWINLOGO from "../../assets/images/maxwinlogo.png";
import maxwinlogotext from "../../assets/images/maxwinlogotxt.png";

// Import new sidebar icons
import casinoIcon from "/src/assets/images/sidebar_icons/casino.png";
import sportsIcon from "/src/assets/images/sidebar_icons/sports.png";
import profileIcon from "/src/assets/images/sidebar_icons/profile.png";
import eventsIcon from "/src/assets/images/sidebar_icons/events.png";
import supportIcon from "/src/assets/images/sidebar_icons/chat.png";
import globe from "/src/assets/images/sidebar_icons/globe.png";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [username, setUsername] = useState("Loading...");
  const [profileImage, setProfileImage] = useState(dpSample); // Set dpSample as the default profile image

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userDoc = doc(db, "User", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsername(data.username || "Unknown");
        } else {
          console.error("No such document!");
        }

        // Fetch profile image from Firebase Storage
        const imageRef = ref(storage, `Profile_Images/${user.uid}.png`);
        try {
          const imageUrl = await getDownloadURL(imageRef);
          setProfileImage(imageUrl); // Set the fetched profile image
        } catch (error) {
          console.error("No profile image found, using default.");
          setProfileImage(dpSample); // Use dpSample as the default profile image
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const iconsData = [
    { src: profileImage, alt: "User icon", to: "/profile", title: username },
    { src: casinoIcon, alt: "Casino icon", to: "/games", title: "Games" },
    { src: sportsIcon, alt: "Sports icon", to: "/sports", title: "Sports" },
    { src: profileIcon, alt: "Profile icon", to: "/info", title: "Personal Information" },
    { src: eventsIcon, alt: "Events icon", to: "/events", title: "Events" },
    { src: supportIcon, alt: "Support icon", to: "/support", title: "Support" },
    { src: globe, alt: "Globe icon", to: "/language", title: "Language" }
  ];

  return (
    <nav className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <div className="navigation-logo">
        <img
          loading="lazy"
          src={MAXWINLOGO}
          className="navigation-logo-primary"
          alt="Primary company logo"
          width="102"
          height="75"
        />
        <img
          loading="lazy"
          src={maxwinlogotext}
          className="navigation-logo-secondary"
          alt="Secondary company logo"
          width="100"
          height="50"
          border-radius="50%"
        />
      </div>
      <div className="sidebar-top" onClick={() => setIsExpanded(!isExpanded)}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7572a51549d29376362dc58db69d1e2413f45cd9ca88505a23e2c4a416ce318d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          alt="Company logo"
          className="sidebar-logo"
        />
      </div>
      <div className="sidebar-content">
        {iconsData.map((icon, index) => (
          <Link to={icon.to} key={index} className="sidebar-link">
            <div className="sidebar-item">
              <img
                src={icon.src}
                alt={icon.alt}
                className={`sidebar-icon ${icon.src === dpSample ? "rounded-icon" : ""}`}
              />
              <span className={`icon-title ${isExpanded ? "visible" : ""}`}>{icon.title}</span>
              {!isExpanded && <span className="tooltip">{icon.title}</span>}
            </div>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .sidebar {
          position: fixed;
          display: flex;
          max-width: 80px;
          z-index: 1500;
          flex-direction: column; 
          left: 0;
          top: 0;
          transition: max-width 0.5s ease; /* Slower animation */
        }
        .sidebar.expanded {
          max-width: 800px; /* Increased width for expanded sidebar */
          overflow:visible;
        }
        .sidebar-top {
          background-color: rgba(229, 231, 235, 1);
          box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px 10px;
          cursor: pointer;
          border-top-right-radius: 15px;
        }
        .sidebar-logo {
          aspect-ratio: 0.99;
          object-fit: contain;
          object-position: center;
          width: 67px;
          height: 68px;
          flex-shrink: 0;         
          margin-top: 6px;
        }
        .sidebar-content {
          background-color: rgba(229, 231, 235, 1);
          box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          padding: 31px 10px;
          height: 100vh;
          align-items: center;
        }
        .sidebar-link {
          width: 100%;
          text-decoration: none;
          position: relative;
        }
        .sidebar-item {
          display: flex;
          align-items: center;
          padding: 10px;
          transition: background-color 0.5s ease, box-shadow 0.5s ease, padding 0.5s ease; /* Slower animation */
        }
        .sidebar.expanded .sidebar-item {
          padding: 10px 100px 10px 10px; /* Adjust padding for expanded state */
        }
        .sidebar-item:hover {
          background-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .sidebar-icon {
          width: 50px;
          height: 50px;
          margin-right: 10px;
          border-radius: 25%;
          objectfit: cover;
        }

        .sidebar-icon.rounded-icon {
          border-radius: 50%; /* Make the icon circular */
        }
          
        .icon-title {
        
          font-size: 16px;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          opacity: 0;
        }
        .icon-title.visible {
        font-family: 'Alexandria', sans-serif;
        font-weight:700; /* Optional: bold on hover */
          opacity: 1;
        }
        .tooltip {
          position: absolute;
          top: 50%;
          left: 118%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          border-radius: 5px;
          font-size: 15px;
          white-space: nowrap;
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s, opacity 0.5s ease; /* Slower animation */
        }
        .sidebar-item:hover .tooltip {
        font-family: 'Alexandria', sans-serif;
        font-weight:700; /* Optional: bold on hover */
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </nav>
  );
}

export default Sidebar;