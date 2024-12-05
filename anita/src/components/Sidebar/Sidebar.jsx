import * as React from "react";
import { SidebarButton } from "./SidebarButton";
import { SidebarGroup } from "./SidebarGroup";
import { sidebarStyles } from "../../styles/Sidebar/SidebarStyles";

export function Sidebar() {
  const navigationIcons = [
    {
      id: "sidebar-nav1",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/8ce95f0ce5869a3ab8c4bd2a8d88e63636ad63685752c10d128d0db0bb9e54dd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Navigation item 1",
      className: "sidebar-nav-icon",
      ariaLabel: "Navigate to section 1",
      onClick: () => console.log("Nav 1 clicked")
    },
    {
      id: "sidebar-nav2",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/df0952cc08237801f32a31b3ad8ac54d9035fa785e0b58d6bf23d007b445739b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Navigation item 2",
      className: "sidebar-nav-icon",
      ariaLabel: "Navigate to section 2",
      onClick: () => console.log("Nav 2 clicked")
    },
    {
      id: "sidebar-nav3",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a52b7b089fd59e95cfdf1466edc04d3b69c52c597edaac694283447a641f27e6?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Navigation item 3",
      className: "sidebar-nav-icon",
      ariaLabel: "Navigate to section 3",
      onClick: () => console.log("Nav 3 clicked")
    }
  ];

  const eventIcons = [
    {
      id: "sidebar-event1",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7111e4101ba9e8f17b34d118b3a1be1173f9121a121a36bcf49df5b144dbd7fe?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Event icon",
      className: "sidebar-event-icon",
      ariaLabel: "View events",
      onClick: () => console.log("Event clicked")
    }
  ];

  const utilityIcons = [
    {
      id: "sidebar-util1",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1acbf83b7efa59e232393ed90efbf644b7f7a4a10917fbaea94bd00f9f9bb61d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Utility item 1",
      className: "sidebar-utility-icon",
      ariaLabel: "Utility action 1",
      onClick: () => console.log("Utility 1 clicked")
    },
    {
      id: "sidebar-util2",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/5b2ee72992631a01a245dc5ca4b779b2fe7356dabe8ac569cf848472738ff941?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Utility item 2",
      className: "sidebar-utility-icon",
      ariaLabel: "Utility action 2",
      onClick: () => console.log("Utility 2 clicked")
    },
    {
      id: "sidebar-util3",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/142447c3128af8b4fa7c29fe0e5cc4db3c108f015d07b06b897cf277b5029ced?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Utility item 3",
      className: "sidebar-utility-icon",
      ariaLabel: "Utility action 3",
      onClick: () => console.log("Utility 3 clicked")
    },
    {
      id: "sidebar-util4",
      src: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/bf6b8b5b94cb1452b3f324c68cfd38d28d9ecb575ee00ef2fb7b02e3b01e6b3b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
      alt: "Utility item 4",
      className: "sidebar-utility-icon",
      ariaLabel: "Utility action 4",
      onClick: () => console.log("Utility 4 clicked")
    }
  ];

  return (
    <nav 
      className="sidebar" 
      role="navigation" 
      aria-label="Main navigation"
    >
      <div className="sidebar-content">
        <SidebarGroup 
          icons={navigationIcons} 
          className="sidebar-nav-group"
          groupLabel="Navigation options"
        />
        
        <div className="sidebar-event-container">
          <SidebarGroup 
            icons={eventIcons} 
            className="sidebar-event-group"
            groupLabel="Event actions"
          />
        </div>

        <SidebarButton
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/6830a173d7bbccabbe885bd76cfa28aa8e775e89213385f18478bc22e52fcc54?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          alt="Additional navigation item"
          className="sidebar-nav-icon"
          ariaLabel="Additional navigation"
          onClick={() => console.log("Additional nav clicked")}
        />

        <div className="sidebar-utility-container">
          <SidebarGroup 
            icons={utilityIcons} 
            className="sidebar-utility-group"
            groupLabel="Utility actions"
          />
        </div>
      </div>

      <style jsx>{sidebarStyles}</style>
    </nav>
  );
}