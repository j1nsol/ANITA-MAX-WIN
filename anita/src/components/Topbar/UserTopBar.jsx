import React, { useEffect, useState } from "react";
import { UserTopBarStyles } from "../../styles/TopBar/UserTopBar";
import { auth, db, storage } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import confirmationsample from "../../assets/images/confirmationsample.png"; // Import the confirmationsample image

export function UserTopBar() {
  const [username, setUsername] = useState("Loading...");
  const [token, setToken] = useState(0.0);
  const [profileImage, setProfileImage] = useState(null);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false); // State for the confirmation modal
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (!user) return;

        const userDoc = doc(db, "User", user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsername(data.username || "Unknown");
          setToken(data.token || 0.0);
        } else {
          console.error("No such document!");
        }

        // Fetch profile image from Firebase Storage
        const imageRef = ref(storage, `images/${user.uid}.jfif`);
        try {
          const imageUrl = await getDownloadURL(imageRef);
          setProfileImage(imageUrl);
        } catch (error) {
          console.error("No profile image found, using default.");
          setProfileImage(confirmationsample); // Use confirmationsample as the default image
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
      navigate("/");
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setIsSigningOut(false);
      navigate("/");
    }
  };

  const openConfirmModal = () => {
    setShowConfirmModal(true); // Show the confirmation modal
  };

  const closeConfirmModal = () => {
    setShowConfirmModal(false); // Close the confirmation modal
  };

  const confirmSignOut = () => {
    closeConfirmModal(); // Close the modal
    handleSignOut(); // Proceed with signing out
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
                border-radius="50%"
              />
            </div>
            <div className="navigation-user">
              <div className="navigation-user-info">
                <div className="navigation-balance" aria-label="Account balance">
                  <div>Balance</div>
                  <div aria-live="polite">{token.toFixed(2)}</div>
                </div>
              </div>
              <button
                className="navigation-signout"
                onClick={openConfirmModal} // Open the confirmation modal
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

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="confirm-modal">
          <div className="confirm-modal-content">
            {/* Display the user's profile image */}
            <img
              src={profileImage || confirmationsample} // Use the profile image or fallback to confirmationsample
              alt="User Profile"
              className="confirm-modal-dp"
            />
            <p>Are you sure you want to log out?</p>
            <div className="confirm-modal-actions">
              <button onClick={confirmSignOut} className="confirm-yes">
                Yes
              </button>
              <button onClick={closeConfirmModal} className="confirm-no">
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{UserTopBarStyles}</style>
      <style jsx>{`
        .confirm-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .confirm-modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          font-family: 'Alexandria', sans-serif;
        }

        .confirm-modal-dp {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin-bottom: 15px;
          object-fit: cover;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .confirm-modal-actions {
          margin-top: 20px;
          display: flex;
          justify-content: space-around;
        }

        .confirm-yes,
        .confirm-no {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          font-family: 'Alexandria', sans-serif;
        }

        .confirm-yes {
          background-color: #007bff;
          color: white;
        }

        .confirm-no {
          background-color: #ccc;
          color: black;
        }

        .confirm-yes:hover {
          background-color: #0056b3;
        }

        .confirm-no:hover {
          background-color: #aaa;
        }
      `}</style>
    </>
  );
}