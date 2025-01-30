import * as React from "react";
import { styles } from "../../styles/styles";

export default function Hero({ onSignUpClick }) {
  const [isPressed, setIsPressed] = React.useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsPressed(true);
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsPressed(false);
      onSignUpClick(); // ✅ Open SignUpForm
      event.preventDefault();
    }
  };
  return (
    <section className="hero-section" role="banner" aria-label="Main hero section">
      <div className="content-wrapper">
        <h1 className="heading" style={{margin: "0 0 0 0", width:"910px"}}>Reach your goal with us.</h1>
        <p className="subheading">
        Anita Maxwin offers open-site betting that guarantees a worry-free, exciting experience for all players. Anita Maxwin ensures you enjoy every moment.
        </p>
        <button 
          className={'ctaButton ${isPressed ? "pressed" : ""}'}
          onClick={onSignUpClick} // ✅ Calls the SignUp function
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
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
        .ctaButton {
          ${styles.ctaButton}
        }
      `}</style>
    </section>
  );
}