import React, { useState } from 'react';
import { EventFormStyles } from '../styles/creatingevents';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'; // Import Firebase Storage functions
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import { UserTopBar } from '../components/Topbar/UserTopBar';
export const EventForm = () => {
  const db = getFirestore();
  const auth = getAuth();
  const storage = getStorage();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    eventName: '',
    orgName: '',
    date: '',
    startTime: { hours: '12', minutes: '00', period: 'AM' },
    endTime: { hours: '12', minutes: '00', period: 'AM' },
    location: '',
    description: '',
    tokens: '',
    image: null,
    imagePreview: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTimeChange = (timeType, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [timeType]: {
        ...prev[timeType],
        [field]: value,
      },
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: file, // Store the raw file to upload
        imagePreview: imageUrl, // For image preview
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser ;
      if (!user) throw new Error('User  not authenticated');

      const eventUid = uuidv4(); // Generate unique event ID
      const eventDocRef = doc(db, 'Events', user.uid, 'HandledEvents', eventUid);

      // Upload the image to Firebase Storage
      if (formData.image) {
        const storageRef = ref(storage, `EventThumbnails/${eventUid}.png`); // Create a reference for the image
        const uploadTask = uploadBytesResumable(storageRef, formData.image);

        await new Promise((resolve, reject) => {
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              console.error('Error uploading image:', error);
              reject(error);
            },
            async () => {
              const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
              console.log('File available at', downloadURL);

              // Save metadata to Firestore in HandledEvents subcollection
              const eventData = {
                EventTitle: formData.eventName,
                OrgName: formData.orgName,
                EventDate: formData.date,
                StartTime: `${formData.startTime.hours}:${formData.startTime.minutes} ${formData.startTime.period}`,
                EndTime: `${formData.endTime.hours}:${formData.endTime.minutes} ${formData.endTime.period}`,
                Location: formData.location,
                Description: formData.description,
                TokenReward: formData.tokens,
                ThumbnailPath: downloadURL, // Use the download URL
              };

              await setDoc(eventDocRef, eventData); // Store the event under HandledEvents subcollection
              resolve();
            }
          );
        });
      } else {
        throw new Error('No image selected for upload');
      }

      alert('Event created successfully!');
      navigate("/events");
    } catch (error) {
      console.error('Error saving event:', error);
      alert('Failed to create event: ' + error.message);
    }
  };

  const TimeInput = ({ timeType, values }) => (
    <div className="time-input-group">
      <label>{timeType === 'startTime' ? 'Start Time' : 'End Time'}</label>
      <div className="time-input s">
        <input
          type="text"
          className="time-value"
          value={values.hours}
          onChange={(e) => handleTimeChange(timeType, 'hours', e.target.value)}
          maxLength="2"
          aria-label="Hours"
        />
        <span>:</span>
        <input
          type="text"
          className="time-value"
          value={values.minutes}
          onChange={(e) => handleTimeChange(timeType, 'minutes', e.target.value)}
          maxLength="2"
          aria-label="Minutes"
        />
        <select
          className="time-period"
          value={values.period}
          onChange={(e) => handleTimeChange(timeType, 'period', e.target.value)}
          aria-label="Time period"
        >
          <option value="AM">A.M</option>
          <option value="PM">P.M</option>
        </select>
      </div>
    </div>
  );

  return (
    <>
    <UserTopBar/>
          <Sidebar/> 
      <EventFormStyles />
      <div className="event-container">
        <form className="event-frame" onSubmit={handleSubmit}>
          <div className="content-wrapper">
            <div className="event-details">
              <label htmlFor="eventName" className="event-title">Event Name</label>
              <div className="title-input-wrapper">
                <input
                  id="eventName"
                  name="eventName"
                  type="text"
                  className="title-input"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  aria-label="Enter event name"
                />
              </div>
              
              <label htmlFor="orgName" className="org-name">Org/User Name</label>
              <input
                id="orgName"
                name="orgName"
                type="text"
                className="title-input"
                value={formData.orgName}
                onChange={handleInputChange}
                aria-label="Enter organization name"
              />
              
              <div className="date-picker">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/608b6acd86999be393925c9aa0a9f5494ee0b5f29d2ed3688ab88fcdad63626a?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06" className="date-icon" alt="Calendar icon" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  aria-label="Select date"
                />
              </div>
            </div>
            
            <div className="image-upload">
              <div className="upload-container">
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="visually-hidden"
                />
                <label htmlFor="imageUpload" className="upload-content">
                  {formData.imagePreview ? (
                    <img
                      src={formData.imagePreview}
                      alt="Uploaded Preview"
                      className="uploaded-image-preview"
                    />
                  ) : (
                    <div className="upload-prompt">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8716eeb309a16b26de193963af356456ff78ad7cddf321828ab87d66780aae4b?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                        className="upload-icon"
                        alt="Upload icon"
                      />
                      <div>Drop your image here, or </div>
                      <span className="browse-button" role="button" tabIndex="0">
                        browse
                      </span>
                    </div>
                  )}
                </label>
              </div>
            </div>
          </div>

          <div className="time-section">
            <div className="time-picker">
              <TimeInput timeType="startTime" values={formData.startTime} />
              <TimeInput timeType="endTime" values={formData.endTime} />
            </div>
            
            <div className="location-section">
              <div className="date-picker">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/25b4a72a0c749a3bc4f1b57ce6d737df16de7335108ead187c73da8eda000b7d?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06" className="date-icon" alt="Location icon" />
                <span>Location</span>
              </div>
              <input
                type="text"
                name="location"
                className="location-input"
                placeholder="Search here"
                value={formData.location}
                onChange={handleInputChange}
                aria-label="Enter location"
              />
            </div>
          </div>

          <textarea 
            name="description"
            className="description-input" 
            placeholder="Add description"
            value={formData.description}
            onChange={handleInputChange}
            aria-label="Event description"
          />

          <div className="footer">
            <div className="token-section">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/01d131202fa8b0d9df738f5af26e70eb60c71c3c227e8cd86f3e00f0ccfcaa0a?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06" alt="Token icon" width="50" />
              <input
                type="number"
                name="tokens"
                className="token-input"
                value={formData.tokens}
                onChange={handleInputChange}
                aria-label="Token amount"
              />
              <span>Tokens</span>
            </div>
            <button type="submit" className="create-button">Create</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EventForm;
