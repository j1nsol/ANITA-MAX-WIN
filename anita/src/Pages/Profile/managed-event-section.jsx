import React, { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';
import ManagedEventCard from './managed-event-card';
import { useNavigate } from 'react-router-dom';

function ManagedEventsSection() {
  const [managedEvents, setManagedEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchManagedEvents = async () => {
      setLoading(true);
      try {
        const events = await loadManagedEvents();
        setManagedEvents(events);
      } catch (error) {
        console.error("Error fetching managed events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchManagedEvents();
  }, []);

  const loadManagedEvents = async () => {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      console.warn("User not authenticated.");
      return [];
    }

    const currentUserUID = currentUser.uid;
    const events = [];

    try {
      // Get all events created by the current user
      const handledEventsRef = collection(db, "Events", currentUserUID, "HandledEvents");
      const handledEventsSnapshot = await getDocs(handledEventsRef);

      for (const eventDoc of handledEventsSnapshot.docs) {
        const eventData = eventDoc.data();
        
        // Get volunteer count
        const volunteersRef = collection(db, "Events", currentUserUID, "HandledEvents", eventDoc.id, "Volunteers");
        const volunteersSnapshot = await getDocs(volunteersRef);
        const volunteerCount = volunteersSnapshot.docs.length;

        events.push({
          eventUid: eventDoc.id,
          title: eventData.EventTitle || "Untitled Event",
          orgName: eventData.OrgName || "No Organization",
          description: eventData.Description || "No description available",
          thumbnailPath: eventData.ThumbnailPath || "/placeholder.svg?height=150&width=150",
          volunteerCount
        });
      }
    } catch (error) {
      console.error("Error loading managed events:", error);
    }

    return events;
  };

  const handleEventPanelClick = (eventUid) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
  
    if (!currentUser) {
      console.error("User not authenticated.");
      return;
    }
  
    const userUid = currentUser.uid;
    console.log(`Navigate to /events/${userUid}/${eventUid}/EventDashboard`);
  
    navigate(`/events/${userUid}/${eventUid}/EventDashboard`);
  };

  return (
    <div className="managed-events-container">
      <div className="events-header">
        <h2 className="section-title">Managed Events</h2>
      </div>

      <div className="managed-events-grid">
      {loading ? (
  <div className="loading-message">Loading managed events...</div>
) : managedEvents.length === 0 ? (
  <div className="empty-message">You haven't created any events yet.</div>
) : (
  managedEvents.map(event => (
    <ManagedEventCard
      key={event.eventUid}
      eventUid={event.eventUid}
      title={event.title}
      orgName={event.orgName}
      description={event.description}
      thumbnailPath={event.thumbnailPath}
      volunteerCount={event.volunteerCount}
      onEventPanelClick={handleEventPanelClick}
    />
  ))
)}
      </div>

      <style jsx>{`
        .managed-events-container {
          width: 100%;
          margin-top: 40px;
        }
        
        .events-header {
          display: flex;
          width: 100%;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .section-title {
          color: #fff;
          text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-size: 36px;
          font-family: Alexandria, sans-serif;
          font-weight: 800;
          margin: 0;
        }
        
        .managed-events-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          width: 100%;
        }
        
        .loading-message, .empty-message {
          width: 100%;
          background-color: white;
          border-radius: 10px;
          padding: 20px;
          text-align: center;
          font-family: Alexandria, sans-serif;
          color: #666;
        }
      `}</style>
    </div>
  );
}

export default ManagedEventsSection;