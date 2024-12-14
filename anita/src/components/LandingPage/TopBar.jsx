import * as React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles/TopBar";

export default function TopBar() {
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

  const handleSignUp = () => {
    // Add SignUp logic here
  };

  const handleSignIn = () => {
    // Add SignIn logic here
  };

  return (
    <>
      <header className="top-bar" role="banner">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/ce9220e4cf4bd801c58c5001c422f8b76095b0a061fff9f53b985fafffb3aa6d?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          className="logo"
          alt="Company Logo"
          width="323"
          height="71"
        />
        <nav 
          className="auth-buttons" 
          role="navigation" 
          aria-label="Authentication navigation"
        >
          <Link to="/signup" className="no-underline">
            <button
              className={`auth-button signup ${isPressed ? "pressed" : ""}`}
              onClick={handleSignUp}
              onKeyDown={handleKeyDown}
              onKeyUp={(event) => handleKeyUp(event, handleSignUp)}
              aria-label="Sign up for an account"
              role="button"
              tabIndex={0}
            >
              Sign up
            </button>
          </Link>
          <Link to="/login" className="no-underline">
            <button
              className={`auth-button signin ${isPressed ? "pressed" : ""}`}
              onClick={handleSignIn}
              onKeyDown={handleKeyDown}
              onKeyUp={(event) => handleKeyUp(event, handleSignIn)}
              aria-label="Login to your account"
              role="button"
              tabIndex={0}
            >
              Login
            </button>
          </Link>
        </nav>
      </header>
      <style jsx>{styles}</style>
    </>
  );
}
