import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { UserTopBar } from "../../components/Topbar/UserTopBar";
import dpSample from "/src/assets/images/dpsample.png"; 
import { getAuth } from "firebase/auth";
import { db } from "../../firebase";
import { collection, getDoc, getDocs, doc } from "firebase/firestore";
import { storage } from "../../firebase";
import { getDownloadURL, ref } from "firebase/storage";
import EventCard from "../Events/components/EventCard";
import EventsGlobalStyles from "../Events/styles/EventsStyles";
import ManagedEventsSection from "./managed-event-section";

function Profile() {
  const [recentEvents, setRecentEvents] = useState([]);
  const [userData, setUserData] = useState({ firstName: "", username: "" });
  const [profileImage, setProfileImage] = useState(dpSample); 

  useEffect(() => {
    const loadUserData = async () => {
      const auth = getAuth();
      const currentUser = auth.currentUser;

      if (!currentUser) {
        console.warn("User not authenticated.");
        return;
      }

      const userUID = currentUser.uid;
      try {
        const userDocRef = doc(db, "User", userUID);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const data = userDocSnap.data();
          setUserData({
            firstName: data.firstName || "FIRST FIRST MI LAST NAME",
            username: data.username ? `@${data.username}` : "@Sample username",
          });
        } else {
          console.warn("User document does not exist.");
        }

        const imageRef = ref(storage, `Profile_Images/${userUID}.png`);
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

    const loadEvents = async () => {
      const events = await fetchAttendedEvents();
      setRecentEvents(events);
    };

    loadUserData();
    loadEvents();
  }, []);

  const fetchAttendedEvents = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
  
    if (!currentUser) {
      console.warn("User not authenticated.");
      return [];
    }
  
    const currentUserUID = currentUser.uid;
    const attendedEvents = [];
  
    try {
      const eventsSnapshot = await getDocs(collection(db, "Events"));
  
      for (const userDoc of eventsSnapshot.docs) {
        const handledEventsSnapshot = await getDocs(
          collection(db, "Events", userDoc.id, "HandledEvents")
        );
  
        for (const eventDoc of handledEventsSnapshot.docs) {
          const volunteerDocRef = doc(db, "Events", userDoc.id, "HandledEvents", eventDoc.id, "Volunteers", currentUserUID);
          const volunteerDocSnap = await getDoc(volunteerDocRef);
  
          if (volunteerDocSnap.exists()) {
            const eventData = eventDoc.data();
            attendedEvents.push({
              eventuid: eventDoc.id,
              title: eventData.EventTitle,
              organizer: eventData.OrgName,
              image: eventData.ThumbnailPath,
              date: eventData.EventDate,
              time: `${eventData.StartTime} - ${eventData.EndTime}`,
              location: eventData.Location,
              description: eventData.Description,
              tokens: eventData.TokenReward || 0,
            });
          }
        }
      }
    } catch (err) {
      console.error("Error fetching attended events:", err.message);
    }
  
    return attendedEvents;
  };
  
  return (
    <>
    <EventsGlobalStyles />
    <UserTopBar />
    <Sidebar />
      <main className="landing-page">
        <section className="profile-section">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-content">
            <div className="profile-info">
              <div className="profile-name">
                <div className="name-text">
                {userData.firstName}
                </div>
                <div className="username-text">
                {userData.username}
                </div>
                <br />
                <br />
              </div>
              <p className="profile-description">
                I'm someone who thrives on curiosity and creativity. Whether
                it's diving into a new hobby, tackling a challenge, or exploring
                fresh ideas, I'm always eager to learn and grow.
              </p>
            </div>
            <div className="profile-actions">
              <button className="edit-profile-btn">
                EDIT PROFILE
              </button>
              <button className="action-btn" aria-label="Additional actions" />
            </div>
          </div>
        </section>

        <section className="events-section">
          <div className="recent-events-container">
            <div className="events-header">
              <h2 className="section-title">Recent Events</h2>
              <div className="navigation-controls">
                <button className="nav-btn prev" aria-label="Previous events" />
                <button className="nav-btn next" aria-label="Next events" />
              </div>
            </div>
            <div className="events-grid">
              {recentEvents.map(event => (
                <EventCard key={event.eventuid} {...event} />
              ))}
            </div>
          </div>

          {/* Replace the old managed events with the new component */}
          <ManagedEventsSection />
        </section>
      </main>

      <style jsx>{`
        .landing-page {
          overflow-x: auto;
          display: flex;
          padding: 144px 114px 144px 200px;
          flex-direction: column;
          overflow: hidden;
          align-items: stretch;
          justify-content: start;
          background: linear-gradient(
            135deg,
            #1e90ff 0%,
            #87ceeb 50%,
            #ffffff 100%
          );
        }

        @media (max-width: 991px) {
          .landing-page {
            padding: 100px 20px;
          }
        }

        .profile-section {
          align-self: start;
          display: flex;
          align-items: center;
          gap: 40px 52px;
          font-weight: 700;
          justify-content: start;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .profile-section {
            max-width: 100%;
          }
        }

        .profile-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 300px;
          box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          align-self: stretch;
          min-width: 240px;
          margin: auto 0;
          flex-shrink: 0;
          overflow: hidden;
        }

        .profile-content {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          margin: auto 0;
          min-height: 278px;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
          width: 893px;
        }

        @media (max-width: 991px) {
          .profile-content {
            max-width: 100%;
          }
        }

        .profile-info {
          border-radius: 0;
          max-width: 100%;
          width: 893px;
          color: rgba(255, 255, 255, 1);
        }

        .profile-name {
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 64px;
          font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
          max-height:150px;
        }

        .name-text {
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
        }

        .username-text {
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 36px;
        }

        @media (max-width: 991px) {
          .profile-name {
            max-width: 100%;
            font-size: 40px;
          }
        }

        .profile-description {
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 20px;
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          margin-top: 23px;
        }

        @media (max-width: 991px) {
          .profile-description {
            max-width: 100%;
            margin-right: 10px;
          }
        }

        .profile-actions {
          border-radius: 0;
          display: flex;
          margin-top: 12px;
          width: 275px;
          max-width: 100%;
          align-items: stretch;
          gap: 16px;
          font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
          font-size: 24px;
          color: #fffbff;
        }

        .edit-profile-btn {
          border-radius: 10px;
          background-color: rgba(57, 153, 218, 1);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          min-height: 57px;
          padding: 13px 28px;
          gap: 8px;
          color: #fffbff;
          align-self: stretch;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 991px) {
          .edit-profile-btn {
            padding: 13px 20px;
          }
        }

        .action-btn {
          border-radius: 10px;
          background-color: rgba(57, 153, 218, 1);
          width: 54px;
          flex-shrink: 0;
          height: 57px;
          border: none;
          cursor: pointer;
        }

        .events-section {
          background-color: rgba(255, 255, 255, 0);
          margin-top: 25px;
          max-width: 100%;
          width: 1606px;
          overflow: hidden;
        }

        .recent-events-container {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: stretch;
          justify-content: center;
        }

        @media (max-width: 991px) {
          .recent-events-container {
            max-width: 100%;
          }
        }

        .events-header {
          display: flex;
          width: 100%;
          align-items: center;
          gap: 40px 100px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .events-header {
            max-width: 100%;
          }
        }

        .section-title {
          color: rgba(255, 255, 255, 1);
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 36px;
          font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          font-weight: 800;
          align-self: stretch;
          margin: auto 0;
        }

        .navigation-controls {
          align-self: stretch;
          display: flex;
          margin: auto 0;
          padding: 0 80px;
          align-items: center;
          justify-content: space-between;
          width: 148px;
        }

        @media (max-width: 991px) {
          .navigation-controls {
            padding: 0 20px;
          }
        }

        .nav-btn {
          border-radius: 15px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          align-self: stretch;
          margin: auto 0;
          flex-shrink: 0;
          height: 68px;
          width: 73px;
          border: none;
          cursor: pointer;
        }

        .nav-btn.prev {
          transform: rotate(180deg);
          background-color: rgba(192, 193, 196, 1);
        }

        .nav-btn.next {
          background-color: rgba(83, 83, 83, 1);
        }

        .events-grid {
          display: flex;
          margin-top: 21px;
          width: 100%;
          align-items: center;
          justify-content: left;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .events-grid {
            max-width: 100%;
          }
        }

        .event-image {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 500px;
          border-radius: 20px;
          align-self: stretch;
          min-width: 240px;
          margin: auto 0;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .event-image {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

export default Profile;