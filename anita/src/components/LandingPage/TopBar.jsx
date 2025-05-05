import * as React from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation for conditional logic
import DefaultTopBarStyles from '../../styles/TopBar';

export default function TopBar({ onSignUpClick, onSignInClick }) {
  const [isPressed, setIsPressed] = React.useState(false);
  const location = useLocation(); // Get the current route

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsPressed(true);
      event.preventDefault();
    }
  };

  const handleKeyUp = (event, onClick) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsPressed(false);
      onClick();
      event.preventDefault();
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      // Scroll to the top of the page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <style>{DefaultTopBarStyles}</style>
      <header className="top-bar" role="banner">
        <Link
          to={location.pathname === "/aboutus" ? "/" : location.pathname}
          onClick={handleLogoClick} // Trigger scroll to top
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/ce9220e4cf4bd801c58c5001c422f8b76095b0a061fff9f53b985fafffb3aa6d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
            className="logo"
            alt="Company Logo"
            width="323"
            height="71"
          />
        </Link>
        <nav className="auth-buttons" role="navigation" aria-label="Authentication navigation">
          <button
            className={`authbutton signup ${isPressed ? "pressed" : ""}`}
            onClick={onSignUpClick}
            onKeyDown={handleKeyDown}
            onKeyUp={(event) => handleKeyUp(event, onSignUpClick)}
            aria-label="Sign up for an account"
            role="button"
            tabIndex={0}
          >
            Sign up
          </button>
          <button
            className={`authbutton signin ${isPressed ? "pressed" : ""}`}
            onClick={onSignInClick}
            onKeyDown={handleKeyDown}
            onKeyUp={(event) => handleKeyUp(event, onSignInClick)}
            aria-label="Login to your account"
            role="button"
            tabIndex={0}
          >
            Login
          </button>
        </nav>
      </header>
    </>
  );
}