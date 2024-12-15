import * as React from "react";
import { styles } from "./styles";

export function ApplicationOverlay({ onClose }) {
  return (
    <>
      <div className="overlay">
        <div className="sign-in-panel">
          <button 
            onClick={onClose}
            className="close-button"
            aria-label="Close application status overlay"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4eef2b778a378c85b3e3ecf7aa1b63b4916aa733d3106545e32a9d915da29caa?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
              className="close-icon"
              alt=""
            />
          </button>

          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/544904b6637bccde0e6e8a9b047b8551369ac029dde414f7a3e278a86274c076?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
            className="status-img"
            alt="Application status indicator"
          />

          <div className="organize-event">
            Thank you! Your application is being processed.
          </div>

          <div className="status-divider" />
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}