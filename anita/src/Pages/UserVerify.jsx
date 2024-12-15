import React, { useState } from "react";
import { auth, database, storage, db } from '../firebase'; // import Firebase services
import { getAuth } from 'firebase/auth';
import { ref, set } from 'firebase/database';  // Realtime Database
import { doc, setDoc } from 'firebase/firestore';  // Firestore
import { uploadBytes, ref as storageRef, getDownloadURL } from 'firebase/storage';

export function UserVerificationForm() {
  const [formData, setFormData] = useState({
    organizerName: '',
    address: '',
    email: '',
    phone: '',
    pastEvents: '',
    references: '',
    certifications: '',
    selectedFile: null,
    compliance: false,
    guidelines: false,
    terms: false
  });
  
  const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      selectedFile: file
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const currentUser = getAuth().currentUser; 
      if (!currentUser) {
        alert('You must be logged in to submit the form.');
        setLoading(false);
        return;
      }

      const userUid = currentUser.uid; 
      const formDataToSend = { ...formData };
      
      if (formData.selectedFile) {
        const fileRef = storageRef(storage, `uploads/${userUid}/${formData.selectedFile.name}`);
        await uploadBytes(fileRef, formData.selectedFile);
        const fileUrl = await getDownloadURL(fileRef);
        formDataToSend.selectedFileUrl = fileUrl; 
      }

      await setDoc(doc(db, 'verifications', userUid), formDataToSend);
     
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div role="main">
      <form 
        onSubmit={handleSubmit} 
        className="verification-form" 
        noValidate
        aria-labelledby="form-title"
      >
        <div className="form-container">
          <div className="form-content">
            <h1 id="form-title" className="section-title">General Information</h1>
            
            <div className="input-group">
              <label htmlFor="organizerName" className="input-label">
                Name of Organizer/Individual
              </label>
              <input
                type="text"
                id="organizerName"
                name="organizerName"
                className="text-input"
                value={formData.organizerName}
                onChange={handleInputChange}
                placeholder="Full Name"
                required
                aria-required="true"
              />
            </div>

            <div className="input-group">
              <label htmlFor="address" className="input-label">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="text-input"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Address"
                required
                aria-required="true"
              />
            </div>

            <div className="input-row">
              <div className="input-group">
                <label htmlFor="email" className="input-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="text-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  required
                  aria-required="true"
                />
              </div>

              <div className="input-group">
                <label htmlFor="phone" className="input-label">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="text-input"
                  value={formData.phone}
                  onChange={handleInputChange}
                  pattern="[0-9]{11}"
                  placeholder="09XXXXXXXXX"
                  required
                  aria-required="true"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="pastEvents" className="input-label">
                Have you organized similar events in the past? Provide details.
              </label>
              <textarea
                id="pastEvents"
                name="pastEvents"
                className="textarea-input"
                value={formData.pastEvents}
                onChange={handleInputChange}
                aria-multiline="true"
              />
            </div>

            <div className="input-group">
              <label htmlFor="references" className="input-label">
                References or testimonials from previous events (if available).
              </label>
              <textarea
                id="references"
                name="references"
                className="textarea-input"
                value={formData.references}
                onChange={handleInputChange}
                aria-multiline="true"
              />
            </div>

            <div className="input-group">
              <label htmlFor="certifications" className="input-label">
                Do you have any relevant licenses or certifications?
              </label>
              <textarea
                id="certifications"
                name="certifications"
                className="textarea-input"
                value={formData.certifications}
                onChange={handleInputChange}
                aria-multiline="true"
              />
            </div>

            <div className="upload-section">
              <input
                type="file"
                id="idUpload"
                onChange={handleFileChange}
                className="visually-hidden"
                accept="image/*,.pdf"
                aria-label="Upload valid ID"
              />
              <label htmlFor="idUpload" className="upload-button">
                Upload valid I.D.
              </label>
              <span className="file-status" role="status" aria-live="polite">
                {formData.selectedFile ? formData.selectedFile.name : 'no file selected'}
              </span>
            </div>

            <div className="checkbox-section">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="compliance"
                  name="compliance"
                  checked={formData.compliance}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
                <label htmlFor="compliance" className="checkbox-label">
                  Will you ensure compliance with local laws and regulations?
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="guidelines"
                  name="guidelines"
                  checked={formData.guidelines}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
                <label htmlFor="guidelines" className="checkbox-label">
                  Acknowledgment of guidelines and policies.
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleInputChange}
                  required
                  aria-required="true"
                />
                <label htmlFor="terms" className="checkbox-label">
                  Agreement to adhere to the terms of the application.
                </label>
              </div>
            </div>

            <div className="submit-section">
              <button 
                type="submit" 
                className="submit-button"
                aria-label="Submit verification form"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      </form>
      <style jsx>{`
        .verification-form {
          background-color: rgba(57, 153, 218, 1);
          display: flex;
          align-items: center;
          gap: 10px;
          overflow: hidden;
          justify-content: center;
          padding: 62px 120px;
        }

        .form-container {
          border-radius: 15px;
          background-color: rgba(214, 220, 231, 1);
          align-self: stretch;
          display: flex;
          min-width: 240px;
          width: 1219px;
          flex-direction: column;
          overflow: hidden;
          justify-content: center;
          margin: auto 0;
          padding: 30px 87px;
        }

        .form-content {
          display: flex;
          width: 100%;
          flex-direction: column;
          justify-content: start;
        }

        .section-title {
          width: 100%;
          color: rgba(34, 51, 58, 1);
          font: 700 42px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
          margin: 0 0 20px 0;
        }

        .input-group {
          display: flex;
          margin-top: 10px;
          width: 100%;
          flex-direction: column;
          justify-content: start;
          font: 14px Alexandria, sans-serif;
        }

        .input-row {
          display: flex;
          gap: 20px;
          margin-top: 10px;
          flex-wrap: wrap;
        }

        .input-row .input-group {
          flex: 1;
          min-width: 200px;
        }

        .input-label {
          color: rgba(34, 51, 58, 1);
          font-weight: 700;
          margin-bottom: 5px;
        }

        .text-input {
          align-self: stretch;
          border-radius: 5px;
          background-color: rgba(229, 231, 235, 1);
          min-height: 26px;
          width: 100%;
          color: rgba(0, 0, 0, 0.6);
          font-weight: 400;
          padding: 5px 19px;
          border: 1px solid rgba(0, 0, 0, 1);
          box-sizing: border-box;
        }

        .textarea-input {
          border-radius: 5px;
          background-color: rgba(229, 231, 235, 1);
          min-height: 94px;
          width: 100%;
          padding: 10px;
          border: 1px solid rgba(117, 117, 117, 1);
          font-family: Alexandria, sans-serif;
          resize: vertical;
        }

        .upload-section {
          display: flex;
          margin-top: 20px;
          width: 100%;
          flex-direction: column;
          align-items: center;
          font-family: PT Sans, sans-serif;
          font-weight: 700;
          gap: 10px;
        }

        .upload-button {
          background: var(--Secondary, #22333b);
          color: var(--Primary-scale-100, #fffbff);
          border-radius: 5px;
          padding: 10px 20px;
          font-size: 24px;
          cursor: pointer;
          border: none;
          min-width: 223px;
          text-align: center;
        }

        .file-status {
          color: rgba(34, 51, 58, 0.3);
          font-size: 14px;
        }

        .checkbox-section {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          justify-content: center;
          align-self: stretch;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .checkbox-group input[type="checkbox"] {
          width: 23px;
          height: 23px;
          border: 1px solid rgb(0, 0, 0);
          border-radius: 5px;
          cursor: pointer;
        }

        .checkbox-label {
          color: rgba(34, 51, 58, 1);
          font: 700 20px PT Sans, sans-serif;
          cursor: pointer;
        }

        .submit-section {
          display: flex;
          margin-top: 30px;
          width: 100%;
          justify-content: center;
          padding: 20px 0;
        }

        .submit-button {
          background: var(--Secondary_2, #868a88);
          color: var(--Primary-scale-100, #fffbff);
          border-radius: 5px;
          padding: 6px 25px;
          font: 700 20px PT Sans, sans-serif;
          border: none;
          cursor: pointer;
          min-width: 100px;
          transition: background-color 0.2s;
        }

        .submit-button:hover {
          background: #6f7371;
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          border: 0;
        }

        @media (max-width: 991px) {
          .verification-form {
            padding: 20px;
          }
          
          .form-container {
            padding: 20px;
          }
          
          .input-row {
            flex-direction: column;
            gap: 10px;
          }
          
          .section-title {
            font-size: 32px;
          }
          
          .checkbox-label {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .upload-button {
            min-width: 100%;
            font-size: 20px;
          }
          
          .submit-button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .submit-button {
            transition: none;
          }
        }
      `}</style>
    </div>
  );
}
export default UserVerificationForm;