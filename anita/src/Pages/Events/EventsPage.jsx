import React, { useEffect, useState } from "react";
import { db } from "../../firebase"; // Your Firebase config
import { collection, getDocs } from "firebase/firestore";
import EventCard from "./components/EventCard";
import SearchControls from "./components/SearchControls";
import EventsGlobalStyles from './styles/EventsStyles';
import Sidebar from "../../components/Sidebar/Sidebar";
import { UserTopBar } from "../../components/Topbar/UserTopBar";

const Events = () => {
  const [eventsData, setEventsData] = useState([]); // State to hold event data

  useEffect(() => {
    const fetchEvents = async () => {
      const allEvents = []; // Array to store all events

      try {
        const usersSnapshot = await getDocs(collection(db, "Events"));
        console.log("Fetched Documents in Events Collection:", usersSnapshot.docs);

        if (usersSnapshot.empty) {
          console.warn("The 'Events' collection is empty.");
          return; // Stop execution if no documents are found
        }

        for (const userDoc of usersSnapshot.docs) {
          console.log("Event Document ID:", userDoc.id, "Data:", userDoc.data());

          // Get any additional user-specific data (like name, email, etc.)
          const userData = userDoc.data(); // This will include all fields in the user document

          const handledEventsSnapshot = await getDocs(
            collection(db, "Events", userDoc.id, "HandledEvents")
          );

          console.log("Fetched Handled Events:", handledEventsSnapshot.docs);

          handledEventsSnapshot.forEach((eventDoc) => {
            console.log("Event Doc ID:", eventDoc.id); 
            const eventData = eventDoc.data();
            allEvents.push({
              useruid: userDoc.id, // Include the user document ID
              userData, // Include the user data, which could include name, email, etc.
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
          });
        }

        // Updating state with fetched event data
        setEventsData(allEvents);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array to run on component mount

  return (
    <>
      <EventsGlobalStyles />
      <main className="events">
        <Sidebar/>
        <UserTopBar/>
        <div className="landing-container">
          <SearchControls />
          <div className="events-grid">
            {eventsData.map((event, index) => (
              <EventCard key={event.eventuid} {...event} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Events;
