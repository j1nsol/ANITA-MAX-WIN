import React, { useEffect, useState } from "react";
import { UserTopBarStyles } from "../../styles/TopBar/UserTopBar";
import { auth, db, storage } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import { onSnapshot } from "firebase/firestore";


export function UserTopBar() {
  const [username, setUsername] = useState("Loading...");
  const [token, setToken] = useState(0.0);
  const [profileImage, setProfileImage] = useState(null);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;
  
    const userDoc = doc(db, "User", user.uid);
  
    // Real-time listener
    const unsubscribe = onSnapshot(userDoc, (docSnap) => {
      if (docSnap.exists()) {
        const data = docSnap.data();
        setUsername(data.username || "Unknown");
        setToken(data.token || 0.0);
      } else {
        console.error("User document does not exist.");
      }
    }, (error) => {
      console.error("Error listening to user document:", error);
    });
  
  
    // Clean up listener on unmount
    return () => unsubscribe();
  }, []);
  const handleSignOut = async () => {
    if (isSigningOut) return;
    setIsSigningOut(true);
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setIsSigningOut(false);
      navigate("/login");
    }
  };

  return (
    <>
    
      <nav className="navigation" role="navigation" aria-label="Main navigation">
      
        <div className="navigation-container">
          <div className="navigation-content">
            
            <div className="navigation-user">
              <div className="navigation-user-info">
                
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
