import * as React from "react";
import { styles } from "../styles/comingsoon";

export default function ComingSoon() {
  return (
    <>
      <div className="coming-soon-container">
        <div className="banner-wrapper">
          <div className="content-wrapper">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9cc79ee99a0d7666a0cd5210798d64e1b964eb8028adbf9ec1c6f445865d65c?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
              className="background-image"
              alt="Coming soon background"
            />
            <div className="announcement-text" role="heading" aria-level="1">
              COMING SOON
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </>
  );
}