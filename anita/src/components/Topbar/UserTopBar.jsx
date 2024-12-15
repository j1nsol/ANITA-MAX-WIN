import * as React from "react";
import { UserTopBarStyles } from "../../styles/TopBar/UserTopBar";

export function UserTopBar() {
  const [isSigningOut, setIsSigningOut] = React.useState(false);

  const handleSignOut = async () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <>
      <nav className="navigation" role="navigation" aria-label="Main navigation">
        <div className="navigation-container">
          <div className="navigation-content">
            <div className="navigation-logo">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/80407b765b62464b1ed8cfbe325a4a648975ddfbe691c0c276fa71e613bb0b6e?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                className="navigation-logo-primary"
                alt="Primary company logo"
                width="102"
                height="88"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/ea6aecb91eac79a590fed19496e459d4e8d4fa75c3aecf2ce256f592d96eb957?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                className="navigation-logo-secondary"
                alt="Secondary company logo"
                width="199"
                height="70"
              />
            </div>
            <div className="navigation-user">
              <div className="navigation-user-info">
                <div className="navigation-profile">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/6915d84e76836b882aa259489055a969edc3345c2ebf0e5b9df622b730afb8d1?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                    className="navigation-profile-image"
                    alt="User profile picture"
                    width="89"
                    height="89"
                  />
                  <div className="navigation-username" aria-label="Username">
                    jzxyREAL
                  </div>
                </div>
                <div 
                  className="navigation-balance"
                  aria-label="Account balance"
                >
                  <div>Balance</div>
                  <div aria-live="polite">0.0</div>
                </div>
              </div>
              <button 
                className="navigation-signout"
                onClick={handleSignOut}
                disabled={isSigningOut}
                aria-label="Sign out of your account"
                aria-busy={isSigningOut}
              >
                {isSigningOut ? "Signing out..." : "Sign out"}
              </button>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{UserTopBarStyles}</style>
    </>
  );
}