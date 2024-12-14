import React, { useState } from 'react';
import {infostyle} from '../styles/personalinfo';

export default function PersonalInformation() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    emergencyName: '',
    relationship: '',
    emergencyContact: '',
    volunteerRole: '',
    skills: '',
    experience: '',
    agreements: {
      compliance: false,
      guidelines: false,
      terms: false
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [name]: checked
      }
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCertificationUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      certifications: files
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const agreements = [
    {
      id: 'compliance',
      text: 'Will you ensure compliance with local laws and regulations?'
    },
    {
      id: 'guidelines',
      text: 'Acknowledgment of guidelines and policies.'
    },
    {
      id: 'terms',
      text: 'Agreement to adhere to the terms of the application.'
    }
  ];

  return (
    <form className={infostyle.personalInfoForm} onSubmit={handleSubmit}>
      <div className={infostyle.formContainer}>
        <div className={infostyle.formBackground} />
        <div className={infostyle.formContent}>
          <h1 className={infostyle.formTitle}>PERSONAL INFORMATION</h1>
          
          <div className={infostyle.formLayout}>
            <div className={infostyle.imageUploadSection}>
              <div className={infostyle.imagePreview}>
                <img
                  src={formData.profileImage || 'https://cdn.builder.io/api/v1/image/assets/TEMP/f9c52c888e149c79319af18961525bc214bc1c274ae85e5d6d9fdec60241fb38?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06'}
                  alt="Profile preview"
                  className={infostyle.previewImg}
                />
                <div className={infostyle.uploadText}>Drop your image here</div>
              </div>
              <label className={infostyle.uploadButton}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className={infostyle.hiddenInput}
                />
                <span className={infostyle.buttonText}>Upload image</span>
              </label>
            </div>

            <div className={infostyle.formFields}>
              <div className={infostyle.inputGroup}>
                <label htmlFor="fullName">Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="First Name, Last Name, M.I"
                  className={infostyle.inputField}
                />
              </div>

              <div className={infostyle.contactSection}>
                <label htmlFor="phone">Contact Information</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={infostyle.inputField}
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={infostyle.inputField}
                />
              </div>

              <div className={infostyle.inputGroup}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Full Address"
                  className={infostyle.inputField}
                />
              </div>

              <div className={infostyle.emergencyContact}>
                <label htmlFor="emergencyName">Emergency Contact Information</label>
                <input
                  type="text"
                  id="emergencyName"
                  name="emergencyName"
                  value={formData.emergencyName}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className={infostyle.inputField}
                />
                <input
                  type="text"
                  id="relationship"
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleInputChange}
                  placeholder="Relationship"
                  className={infostyle.inputField}
                />
                <input
                  type="tel"
                  id="emergencyContact"
                  name="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={handleInputChange}
                  placeholder="Contact Number"
                  className={infostyle.inputField}
                />
              </div>

              <div className={infostyle.volunteerSection}>
                <label htmlFor="volunteerRole">Volunteer Role(s) Preference</label>
                <select
                  id="volunteerRole"
                  name="volunteerRole"
                  value={formData.volunteerRole}
                  onChange={handleInputChange}
                  className={infostyle.roleSelect}
                >
                  <option value="">Select role</option>
                  <option value="role1">Role 1</option>
                  <option value="role2">Role 2</option>
                  <option value="role3">Role 3</option>
                </select>
              </div>

              <div className={infostyle.skillsSection}>
                <label htmlFor="skills">Skills and Experience</label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder="Relevant skills (e.g., customer service, language proficiency)"
                  className={infostyle.inputField}
                />
                <input
                  type="text"
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Previous Experiences (optional)"
                  className={infostyle.inputField}
                />
              </div>

              <div className={infostyle.certificationsSection}>
                <label>Certifications</label>
                <div
                  className={infostyle.certUpload}
                  onClick={() => document.getElementById('certInput').click()}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ede05f0db96fe34f415d4fc3acf5294032d0c3cfb5dd1ade3198876cfd6d560?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                    alt="Upload certification"
                    className={infostyle.uploadIcon}
                  />
                  <div className={infostyle.uploadInstruction}>
                    Click to upload or drag and drop
                  </div>
                  <input
                    type="file"
                    id="certInput"
                    multiple
                    onChange={handleCertificationUpload}
                    className={infostyle.hiddenInput}
                    accept=".pdf,.doc,.docx"
                  />
                </div>
              </div>

              <div className={infostyle.agreementsSection}>
                {agreements.map(({ id, text }) => (
                  <div key={id} className={infostyle.agreementItem}>
                    <div className={infostyle.checkboxWrapper}>
                      <input
                        type="checkbox"
                        id={id}
                        name={id}
                        checked={formData.agreements[id]}
                        onChange={handleCheckboxChange}
                        className={infostyle.agreementCheckbox}
                      />
                    </div>
                    <label htmlFor={id} className={infostyle.agreementText}>
                      {text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button type="submit" className={infostyle.submitButton}>
            <span className={infostyle.buttonText}>Save</span>
          </button>
        </div>
      </div>
    </form>
  );
}