import * as React from "react";
import { Link } from "react-router-dom";
import DefaultTopBarStyles from '../../styles/TopBar';

export default function TopBar({ onSignUpClick, onSignInClick }) {
  const [isPressed, setIsPressed] = React.useState(false);

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

  return (
    <>
      <style>{DefaultTopBarStyles}</style>
      <header className="top-bar" role="banner">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/ce9220e4cf4bd801c58c5001c422f8b76095b0a061fff9f53b985fafffb3aa6d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          className="logo"
          alt="Company Logo"
          width="323"
          height="71"
        />
        <nav className="auth-buttons" role="navigation" aria-label="Authentication navigation">
          <button
            className={`auth-button signup ${isPressed ? "pressed" : ""}`}
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
            className={`auth-button signin ${isPressed ? "pressed" : ""}`}
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
