import * as React from "react";
import { topbar } from "../../styles/TopBar/topbar";

export function TopBar() {
  const [isSigningOut, setIsSigningOut] = React.useState(false);

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Sign out failed:', error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <>
      <header className="topbar" role="banner">
        <div className="user-section">
          <div className="profile-container">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/96e1c929b004f7628d2d024bab21fd6c85b51b5505dd325fd9aa168785bb4db9?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
              alt="User profile"
              className="profile-image"
            />
            <div className="username" role="heading" aria-level="2">
              Username
            </div>
          </div>
          <div className="balance-container" aria-live="polite">
            <div id="balance-label">Balance</div>
            <div className="balance-amount" aria-labelledby="balance-label">
              0.0
            </div>
          </div>
        </div>
        <button 
          className="signout-button"
          onClick={handleSignOut}
          disabled={isSigningOut}
          aria-label="Sign out of your account"
          aria-busy={isSigningOut}
        >
          {isSigningOut ? 'Signing out...' : 'Sign out'}
        </button>
      </header>
      <style jsx>{topbar}</style>
    </>
  );
}