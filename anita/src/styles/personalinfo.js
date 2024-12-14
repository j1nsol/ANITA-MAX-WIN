export const infostyle = {
    personalInfoForm: {
      backgroundColor: 'rgba(57, 153, 218, 1)',
      overflowX: 'auto',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      alignItems: 'center',
      padding: '200px 70px 88px'
    },
    formContainer: {
      position: 'relative',
      display: 'flex',
      width: '797px',
      maxWidth: '100%',
      alignItems: 'flex-start',
      gap: '10px',
      justifyContent: 'start',
      padding: '58px 30px'
    },
    formBackground: {
      alignSelf: 'start',
      position: 'absolute',
      zIndex: 0,
      display: 'flex',
      minWidth: '240px',
      flexDirection: 'column',
      right: 0,
      bottom: 0,
      width: '797px',
      height: '1600px',
      borderRadius: '10px',
      backgroundColor: 'rgba(214, 220, 231, 1)',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)'
    },
    formContent: {
      zIndex: 1,
      display: 'flex',
      minWidth: '240px',
      width: '728px',
      flexDirection: 'column',
      justifyContent: 'start',
      margin: 'auto 0'
    },
    formTitle: {
      color: 'rgba(34, 51, 58, 1)',
      font: '700 40px Alexandria, -apple-system, Roboto, Helvetica, sans-serif',
      margin: 0
    },
    formLayout: {
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
    imagePreview: {
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
    previewImg: {
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
      marginTop: '19px'
    },
    uploadButton: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      background: 'var(--Secondary, #22333b)',
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
    formFields: {
      display: 'flex',
      minWidth: '240px',
      flexDirection: 'column',
      justifyContent: 'start',
      flexGrow: 1,
      width: '547px',
      gap: '26px'
    },
    inputGroup: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      color: 'rgba(34, 51, 58, 1)',
      justifyContent: 'center',
      font: '400 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif'
    },
    inputField: {
      borderRadius: '5px',
      backgroundColor: 'rgba(229, 231, 235, 1)',
      minHeight: '26px',
      width: '100%',
      padding: '0 8px',
      border: '1px solid rgba(117, 117, 117, 1)',
      marginTop: '6px'
    },
    contactSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    emergencyContact: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    volunteerSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    roleSelect: {
      borderRadius: '5px',
      backgroundColor: 'rgba(229, 231, 235, 1)',
      minHeight: '26px',
      width: '100%',
      border: '1px solid rgba(117, 117, 117, 1)',
      padding: '0 8px'
    },
    skillsSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    certificationsSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    certUpload: {
      borderRadius: '5px',
      backgroundColor: 'rgba(229, 231, 235, 1)',
      display: 'flex',
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
    uploadIcon: {
      aspectRatio: '1',
      objectFit: 'contain',
      objectPosition: 'center',
      width: '24px'
    },
    uploadInstruction: {
      marginTop: '10px',
      width: '234px',
      maxWidth: '100%'
    },
    agreementsSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    },
    agreementItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '23px'
    },
    checkboxWrapper: {
      display: 'flex',
      flexDirection: 'column',
      width: '23px'
    },
    agreementCheckbox: {
      borderRadius: '5px',
      backgroundColor: 'rgba(220, 47, 2, 0)',
      width: '23px',
      height: '23px',
      border: '1px solid rgba(104, 104, 104, 1)',
      cursor: 'pointer'
    },
    agreementText: {
      color: 'rgba(34, 51, 58, 1)',
      font: '700 16px PT Sans, sans-serif',
      cursor: 'pointer'
    },
    submitButton: {
      display: 'flex',
      marginTop: '39px',
      minHeight: '37px',
      width: '105px',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '5px',
      background: 'var(--Secondary_2, #868a88)',
      color: 'var(--Primary-scale-100, #fffbff)',
      font: '700 20px PT Sans, sans-serif',
      border: 'none',
      cursor: 'pointer',
      padding: '6px 28px'
    },
    hiddenInput: {
      display: 'none'
    },
    buttonText: {
      alignSelf: 'stretch',
      width: '100%',
      height: '17px'
    },
    '@media (max-width: 991px)': {
      personalInfoForm: {
        padding: '100px 20px 0'
      },
      formContainer: {
        padding: '0 20px'
      },
      formBackground: {
        maxWidth: '100%'
      },
      formContent: {
        maxWidth: '100%'
      },
      formFields: {
        maxWidth: '100%'
      },
      submitButton: {
        padding: '0 20px'
      },
      certUpload: {
        padding: '20px'
      }
    }
  };
  