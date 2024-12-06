import * as React from "react";

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

export default function Sidebar() {
  return (
    <nav className="sidebar" role="navigation" aria-label="Main navigation">
      <div className="sidebar-top">
        <SidebarImage
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7572a51549d29376362dc58db69d1e2413f45cd9ca88505a23e2c4a416ce318d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          alt="Company logo"
          className="sidebar-logo"
        />
      </div>
      <div className="sidebar-content">
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
      </div>
      <style jsx>{`
        .sidebar {
          display: flex;
          max-width: 100px;
          flex-direction: column;
        }
        .sidebar-top {
          background-color: rgba(229, 231, 235, 1);
          box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.25);
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: center;
          padding: 14px 23px;
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
          width: 100%;
          flex-direction: column;
          padding: 31px 23px 29px;
        }
        .sidebar-icon {
          border-radius: 10px;
          background-color: rgba(201, 202, 203, 1);
          display: flex;
          width: 67px;
          height: 68px;
          padding: 8px 5px;
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
          width: 67px;
          height: 68px;
          padding: 8px 5px;
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
          width: 67px;
          height: 272px;
          padding: 6px 3px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
          margin-top: 6px;
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
        }
      `}</style>
    </nav>
  );
}