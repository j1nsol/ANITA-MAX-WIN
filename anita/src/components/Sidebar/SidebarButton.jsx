import * as React from "react";
import { sidebarButtonStyles } from "../../styles/Sidebar/SidebarStyles";

export function SidebarButton({ src, alt, className, onClick, ariaLabel }) {
  return (
    <button 
      onClick={onClick}
      className={`sidebar-button ${className}`}
      aria-label={ariaLabel}
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="sidebar-button-image"
      />
      <style jsx>{sidebarButtonStyles}</style>
    </button>
  );
}