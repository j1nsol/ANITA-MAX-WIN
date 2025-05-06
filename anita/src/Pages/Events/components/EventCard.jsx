import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const EventCard = ({ 
    title,
    organizer,
    image,
    date,
    time,
    location,
    description,
    tokens,
    eventuid,// Passed from Events
    useruid
  }) => {
    const navigate = useNavigate();
  
    const handleJoin = async () => {
      try {
        const auth = getAuth();
        const currentUser = auth.currentUser;
    
        if (!currentUser) {
          alert("You must be logged in to join events.");
          return;
        }
    
        const userRef = doc(db, "User", currentUser.uid);
        const userSnap = await getDoc(userRef);
    
        if (!userSnap.exists()) {
          alert("User data not found.");
          return;
        }
    
        const userData = userSnap.data();
    
        if (!userData.terms) {
          alert("Please complete your personal information before joining an event.");
          navigate("/Personal_Information"); // or wherever your personal info page is
          return;
        }
    
        // ✅ All good, navigate to the event join form
        navigate(`/events/${useruid}/${eventuid}`);
      } catch (error) {
        console.error("Error checking user terms:", error.message);
        alert("An error occurred. Please try again.");
      }
    };
  
  return (
    <article 
            className="event-card" 
            style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="event-content">
                <div className="event-title">{title}</div>
                <button className="join-button" onClick={handleJoin}>
                  Join
                </button>
                <div className="event-datetime">{date} | {time}</div>
                <div className="event-datetime">{location}</div>
            </div>
        </article>
   
  );
  
};

export default EventCard;
