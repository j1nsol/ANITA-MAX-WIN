import React, { useState } from 'react';
import { styles } from '../styles/eventjoin';

export function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    volunteerReason: '',
    coverLetter: null
  });

  const [selectedFile, setSelectedFile] = useState('no file selected');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name);
      setFormData(prev => ({
        ...prev,
        coverLetter: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form className="landing-page" onSubmit={handleSubmit}>
      <div className="event-frame">
        <div className="content-wrapper">
          <section className="info-section">
            <h1 className="title">TITLE HEADER</h1>
            <h2 className="subtitle">Description</h2>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              condimentum lacinia orci in condimentum. Vivamus pharetra, leo a
              iaculis pellentesque, orci enim laoreet arcu, vitae tincidunt
              augue tortor scelerisque neque. Aliquam erat volutpat. Vivamus
              quis ipsum in nulla vehicula feugiat ac sit amet metus. Sed
              aliquam ac nunc eu tincidunt. Phasellus suscipit lectus eu elit
              mollis porttitor. Interdum et malesuada fames ac ante ipsum
              primis in faucibus. Nullam pulvinar metus nec consectetur
              lacinia. Nunc eget enim pellentesque, sodales lorem in,
              pellentesque erat. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Vestibulum ut urna
              tempor, congue leo non, dictum dolor. Etiam ac ex tempor,
              lobortis elit nec, dictum mauris. Sed congue vehicula velit, sit
              amet tincidunt velit fringilla id. Vivamus eu condimentum nunc.
            </p>
            
            <div className="requirements-header">
              <div className="requirements-title">Requirements</div>
              <div className="requirement-item">
                <img 
                  loading="lazy" 
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3cdd93d2fb547fc6e47e96a5862715072b9d24038f496097253f1279bbb1a4d?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06" 
                  className="requirement-icon" 
                  alt=""
                />
                <div className="requirement-text">Requirement</div>
              </div>
            </div>

            <div className="requirement-section">
              <div className="icon-wrapper">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3db5715e5b9f3ed405bbfc14e2bd180a72a77161b4c28e8e8cd69d192f52dac0?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                  className="requirement-icon-large"
                  alt=""
                />
              </div>
              <div className="requirement-content">
                <div className="requirement-title">Requirements #1</div>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Name" 
                  aria-label="Name" 
                />
              </div>
            </div>
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