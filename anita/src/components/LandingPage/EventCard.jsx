import React from 'react';
import { CommunityEventStyles } from '../../styles/EventStyles';

export const CommunityEventsList = () => {
  const events = [
    {
      title: 'Community Hackathon',
      date: '2024-11-29',
      location: 'Virtual',
      attendees: 120
    },
    {
      title: 'Skill Share Workshop',
      date: '2024-11-30',
      location: 'Virtual',
      attendees: 50
    },
    {
      title: 'Charity Game Night',
      date: '2024-12-01',
      location: 'Virtual',
      attendees: 180
    },
    {
      title: 'Tech Talk',
      date: '2024-12-02',
      location: 'Virtual',
      attendees: 156
    }
  ];

  const handleJoinEvent = (eventTitle) => {
    // Production event join handler would go here
  };

  return (
    <>
      <CommunityEventStyles />
      <main className="community-events-container" role="main">
        <section 
          className="community-events-list" 
          aria-label="Upcoming Community Events"
        >
          {events.map((event, index) => (
            <article 
              key={`event-${index}`} 
              className="community-event-card"
              aria-labelledby={`event-title-${index}`}
            >
              <div className="community-event-content">
                <h2 
                  id={`event-title-${index}`}
                  className="community-event-title"
                >
                  {event.title}
                </h2>
                <div className="community-event-meta">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/b7bbd1527f80a14e15e8860425c084fbb1da4f79b763510e63e1768a47b93396?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" 
                    alt="Calendar" 
                    className="community-event-icon" 
                  />
                  <span>{event.date}</span>
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/4dc6dc77d7e4fcdd2bb3e62654fd3e0b8b15e842500fb39cb0b862b2877c7080?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" 
                    alt="Location" 
                    className="community-event-icon" 
                  />
                  <span>{event.location}</span>
                </div>
              </div>
              <div className="community-event-actions">
                <div className="community-event-attendees">
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a00e3c763c88f6d98d6dbe3bdac83b499769c6a4f7bd8d6cecacbde5e750a501?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" 
                    alt="Attendees" 
                    className="community-event-icon" 
                  />
                  <span aria-label={`${event.attendees} attendees`}>
                    {event.attendees}
                  </span>
                </div>
                <button 
                  onClick={() => handleJoinEvent(event.title)}
                  className="community-event-join"
                  aria-label={`Join ${event.title}`}
                >
                  <img 
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/cef32c624558c57e1f4638d26489bba33f5b357a502f87401d860dd8f1f2e374?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" 
                    alt="" 
                    className="community-event-icon" 
                    aria-hidden="true"
                  />
                  <span>Join</span>
                </button>
              </div>
            </article>
          ))}
          <button 
            className="community-events-view-all"
            aria-label="View all community events"
          >
            View All Events
          </button>
        </section>
      </main>
    </>
  );
};