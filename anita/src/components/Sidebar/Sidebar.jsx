import * as React from "react";
import { Link } from 'react-router-dom';

const iconsData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/8ce95f0ce5869a3ab8c4bd2a8d88e63636ad63685752c10d128d0db0bb9e54dd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "casino icon", to: "/games", title: "Games" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/df0952cc08237801f32a31b3ad8ac54d9035fa785e0b58d6bf23d007b445739b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "sports icon", to: "/sports", title: "Sports" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a52b7b089fd59e95cfdf1466edc04d3b69c52c597edaac694283447a641f27e6?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "profile icon", to: "/info", title: "Profile" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7111e4101ba9e8f17b34d118b3a1be1173f9121a121a36bcf49df5b144dbd7fe?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Events icon", to: "/events", title: "Events" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/6830a173d7bbccabbe885bd76cfa28aa8e775e89213385f18478bc22e52fcc54?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Calendar icon", to: "/calendar", title: "Calendar" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1acbf83b7efa59e232393ed90efbf644b7f7a4a10917fbaea94bd00f9f9bb61d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Help icon", to: "/help", title: "Help" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/5b2ee72992631a01a245dc5ca4b779b2fe7356dabe8ac569cf848472738ff941?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Support icon", to: "/support", title: "Support" }
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <nav className={`sidebar ${isExpanded ? "expanded" : ""}`}>
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
              <img src={icon.src} alt={icon.alt} className="sidebar-icon" />
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
          max-width: 100px;
          z-index: 1500;
          flex-direction: column; 
          left: 0;
          top: 0;
          transition: max-width 0.3s ease;
        }
        .sidebar.expanded {
          max-width: 300px; /* Increased width for expanded sidebar */
        }
        .sidebar-top {
          background-color: rgba(229, 231, 235, 1);
          box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 5px 10px;
          cursor: pointer;
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
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .sidebar-item:hover {
          background-color: rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }
        .sidebar-icon {
          width: 50px;
          height: 50px;
          margin-right: 10px;
        }
        .icon-title {
          font-size: 16px;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          transition: opacity 0.3s ease;
          opacity: 0;
        }
        .icon-title.visible {
          opacity: 1;
        }
        .tooltip {
          position: absolute;
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 5px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s, opacity 0.3s ease;
        }
        .sidebar-item:hover .tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>
    </nav>
  );
}