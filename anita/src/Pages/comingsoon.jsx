import React from "react";
import { ComingSoonStyle } from "../styles/comingsoon";

export default function ComingSoon() {
  return (
    <>
      <section className="coming-soon-section">
        <div className="content-wrapper">
          <h1 className="title">
            COMING<br />SOON
          </h1>
          <p className="subtitle">We’re almost there.</p>
        </div>
      </section>
      <style jsx>{ComingSoonStyle}</style>
    </>
  );
}
