import * as React from "react";
import { styles } from "./styles";

export default function ComingSoon() {
  return (
    <>
      <section className="coming-soon-section">
        <div className="content-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9cc79ee99a0d7666a0cd5210798d64e1b964eb8028adbf9ec1c6f445865d65c?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
            className="background-image"
            alt=""
          />
          COMING SOON
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  );
}