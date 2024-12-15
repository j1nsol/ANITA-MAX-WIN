import PersonalInfoForm from "../Pages/personalinfo";

export const styles = {
  userPersonalInformation: {
    backgroundColor: 'rgba(57, 153, 218, 1)',
    overflowX: 'auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '10px',
    overflow: 'hidden',
    justifyContent: 'start',
    padding: '125px 559px'
  },

  landingPage: {
    alignSelf: 'start',
    position: 'absolute',
    zIndex: 0,
    display: 'flex',
    minHeight: '1369px',
    width: '1918px',
    right: '0px',
    bottom: '0px',
    height: '1369px'
  },

  infoContainer: {
    borderRadius: '20px',
    backgroundColor: 'rgba(214, 220, 231, 1)',
    zIndex: 0,
    display: 'flex',
    minWidth: '240px',
    alignItems: 'center',
    gap: '10px',
    justifyContent: 'start',
    width: '797px',
    margin: 'auto 0',
    padding: '58px 30px'
  },

  contentWrapper: {
    alignSelf: 'stretch',
    display: 'flex',
    minWidth: '240px',
    width: '728px',
    flexDirection: 'column',
    justifyContent: 'start',
    margin: 'auto 0'
  },

  pageTitle: {
    width: '100%',
    color: 'rgba(34, 51, 58, 1)',
    font: '700 40px Alexandria, -apple-system, Roboto, Helvetica, sans-serif'
  },

  formSection: {
    display: 'flex',
    marginTop: '22px',
    width: '100%',
    alignItems: 'start',
    gap: '37px',
    justifyContent: 'start',
    flexWrap: 'wrap'
  },

  imageUploadSection: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    width: '96px'
  },

  imageContainer: {
    display: 'flex',
    minHeight: '184px',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  uploadArea: {
    borderRadius: '5px',
    backgroundColor: 'rgba(229, 231, 235, 1)',
    display: 'flex',
    minHeight: '120px',
    width: '120px',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'var(--Secondary_2, #868a88)',
    textAlign: 'center',
    justifyContent: 'center',
    height: '120px',
    padding: '0 5px',
    font: '600 12px Alexandria, -apple-system, Roboto, Helvetica, sans-serif',
    border: '1px dashed rgba(117, 117, 117, 1)'
  },

  uploadContent: {
    borderRadius: '0px',
    display: 'flex',
    width: '100%',
    maxWidth: '110px',
    flexDirection: 'column'
  },

  uploadIcon: {
    aspectRatio: '1.25',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '59px',
    borderRadius: '5px',
    alignSelf: 'center'
  },

  uploadText: {
    alignSelf: 'stretch',
    width: '110px',
    marginTop: '20px',
    gap: '10px'
  },

  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    background: 'var(--Secondary, #22333b)',
    backgroundColor: 'var(--Secondary, #22333b)',
    alignSelf: 'center',
    display: 'flex',
    marginTop: '10px',
    minHeight: '27px',
    width: '100%',
    maxWidth: '102px',
    flexDirection: 'column',
    color: 'var(--Primary-scale-100, #fffbff)',
    padding: '5px 7px',
    font: '700 14px PT Sans, sans-serif',
    border: 'none',
    cursor: 'pointer'
  },

  buttonText: {
    alignSelf: 'stretch',
    width: '100%',
    height: '17px',
    gap: '13px',
    overflow: 'hidden'
  },

  formContainer: {
    display: 'flex',
    minWidth: '240px',
    flexDirection: 'column',
    justifyContent: 'start',
    flexGrow: 1,
    width: '547px'
  },

  formWrapper: {
    display: 'flex',
    width: '545px',
    maxWidth: '100%',
    flexDirection: 'column'
  },

  formContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start'
  },

  inputGroup: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    color: 'rgba(34, 51, 58, 1)',
    justifyContent: 'center',
    font: '400 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif',
    marginBottom: '20px'
  },

  inputField: {
    alignSelf: 'stretch',
    borderRadius: '5px',
    backgroundColor: 'rgba(229, 231, 235, 1)',
    minHeight: '26px',
    width: '100%',
    gap: '10px',
    padding: '5px 10px',
    border: '1px solid rgba(117, 117, 117, 1)',
    marginTop: '6px',
    font: 'inherit'
  },

  contactSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },

  addressSection: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },

  emergencyContactSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },

  volunteerSection: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px'
  },

  volunteerField: {
    alignSelf: 'stretch',
    borderRadius: '5px',
    backgroundColor: 'rgba(229, 231, 235, 1)',
    minHeight: '26px',
    width: '100%',
    padding: '5px 10px',
    border: '1px solid rgba(117, 117, 117, 1)',
    marginTop: '6px',
    font: 'inherit'
  },

  skillsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },

  skillsField: {
    alignSelf: 'stretch',
    borderRadius: '5px',
    backgroundColor: 'rgba(229, 231, 235, 1)',
    minHeight: '60px',
    width: '100%',
    padding: '10px',
    border: '1px solid rgba(117, 117, 117, 1)',
    marginTop: '6px',
    font: 'inherit',
    resize: 'vertical'
  },

  experienceField: {
    alignSelf: 'stretch',
    borderRadius: '5px',
    backgroundColor: 'rgba(229, 231, 235, 1)',
    minHeight: '60px',
    width: '100%',
    padding: '10px',
    border: '1px solid rgba(117, 117, 117, 1)',
    font: 'inherit',
    resize: 'vertical'
  },

  certificationsSection: {
    marginBottom: '20px'
  },

  certificationsUpload: {
    borderRadius: '5px',
    backgroundColor: 'rgba(229, 231, 235, 1)',
    display: 'flex',
    marginTop: '10px',
    minHeight: '100px',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'var(--Secondary_2, #868a88)',
    textAlign: 'center',
    justifyContent: 'center',
    padding: '26px 73px',
    font: '600 12px Alexandria, -apple-system, Roboto, Helvetica, sans-serif',
    border: '1px dashed rgba(117, 117, 117, 1)',
    cursor: 'pointer'
  },

  uploadCertIcon: {
    aspectRatio: '1',
    objectFit: 'contain',
    objectPosition: 'center',
    width: '24px'
  },

  uploadCertTextWrapper: {
    display: 'flex',
    marginTop: '10px',
    width: '234px',
    maxWidth: '100%',
    flexDirection: 'column'
  },

  uploadCertText: {
    alignSelf: 'stretch',
    width: '234px',
    gap: '10px'
  },

  agreementsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px'
  },

  agreementItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '23px'
  },

  checkbox: {
    width: '23px',
    height: '23px',
    borderRadius: '5px',
    border: '1px solid rgba(104, 104, 104, 1)',
    cursor: 'pointer'
  },

  agreementText: {
    color: 'rgba(34, 51, 58, 1)',
    font: '700 16px PT Sans, sans-serif'
  },

  agreementLink: {
    color: 'rgba(53, 152, 219, 1)',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  saveButtonWrapper: {
    display: 'flex',
    marginTop: '39px',
    minHeight: '53px',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },

  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    backgroundColor: 'var(--Secondary_2, #868a88)',
    display: 'flex',
    minHeight: '37px',
    width: '105px',
    maxWidth: '100%',
    gap: '8px',
    padding: '6px 28px',
    border: 'none',
    cursor: 'pointer',
    color: 'var(--Primary-scale-100, #fffbff)',
    font: '700 20px PT Sans, sans-serif'
  },

  saveText: {
    alignSelf: 'stretch',
    gap: '13px',
    overflow: 'hidden',
    margin: 'auto 0'
  },

  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: 0,
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: 0
  }
};
