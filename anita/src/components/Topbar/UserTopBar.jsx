import React, { useEffect, useState } from "react";
import { UserTopBarStyles } from "../../styles/TopBar/UserTopBar";
import { auth, db } from "../../firebase"; // Update the path based on your project structure
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
export function UserTopBar() {
  const [username, setUsername] = useState("Loading...");
  const [token, setToken] = useState(0.0); // Assuming balance is fetched similarly
  const [isSigningOut, setIsSigningOut] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userDoc = doc(db, "User", user.uid); // Replace "User" with your collection name
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsername(data.username || "Unknown"); // Update based on your Firestore fields
          setToken(data.token || 0.0); // Optional: Fetch other fields like balance
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = async () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    try {
      await auth.signOut();
      Navigate("/login");
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setIsSigningOut(false);
      Navigate("/login");
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
                height="75"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/ea6aecb91eac79a590fed19496e459d4e8d4fa75c3aecf2ce256f592d96eb957?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                className="navigation-logo-secondary"
                alt="Secondary company logo"
                width="199"
                height="75"
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
                    height="80"
                  />
                  <div className="navigation-username" aria-label="Username">
                    {username}
                  </div>
                </div>
                <div className="navigation-balance" aria-label="Account balance">
                  <div>Balance</div>
                  <div aria-live="polite">{token.toFixed(2)}</div>
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
