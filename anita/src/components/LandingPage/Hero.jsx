import * as React from "react";
import { styles } from "../../styles/styles";

export default function Hero() {
  return (
    <section className="hero-section" role="banner" aria-label="Main hero section">
      <div className="content-wrapper">
        <h1 className="heading" style={{margin: "0 0 0 0"}}>Reach your goal with us.</h1>
        <p className="subheading">
          Anita Maxwin offers open-site betting for a worry-free, exciting experience
        </p>
        <button 
          className="cta-button"
          onClick={() => {}}
          tabIndex={0}
          aria-label="Join the Community"
        >
          Join the Community
        </button>
      </div>

      <style jsx>{`
        .hero-section {
          ${styles.heroSection}
        }
        .content-wrapper {
          ${styles.contentWrapper}
        }
        .heading {
          ${styles.heading}
        }
        .subheading {
          ${styles.subheading}
        }
        .cta-button {
          ${styles.ctaButton}
        }
      `}</style>
    </section>
  );
}