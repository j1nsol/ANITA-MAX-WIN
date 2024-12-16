import React, { useState, useEffect } from 'react';
import { db } from '../firebase'; // Your Firebase config
import { doc, getDoc } from "firebase/firestore";
import { styles } from '../styles/eventjoin';
import { useParams } from 'react-router-dom';

export function VolunteerForm() {
  const { useruid, eventuid } = useParams();  // Extract useruid and eventuid from URL params

  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    volunteerReason: '',
    coverLetter: null,
  });

  const [selectedFile, setSelectedFile] = useState('no file selected');
  const [eventDetails, setEventDetails] = useState(null); // State to hold event details

  useEffect(() => {
    // Fetch event details when the component loads
    const fetchEventDetails = async () => {
      try {
        const eventRef = doc(db, "Events", useruid, "HandledEvents", eventuid); // Construct correct Firestore reference
        const eventSnap = await getDoc(eventRef);

        if (eventSnap.exists()) {
          setEventDetails(eventSnap.data()); // Set event details to state
        } else {
          console.error("No such event!");
        }
      } catch (error) {
        console.error("Error fetching event data:", error.message);
      }
    };

    fetchEventDetails();
  }, [useruid, eventuid]); // Re-fetch when useruid or eventuid changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      setFormData(prev => ({
        ...prev,
        coverLetter: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You would send the form data to Firebase here or to your backend
  };

  if (!eventDetails) {
    return <p>Loading event details...</p>; // Show a loading state until event data is fetched
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
            <div className="input-group">
              <label htmlFor="fullName" className="input-label">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Name"
                className="text-input"
                aria-label="Full Name"
                required
              />
            </div>

            <div className="input-group" style={{ marginTop: '20px' }}>
              <label htmlFor="address" className="input-label">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                className="text-input"
                aria-label="Address"
                required
              />
            </div>

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

            <div className="upload-section">
              <label htmlFor="coverLetter" className="upload-button">
                <div className="button-content">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/769cd7cf42662e2fb46384a9c650673d58c982374780a494029c10a3f728bcbb?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                    className="button-icon"
                    alt=""
                  />
                  <span className="button-text">Upload cover letter</span>
                </div>
              </label>
              <input
                type="file"
                id="coverLetter"
                onChange={handleFileUpload}
                className="visually-hidden"
                accept=".pdf,.doc,.docx"
                aria-label="Upload cover letter"
              />
              <div className="file-status">{selectedFile}</div>
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
      <style jsx>{styles}</style>
    </form>
  );
}
