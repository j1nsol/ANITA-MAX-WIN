import * as React from "react";
import { Link } from "react-router-dom";

export function AuthButton({ type, onClick, "aria-label": ariaLabel }) {
  const [isPressed, setIsPressed] = React.useState(false);
  const label = type === "signup" ? "Sign up" : "Login";

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsPressed(true);
      event.preventDefault();
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      setIsPressed(false);
      onClick();
      event.preventDefault();
    }
  };

  return (
    <Link to="/signup" className="no-underline">
    <button 
    
      className={`auth-button ${type} ${isPressed ? "pressed" : ""}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      aria-label={ariaLabel || label}
      role="button"
      tabIndex={0}
    >
      {label}
    </button>
    </Link>
  );
}