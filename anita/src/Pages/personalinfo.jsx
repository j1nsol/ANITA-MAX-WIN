import React, { useState } from 'react';
import { styles } from '../styles/personalinfo';

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    emergencyName: '',
    relationship: '',
    emergencyPhone: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className={styles.userPersonalInformation}>
      <div className={styles.landingPage} />
      <div className={styles.infoContainer}>
        <div className={styles.contentWrapper}>
          <h1 className={styles.pageTitle}>PERSONAL INFORMATION</h1>
          <form className={styles.formSection} onSubmit={handleSubmit}>
            <div className={styles.imageUploadSection}>
              <div className={styles.imageContainer}>
                <div className={styles.uploadArea}>
                  <div className={styles.uploadContent}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className={styles.visuallyHidden}
                      id="profileImage"
                      aria-label="Upload profile image"
                    />
                    <label htmlFor="profileImage">
                      <img
                        src={formData.profileImage || "https://cdn.builder.io/api/v1/image/assets/TEMP/3e12a80e1856928f56caf34a53aaf9673f7c3e5b6971710a6a61d0bc93028242?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"}
                        className={styles.uploadIcon}
                        alt=""
                        role="presentation"
                      />
                      <div className={styles.uploadText}>Drop your image here</div>
                    </label>
                  </div>
                </div>
                <button type="button" className={styles.uploadButton}>
                  <span className={styles.buttonText}>Upload image</span>
                </button>
              </div>
            </div>

            <div className={styles.formContainer}>
              <div className={styles.formWrapper}>
                <div className={styles.formContent}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="fullName">Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={styles.inputField}
                      placeholder="First Name, Last Name, M.I"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.contactSection}>
                    <label htmlFor="phone">Contact Information</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={styles.inputField}
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.inputField}
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.addressSection}>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className={styles.inputField}
                      placeholder="Full Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.emergencyContactSection}>
                    <label htmlFor="emergencyName">Emergency Contact Information</label>
                    <input
                      type="text"
                      id="emergencyName"
                      name="emergencyName"
                      className={styles.inputField}
                      placeholder="Name"
                      value={formData.emergencyName}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="text"
                      id="relationship"
                      name="relationship"
                      className={styles.inputField}
                      placeholder="Relationship"
                      value={formData.relationship}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="tel"
                      id="emergencyPhone"
                      name="emergencyPhone"
                      className={styles.inputField}
                      placeholder="Contact Number"
                      value={formData.emergencyPhone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className={styles.volunteerSection}>
                    <label htmlFor="volunteerRole">Volunteer Role(s) Preference</label>
                    <select
                      id="volunteerRole"
                      name="volunteerRole"
                      className={styles.volunteerField}
                      value={formData.volunteerRole}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select role</option>
                      <option value="role1">Role 1</option>
                      <option value="role2">Role 2</option>
                      <option value="role3">Role 3</option>
                    </select>
                  </div>

                  <div className={styles.skillsSection}>
                    <label htmlFor="skills">Skills and Experience</label>
                    <textarea
                      id="skills"
                      name="skills"
                      className={styles.skillsField}
                      placeholder="Relevant skills (e.g., customer service, language proficiency)."
                      value={formData.skills}
                      onChange={handleInputChange}
                      required
                    />
                    <textarea
                      id="experience"
                      name="experience"
                      className={styles.experienceField}
                      placeholder="Previous Experiences (optional)"
                      value={formData.experience}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className={styles.certificationsSection}>
                    <label>Certifications</label>
                    <div className={styles.certificationsUpload}>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        id="certifications"
                        className={styles.visuallyHidden}
                        aria-label="Upload certifications"
                      />
                      <label htmlFor="certifications">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fb1d044dd7be24238c920b3ad9982c042779574be08e7c32058a6031201adee?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                          className={styles.uploadCertIcon}
                          alt=""
                          role="presentation"
                        />
                        <div className={styles.uploadCertTextWrapper}>
                          <div className={styles.uploadCertText}>
                            Click to upload or drag and drop
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className={styles.agreementsSection}>
                    <div className={styles.agreementItem}>
                      <input
                        type="checkbox"
                        id="compliance"
                        name="compliance"
                        checked={formData.agreements.compliance}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                        required
                      />
                      <label htmlFor="compliance" className={styles.agreementText}>
                        Will you ensure compliance with local laws and regulations?
                      </label>
                    </div>

                    <div className={styles.agreementItem}>
                      <input
                        type="checkbox"
                        id="guidelines"
                        name="guidelines"
                        checked={formData.agreements.guidelines}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                        required
                      />
                      <label htmlFor="guidelines" className={styles.agreementText}>
                        Acknowledgment of{' '}
                        <a href="#" className={styles.agreementLink}>
                          guidelines and policies
                        </a>
                      </label>
                    </div>

                    <div className={styles.agreementItem}>
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.agreements.terms}
                        onChange={handleCheckboxChange}
                        className={styles.checkbox}
                        required
                      />
                      <label htmlFor="terms" className={styles.agreementText}>
                        Agreement to adhere to the terms of the application
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.saveButtonWrapper}>
                <button type="submit" className={styles.saveButton}>
                  <span className={styles.saveText}>Save</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
