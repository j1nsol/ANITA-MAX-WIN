import styled from 'styled-components';


// Styled Components
const PersonalInfoForm = styled.form`
  background-color: rgba(57, 153, 218, 1);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  padding: 200px 70px 88px;

  @media (max-width: 991px) {
    padding: 100px 20px 0;
  }
`;

const FormContainer = styled.div`
  position: relative;
  display: flex;
  width: 797px;
  max-width: 100%;
  align-items: flex-start;
  gap: 10px;
  justify-content: start;
  padding: 58px 30px;

  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const FormBackground = styled.div`
  align-self: start;
  position: absolute;
  z-index: 0;
  display: flex;
  min-width: 240px;
  flex-direction: column;
  right: 0;
  bottom: 0;
  width: 797px;
  height: 1600px;
  border-radius: 10px;
  background-color: rgba(214, 220, 231, 1);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormContent = styled.div`
  z-index: 1;
  display: flex;
  min-width: 240px;
  width: 728px;
  flex-direction: column;
  justify-content: start;
  margin: auto 0;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const FormTitle = styled.h1`
  color: rgba(34, 51, 58, 1);
  font: 700 40px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  margin: 0;
`;

const FormLayout = styled.div`
  display: flex;
  margin-top: 22px;
  width: 100%;
  align-items: start;
  gap: 37px;
  justify-content: start;
  flex-wrap: wrap;
`;

const ImageUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 96px;
`;

const ImagePreview = styled.div`
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
  padding: 0 5px;
  font: 600 12px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  border: 1px dashed rgba(117, 117, 117, 1);
`;

const UploadButton = styled.label`
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
`;

const FormFields = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;
  width: 547px;
  gap: 26px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const InputGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: rgba(34, 51, 58, 1);
  justify-content: center;
  font: 400 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
`;

const InputField = styled.input`
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  min-height: 26px;
  width: 100%;
  padding: 0 8px;
  border: 1px solid rgba(117, 117, 117, 1);
  margin-top: 6px;
`;

const SubmitButton = styled.button`
  display: flex;
  margin-top: 39px;
  min-height: 37px;
  width: 105px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: var(--Secondary_2, #868a88);
  color: var(--Primary-scale-100, #fffbff);
  font: 700 20px PT Sans, sans-serif;
  border: none;
  cursor: pointer;
  padding: 6px 28px;
`;