import React from 'react';
import { ChevronRight } from 'lucide-react';

function ManagedEventCard({
  eventUid,
  title,
  orgName,
  description,
  thumbnailPath,
  volunteerCount,
  onEventPanelClick
}) {
  return (
    <div className="managed-event-card">
      <div className="card-event-content">
        <div className="event-thumbnail">
          <img 
            src={thumbnailPath || "/placeholder.svg?height=150&width=150"} 
            alt={title}
            className="thumbnail-image"
          />
        </div>
        <div className="event-details">
          <h3 className="event-title">{title}</h3>
          <p className="event-org">{orgName}</p>
          <p className="event-description">{description}</p>
          <div className="event-footer">
            <div className="volunteer-count">
              <span className="volunteer-label">VOLUNTEERS</span>
              <span className="volunteer-number">{String(volunteerCount).padStart(2, '0')}</span>
            </div>
            <button 
              className="event-panel-btn"
              onClick={() => onEventPanelClick(eventUid)}
            >
              Event Panel
              <ChevronRight className="btn-icon" size={16} />
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .managed-event-card {
          width: 100%;
          background-color: white;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 16px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        @media (min-width: 768px) {
          .managed-event-card {
            width: calc(50% - 10px); /* 2 cards per row with gap */
          }
        }
        
        @media (min-width: 1200px) {
          .managed-event-card {
            width: calc(33.333% - 14px); /* 3 cards per row with gap */
          }
        }
        
        .card-event-content {
          display: flex;
          padding: 16px;
        }
        
        .event-thumbnail {
          flex-shrink: 0;
          width: 150px;
          height: 150px;
          margin-right: 20px;
        }
        
        .thumbnail-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .event-details {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .event-title {
          font-family: Alexandria, sans-serif;
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 4px 0;
          color: #000;
        }
        
        .event-org {
          font-family: Alexandria, sans-serif;
          font-size: 18px;
          margin: 0 0 12px 0;
          color: #333;
        }
        
        .event-description {
          font-family: Alexandria, sans-serif;
          font-size: 14px;
          color: #666;
          margin: 0 0 auto 0;
          line-height: 1.4;
          max-height: 60px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }
        
        .event-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
        }
        
        .volunteer-count {
          display: flex;
          align-items: center;
        }
        
        .volunteer-label {
          font-family: Alexandria, sans-serif;
          font-size: 12px;
          font-weight: bold;
          color: #666;
          margin-right: 8px;
        }
        
        .volunteer-number {
          font-family: Alexandria, sans-serif;
          font-size: 24px;
          font-weight: bold;
          color: #000;
        }
        
        .event-panel-btn {
          display: flex;
          align-items: center;
          background-color: #333;
          color: white;
          border: none;
          border-radius: 4px;
          padding: 8px 16px;
          font-family: Alexandria, sans-serif;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .event-panel-btn:hover {
          background-color: #555;
        }
        
        .btn-icon {
          margin-left: 4px;
        }
      `}</style>
    </div>
  );
}

export default ManagedEventCard;