import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Your Firebase config
import { doc, getDoc, setDoc } from "firebase/firestore";
import { styles } from '../styles/eventjoin';
import { useNavigate , useParams } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import Sidebar from '../components/Sidebar/Sidebar';
import { UserTopBar } from '../components/Topbar/UserTopBar';

export function VolunteerForm() {
  const { useruid, eventuid } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    volunteerReason: '',
  });
  const [eventDetails, setEventDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const eventRef = doc(db, "Events", useruid, "HandledEvents", eventuid);
        const eventSnap = await getDoc(eventRef);

        if (eventSnap.exists()) {
          setEventDetails(eventSnap.data());
        } else {
          console.error("No such event!");
        }
      } catch (error) {
        console.error("Error fetching event data:", error.message);
      }
    };

    fetchEventDetails();
  }, [useruid, eventuid]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const auth = getAuth();
      const currentUser = auth.currentUser;
      if (!currentUser) {
        throw new Error("User not authenticated.");
      }
  
      // Fetch user details from Firestore
      const userRef = doc(db, "User", currentUser.uid);
      const userSnap = await getDoc(userRef);
      if (!userSnap.exists()) {
        throw new Error("User data not found.");
      }
  
      const userData = userSnap.data();
      const { username, email, phone, firstName } = userData;
  
      // Create a new Volunteer entry
      const volunteerRef = doc(db, "Events", useruid, "HandledEvents", eventuid, "Volunteers", currentUser.uid);
      await setDoc(volunteerRef, {
        fullName: formData.fullName,
        volunteerReason: formData.volunteerReason,
        username: username || '',
        email: email || '',
        phone: phone || '',
        firstName: firstName || '',
        remarks: '',
        attendance: false,
        paid: false,
      });
      console.log("Volunteer added successfully!");
      alert("You have successfully joined the event!");
      setFormData({ fullName: '', volunteerReason: '' });
      navigate("/events");
    } catch (error) {
      console.error("Error submitting volunteer form:", error.message);
      alert("An error occurred. Please try again.");
    }
  };

  if (!eventDetails) {
    return <p>Loading event details...</p>;
  }

  return (
    
    <form className="landing-page" onSubmit={handleSubmit}>

      <div className="event-frame">
     
        <div className="content-wrapper">
          <section className="info-section">
            <h1 className="event-title">{eventDetails.EventTitle}</h1>
            <h2 className="subtitle">Description</h2>
            <p className="description">
              {eventDetails.Description || "No description available."}
            </p>
          </section>

          <section className="form-section">
            <div className="reason-section">
              <div className="reason-wrapper">
                <label htmlFor="volunteerReason" className="reason-label">
                  What's your reason to volunteer?
                </label>
                <div className="reason-input-wrapper">
                  <div className="reason-input-container">
                    <textarea
                      id="volunteerReason"
                      name="volunteerReason"
                      value={formData.volunteerReason}
                      onChange={handleInputChange}
                      className="reason-textarea"
                      placeholder="Type here"
                      aria-label="What's your reason to volunteer?"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="join-button">
              <div className="join-button-content">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cef32c624558c57e1f4638d26489bba33f5b357a502f87401d860dd8f1f2e374?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                  className="join-icon"
                  alt=""
                />
                <span className="button-text">Join</span>
              </div>
            </button>
          </section>
        </div>
      </div>
      <Sidebar />
      <UserTopBar />
      <style jsx>{styles}</style>
    </form>
  );
}

export default VolunteerForm;
