import * as React from "react";
import { SidebarButton } from "./SidebarButton";
import { sidebarGroupStyles } from "../../styles/Sidebar/SidebarStyles";

export function SidebarGroup({ icons, className, groupLabel }) {
  return (
    <div 
      className={`sidebar-group ${className}`}
      role="group"
      aria-label={groupLabel}
    >
      {icons.map((icon, index) => (
        <SidebarButton
          key={icon.id || index}
          src={icon.src}
          alt={icon.alt}
          className={icon.className}
          onClick={icon.onClick}
          ariaLabel={icon.ariaLabel}
        />
      ))}
      <style jsx>{sidebarGroupStyles}</style>
    </div>
  );
}