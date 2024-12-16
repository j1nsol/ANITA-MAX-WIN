import React from 'react';
import { useNavigate } from 'react-router-dom';

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
  
    const handleJoin = () => {
      navigate(`/events/${useruid}/${eventuid}`);
    };
  
  return (
    <article className="event-card">
      {/* Header Section */}
      <div className="event-header">
        <div className="event-info">
          <h2 className="event-title">{title}</h2> {/* Dynamic title */}
          <p className="event-organizer">{organizer}</p> {/* Dynamic organizer */}
        </div>
        <div className="event-image-wrapper">
          <img 
            src={image}  // Dynamic image source
            alt={`Event cover for ${title}`} 
            className="event-image" 
          />
        </div>
      </div>

      {/* Event Details */}
      <div className="event-details">
        <div className="event-datetime">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/4fe966bdde15fdccf1e67daed45da7f8ceea7ec5886c7355f55cc9d768c43114?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
            alt=""
            className="event-icon"
          />
          <time dateTime={date}>{date}</time> {/* Dynamic date */}
          <span className="event-time">{time}</span> {/* Dynamic time */}
        </div>

        <div className="event-location">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/3d64fa0bea6f5acf2a45fcc8bb1b7fbae61fcc0a3be72a4a2cb5b5d23bcbb6b6?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
            alt=""
            className="event-icon"
          />
          <address className="location-text">{location}</address> {/* Dynamic location */}
        </div>
      </div>

      {/* Event Description */}
      <p className="event-description">{description}</p> {/* Dynamic description */}

      {/* Event Actions */}
      <div className="event-actions">
      <button className="join-button" onClick={handleJoin}>
  <img
    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/4b861371bd30925e98b0c320bcba01d0f8ed1dcd59a8c2d6c5b454f11b2a4f74?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
    alt=""
    className="join-icon"
  />
  <span>Join</span>
</button>
        <div className="token-info">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/988024d5b9e0ebb2da903c27655c1c3e55b41f289a99bd50a7d3e5377fc4d56c?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
            alt=""
            className="token-icon"
          />
          <span className="token-text">Earn {tokens} Tokens</span> {/* Dynamic tokens */}
        </div>
      </div>
    </article>
  );
};

export default EventCard;
