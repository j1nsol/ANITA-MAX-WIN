import React, { useState } from 'react';
import styled from 'styled-components';


const PersonalInfoContainer = styled.main`
  background-color: rgba(57, 153, 218, 1);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  justify-content: start;
  min-height: 100vh;
  margin-top:80px;
`;

const ContentWrapper = styled.div`
  display: flex;
  min-height: 1369px;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InfoCard = styled.section`
  border-radius: 20px;
  background-color: rgba(214, 220, 231, 1);
  align-self: stretch;
  display: flex;
  min-width: 240px;
  width: 797px;
  align-items: center;
  gap: 10px;
  justify-content: start;
  margin: auto 0;
  padding: 38px 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 991px) {
    padding: 20px;
  }
`;

const MainContent = styled.div`
  align-self: stretch;
  display: flex;
  min-width: 240px;
  width: 728px;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const PageTitle = styled.h1`
  width: 100%;
  color: rgba(34, 51, 58, 1);
  font: 700 40px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0 0 20px 0;
`;

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  align-items: start;
  gap: 37px;
  justify-content: start;
  flex-wrap: wrap;
`;

const ImageSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 96px;
`;

const UploadArea = styled.div`
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  display: flex;
  min-height: 120px;
  width: 120px;
  flex-direction: column;
  align-items: center;
  color: var(--Secondary_2, #868a88);
  text-align: center;
  justify-content: center;
  height: 120px;
  padding: 0 6px 0 5px;
  font: 600 12px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  border: 1px dashed rgba(117, 117, 117, 1);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(229, 231, 235, 0.8);
  }

  &:focus-within {
    outline: 2px solid #3598db;
    outline-offset: 2px;
  }
`;

const UploadButton = styled.button`
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: var(--Secondary, #22333b);
  align-self: center;
  display: flex;
  margin-top: 10px;
  min-height: 27px;
  width: 100%;
  max-width: 102px;
  flex-direction: column;
  color: var(--Primary-scale-100, #fffbff);
  padding: 5px 7px;
  font: 700 14px PT Sans, sans-serif;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2c4450;
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }
`;

const FormFieldsContainer = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  
  justify-content: start;
  flex-grow: 1;
  width: 547px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InputField = styled.input`
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  min-height: 26px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(117, 117, 117, 1);
  margin-top: 6px;
  font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3598db;
    box-shadow: 0 0 0 2px rgba(53, 152, 219, 0.2);
  }
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  min-height: 80px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(117, 117, 117, 1);
  margin-top: 6px;
  font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3598db;
    box-shadow: 0 0 0 2px rgba(53, 152, 219, 0.2);
  }
`;

const Select = styled.select`
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  min-height: 26px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(117, 117, 117, 1);
  margin-top: 6px;
  font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3598db;
    box-shadow: 0 0 0 2px rgba(53, 152, 219, 0.2);
  }
`;

const FieldLabel = styled.label`
  color: rgba(34, 51, 58, 1);
  font: 400 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  display: block;
  font-weight: bold;
  margin-bottom: 4px;
  text-align: left;
`;

const FieldGroup = styled.div`
  margin-bottom: 26px;
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;
  margin-top: 5px;
`;

const Checkbox = styled.input`
  width: 23px;
  height: 23px;
  border-radius: 5px;
  border: 1px solid rgba(104, 104, 104, 1);
  cursor: pointer;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: #3598db;
    box-shadow: 0 0 0 2px rgba(53, 152, 219, 0.2);
  }
`;

const SaveButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  background: rgba(34, 51, 58, 1);
  border-radius: 5px;
  color: var(--Primary-scale-100, #fffbff);
  font: 700 20px PT Sans, sans-serif;
  padding: 6px 28px;
  margin-top: 39px;
  min-height: 37px;
  width: 105px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(34, 51, 58, 1);
  }

  &:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const FileUploadLabel = styled.label`
  display: block;
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  padding: 20px;
  text-align: center;
  border: 1px dashed rgba(117, 117, 117, 1);
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(229, 231, 235, 0.8);
  }

  &:focus-within {
    outline: 2px solid #3598db;
    outline-offset: 2px;
  }
`;
// Firebase Authentication
import { doc, setDoc } from 'firebase/firestore'; // Firestore
import { auth, db } from '../firebase';
import { UserTopBar } from '../components/Topbar/UserTopBar';
import Sidebar from '../components/Sidebar/Sidebar';

export const PersonalInformationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    address: '',
    emergencyName: '',
    emergencyRelationship: '',
    emergencyPhone: '',
    volunteerRoles: [],
    skills: '',
    experience: '',
    certifications: null,
    compliance: false,
    guidelines: false,
    terms: false,
    profileImage: null
  });

  const handleInputChange = (e) => {
    const { name, type, value, checked, files, multiple } = e.target;
  
    // Handle different input types
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else if (type === 'file') {
      // Handle file input (for profileImage and certifications)
      setFormData(prev => ({
        ...prev,
        [name]: files ? files : null
      }));
    } else if (multiple && e.target.selectedOptions) {
      // Handle multiple select inputs
      setFormData(prev => ({
        ...prev,
        [name]: Array.from(e.target.selectedOptions, option => option.value)
      }));
    } else {
      // Handle regular text inputs
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setFormData(prev => ({
          ...prev,
          profileImage: file
        }));
      } else {
        alert('Please upload an image file');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userUid = auth.currentUser?.uid;
      if (!userUid) throw new Error('User is not authenticated');
  
      // Prepare form data
      const userData = {
        firstName: formData.firstName,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        emergencyName: formData.emergencyName,
        emergencyRelationship: formData.emergencyRelationship,
        emergencyPhone: formData.emergencyPhone,
        volunteerRoles: formData.volunteerRoles,
        skills: formData.skills,
        experience: formData.experience,
        certifications: formData.certifications 
          ? Array.from(formData.certifications, file => file.name) 
          : null, // Store file names only
        compliance: formData.compliance,
        guidelines: formData.guidelines,
        terms: formData.terms,
        profileImage: formData.profileImage ? formData.profileImage.name : null, // Store file name only
      };
  
      // Save user data to Firestore
      const userDocRef = doc(db, 'User', userUid);
      await setDoc(userDocRef, userData, { merge: true });
  
      alert('Form submitted and user data saved successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form. Please try again.');
    }
  };
  
  return (
    
    <PersonalInfoContainer>
      <UserTopBar/>
      <Sidebar/>
      <ContentWrapper>
        <InfoCard>
          <MainContent>
            <PageTitle>PERSONAL INFORMATION</PageTitle>
            <FormContainer onSubmit={handleSubmit} noValidate>
              <ImageSection>
                <input
                  type="file"
                  id="profileImage"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                  aria-label="Upload profile picture"
                />
                <UploadArea
                  role="button"
                  tabIndex="0"
                  onClick={() => document.getElementById('profileImage').click()}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      document.getElementById('profileImage').click();
                    }
                  }}
                  aria-label="Click to upload profile picture"
                >
                  <img
                    src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : "https://cdn.builder.io/api/v1/image/assets/TEMP/fdf1045261e7dbc54c80b60eea42f8e854d1c00f60d223cf14f256f4ec01ffa8?placeholderIfAbsent=true&apiKey=2293eafdf370425385c2452d5e99005b"}
                    alt="Profile preview"
                    style={{ width: '59px', height: '59px', objectFit: 'cover' }}
                  />
                  <div>Drop your image here</div>
                </UploadArea>
                <UploadButton
                  type="button"
                  onClick={() => document.getElementById('profileImage').click()}
                >
                  Upload image
                </UploadButton>
              </ImageSection>

              <FormFieldsContainer>
                <FieldGroup>
                  <FieldLabel htmlFor="firstName">Name</FieldLabel>
                  <InputField
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name, Last Name, M.I"
 
                  />
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="phone">Contact Information</FieldLabel>
                  <InputField
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"

                    pattern="[0-9]{10}"
                  />
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="email">Email Address</FieldLabel>
                  <InputField
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"

                  />
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="address">Address</FieldLabel>
                  <InputField
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Full Address"

                  />
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel>Emergency Contact Information</FieldLabel>
                  <InputField
                    type="text"
                    id="emergencyName"
                    name="emergencyName"
                    value={formData.emergencyName}
                    onChange={handleInputChange}
                    placeholder="Name"

                  />
                  <InputField
                    type="text"
                    id="emergencyRelationship"
                    name="emergencyRelationship"
                    value={formData.emergencyRelationship}
                    onChange={handleInputChange}
                    placeholder="Relationship"

                    style={{ marginTop: '8px' }}
                  />
                  <InputField
                    type="tel"
                    id="emergencyPhone"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    placeholder="Contact Number"
                    pattern="[0-9]{10}"
                    style={{ marginTop: '8px' }}
                  />
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel htmlFor="skills">Skills and Experience</FieldLabel>
                  <TextArea
                    id="skills"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="Relevant skills (e.g., customer service, language proficiency)"

                  />
                  <TextArea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    placeholder="Previous Experiences (optional)"
                    style={{ marginTop: '8px' }}
                  />
                </FieldGroup>

                <FieldGroup>
                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      id="compliance"
                      name="compliance"
                      checked={formData.compliance}
                      onChange={handleInputChange}

                    />
                    <FieldLabel htmlFor="compliance">
                      Will you ensure compliance with local laws and regulations?
                    </FieldLabel>
                  </CheckboxGroup>

                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      id="guidelines"
                      name="guidelines"
                      checked={formData.guidelines}
                      onChange={handleInputChange}

                    />
                    <FieldLabel htmlFor="guidelines">
                      Acknowledgment of guidelines and policies
                    </FieldLabel>
                  </CheckboxGroup>

                  <CheckboxGroup>
                    <Checkbox
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleInputChange}
                    />
                    <FieldLabel htmlFor="terms">
                      Agreement to adhere to the terms of the application
                    </FieldLabel>
                  </CheckboxGroup>
                </FieldGroup>
                <SaveButtonContainer>
                  <SubmitButton 
                    type="submit"
                    
                  >
                    Save
                  </SubmitButton>
                </SaveButtonContainer>
              </FormFieldsContainer>
            </FormContainer>
          </MainContent>
        </InfoCard>
      </ContentWrapper>
    </PersonalInfoContainer>
  );
};
export default PersonalInformationForm;
