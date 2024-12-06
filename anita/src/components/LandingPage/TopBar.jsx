import * as React from "react";
import { AuthButton } from "./AuthButton";
import { styles } from "../../styles/TopBar";
import { SignUpForm } from "../Authentication/SignupForm";
import { Link } from "react-router-dom";

export default function TopBar() {
  const handleSignUp = () => {
  };

  const handleSignIn = () => {
    // Production implementation would go here
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
          <AuthButton 
            type="signup" 
            onClick={handleSignUp}
            aria-label="Sign up for an account"
            
          />
          <AuthButton 
            type="signin" 
            onClick={handleSignIn}
            aria-label="Login to your account"
          />
        </nav>
      </header>
      <style jsx>{styles}</style>
    </>
  );
}