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
