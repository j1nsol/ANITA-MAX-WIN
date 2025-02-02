import * as React from "react";

<<<<<<< Updated upstream
const imageData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/8ce95f0ce5869a3ab8c4bd2a8d88e63636ad63685752c10d128d0db0bb9e54dd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Navigation icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/df0952cc08237801f32a31b3ad8ac54d9035fa785e0b58d6bf23d007b445739b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Settings icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a52b7b089fd59e95cfdf1466edc04d3b69c52c597edaac694283447a641f27e6?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Profile icon" }
];

const otherIconsData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1acbf83b7efa59e232393ed90efbf644b7f7a4a10917fbaea94bd00f9f9bb61d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Help icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/5b2ee72992631a01a245dc5ca4b779b2fe7356dabe8ac569cf848472738ff941?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Support icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/142447c3128af8b4fa7c29fe0e5cc4db3c108f015d07b06b897cf277b5029ced?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Notifications icon" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/bf6b8b5b94cb1452b3f324c68cfd38d28d9ecb575ee00ef2fb7b02e3b01e6b3b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Messages icon" }
];

export function SidebarImage({ src, alt, className }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className={className}
    />
  );
}

export function IconsContainer({ children, className }) {
  return (
    <div className={className} role="group">
      {children}
    </div>
  );
}

=======
const iconsData = [
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/8ce95f0ce5869a3ab8c4bd2a8d88e63636ad63685752c10d128d0db0bb9e54dd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "casino icon", to: "/games", title: "Games" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/df0952cc08237801f32a31b3ad8ac54d9035fa785e0b58d6bf23d007b445739b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "sports icon", to: "/sports", title: "Sports" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a52b7b089fd59e95cfdf1466edc04d3b69c52c597edaac694283447a641f27e6?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "profile icon", to: "/info", title: "Profile" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7111e4101ba9e8f17b34d118b3a1be1173f9121a121a36bcf49df5b144dbd7fe?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Events icon", to: "/events", title: "Events" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/6830a173d7bbccabbe885bd76cfa28aa8e775e89213385f18478bc22e52fcc54?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Calendar icon", to: "/calendar", title: "Calendar" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1acbf83b7efa59e232393ed90efbf644b7f7a4a10917fbaea94bd00f9f9bb61d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Help icon", to: "/help", title: "Help" },
  { src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/5b2ee72992631a01a245dc5ca4b779b2fe7356dabe8ac569cf848472738ff941?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", alt: "Support icon", to: "/support", title: "Support" }
];

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        {imageData.map((img, index) => (
          <SidebarImage
            key={index}
            src={img.src}
            alt={img.alt}
            className="sidebar-icon"
          />
        ))}
        <IconsContainer className="sidebar-event-container">
          <SidebarImage
            src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7111e4101ba9e8f17b34d118b3a1be1173f9121a121a36bcf49df5b144dbd7fe?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
            alt="Events icon"
            className="sidebar-event-icon"
          />
        </IconsContainer>
        <SidebarImage
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/6830a173d7bbccabbe885bd76cfa28aa8e775e89213385f18478bc22e52fcc54?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          alt="Calendar icon"
          className="sidebar-icon"
        />
        <IconsContainer className="sidebar-other-container">
          {otherIconsData.map((icon, index) => (
            <SidebarImage
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="sidebar-other-icon"
            />
          ))}
        </IconsContainer>
=======
        {iconsData.map((icon, index) => (
          <Link to={icon.to} key={index} className="sidebar-link">
            <div className="sidebar-item">
              <img src={icon.src} alt={icon.alt} className="sidebar-icon" />
              <span className={`icon-title ${isExpanded ? "visible" : ""}`}>{icon.title}</span>
              {!isExpanded && <span className="tooltip">{icon.title}</span>}
            </div>
          </Link>
        ))}
>>>>>>> Stashed changes
      </div>
      <style jsx>{`
        .sidebar {
          position: fixed;
<<<<<<< Updated upstream
          display: flex;
          max-width: 100px;
          z-index: 1500;
          flex-direction: column; 
         
=======
          top: 0;
          left: 0;
          height: 100vh;
          width: 70px;
          background-color: rgba(229, 231, 235, 1);
          transition: width 0.3s ease-in-out;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          z-index: 1000;
        }
        .sidebar.expanded {
          width: 220px;
>>>>>>> Stashed changes
        }
        .sidebar-top {
          padding: 8px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }
        .sidebar-logo {
          width: 50px; /* Adjusted for better fit */
          height: 50px;
        }
        .sidebar-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 15px;
          width: 100%;
        }
        .sidebar-icon {
<<<<<<< Updated upstream
          border-radius: 10px;
          background-color: rgba(201, 202, 203, 1);
          display: flex;
          width: 50px;
          height: 50px;
          padding: 5px 5px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          margin-top: 6px;
        }
        .sidebar-event-container {
          border-radius: 10px;
          background-color: rgba(201, 202, 203, 1);
          display: flex;
          width: 50px;
          height: 50px;
          padding: 5px 5px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
          margin-top: 6px;
          
        }
        .sidebar-event-icon {
          aspect-ratio: 0.98;
          object-fit: contain;
          object-position: center;
          width: 100%;
        }
        .sidebar-other-container {
          border-radius: 10px;
          background-color: rgba(201, 202, 203, 1);
          display: flex;
          width: 50px;
          height: 272px;
          padding: 10px 5px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
          margin-top: 15px;
        }
        .sidebar-other-icon {
          aspect-ratio: 1;
          object-fit: contain;
          object-position: center;
          width: 52px;
          margin-top: 13px;
        }
        .sidebar-other-icon:first-child {
          margin-top: 0;
=======
          width: 35px; /* Adjusted icon size */
          height: 35px;
          transition: transform 0.2s ease-in-out;
        }
        .icon-title {
          opacity: 0;
          white-space: nowrap;
          font-size: 15px;
          margin-left: 10px;
          transition: opacity 0.3s ease-in-out;
          color: black;
        }
        .sidebar.expanded .icon-title {
          opacity: 1;
        }
        /* Tooltip (Message Box Style) */
        .tooltip {
          position: absolute;
          left: 80px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 12px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
          white-space: nowrap;
        }
        .sidebar-item:hover .tooltip {
          opacity: 1;
          visibility: visible;
>>>>>>> Stashed changes
        }
      `}</style>
    </nav>
  );
}
