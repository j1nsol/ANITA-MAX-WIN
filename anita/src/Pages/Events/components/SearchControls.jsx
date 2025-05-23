import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../../firebase'
import { doc, getDoc } from 'firebase/firestore';

export const SearchControls = () => {
  const navigate = useNavigate();

  const handleCreateEventClick = async () => {
    try {
      const userUID = auth.currentUser?.uid;

      if (!userUID) {
        alert("User not authenticated.");
        return;
      }

      const userDocRef = doc(db, 'User', userUID);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists() && userDocSnap.data()?.verified === true) {
        navigate('/events/create');
      } else {
        navigate('/verify');
      }
    } catch (error) {
      console.error("Error checking user verification status:", error);
      alert("An error occurred while verifying your status.");
    }
  };

  return (
    <div className="search-controls" role="search">
      <div className="search-bar">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/061e881a3dfc8a14f2bf1c0f9c49454fa1a215023db4242c88f2a73de34c06f4?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
          alt=""
          className="search-icon"
        />
        <label htmlFor="search-input" className="visually-hidden">
          Search events
        </label>
        <input
          type="search"
          id="search-input"
          className="search-text"
          placeholder="Search"
        />
      </div>

      <div className="listbox">
        <div className="listbox-inner">
          <div className="listbox-content">
            <span>All Categories</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/c4420e4e8d687107fd7e834161043a0eb9315f24ced7ad3f77c88f5e4a7ca0c1?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
              alt=""
              className="dropdown-icon"
            />
          </div>
        </div>
      </div>

      <div className="listbox">
        <div className="listbox-inner">
          <div className="listbox-content">
            <span>Price: Low to High</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/e670f11e5c9abde36adf4ebe9f94ad1416f55de08fc230e7fb6cb92b60e1c779?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
              alt=""
              className="dropdown-icon"
            />
          </div>
        </div>
      </div>

      <button className="create-event-btn" onClick={handleCreateEventClick}>
        Create event
      </button>
    </div>
  );
};

export default SearchControls;
