const profilecard = {
    profileContainer: {
      position: "relative",
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      maxWidth: "1000px", 
      margin: "0 auto",
      padding: "100px",
      overflow: "hidden",
    },
    
    profileContent: {
      position: "relative",
      zIndex: 1,
    },
    profileHeader: {
      display: "flex",
      alignItems: "flex-start",
      marginBottom: "40px",
    },
    profileImageContainer: {
      flexShrink: 0,
      marginRight: "20px",
    },
    profileImage: {
      width: "200px",
      height: "200px",
      borderRadius: "100%", // Changed from "%" to "50%" to make it a perfect circle
      objectFit: "cover",
      border: "4px solid white",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    },
    profileInfo: {
      flexGrow: 1,
    },
    profileName: {
      fontFamily: "'Alexandria', sans-serif",  /* Added font family */
      fontSize: "50px",
      fontWeight: 600,
      margin: "0 0 5px 0",
      marginLeft: "100px",
      color: "#22333A",
    },
    
    profileUsername: {
      fontFamily: "'Alexandria', sans-serif",  /* Added font family */
      fontSize: "18px",
      fontWeight: 300,
      color: "#333",
      margin: "0 0 15px 0",
      marginLeft: "100px",
    },
    
    profileBio: {
      fontFamily: "'Alexandria', sans-serif",  /* Added font family */
      fontSize: "18px",
      fontWeight: 300,
      lineHeight: 1.5,
      color: "#333",
      marginLeft: "100px",
      marginBottom: "20px",
      maxWidth: "800px",
    },
    
    profileActions: {
      display: "flex",
      gap: "10px",
    },
    editProfileBtn: {
      backgroundColor: "#3498db",
      fontFamily: "'Alexandria', sans-serif",
      color: "white",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
      fontSize: "14px",
      fontWeight: 600,
      cursor: "pointer",
      marginLeft: "100px",
      transition: "background-color 0.2s",
    },
    dropdownBtn: {
      backgroundColor: "#f1f1f1",
      border: "none",
      borderRadius: "4px",
      width: "36px",
      height: "36px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
    sectionTitle: {
      fontFamily: "'Alexandria', sans-serif",
      fontSize: "25px",
      fontWeight: 600,
      marginBottom: "10px",
      color: "#22333A",
    },
    activityCardsContainer: {
      position: "relative",
    },
    activityCards: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
      gap: "20px",
    },
    activityCard: {
      backgroundColor: "white",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    cardImage: {
      height: "250px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    cardImageBlue: {
      background: "linear-gradient(135deg, #3498db, #2c3e50)",
    },
    cardImageNavy: {
      background: "linear-gradient(135deg, #1a2a3a, #2c3e50)",
    },
    cardImageOrange: {
      background: "linear-gradient(135deg, #e67e22, #d35400)",
    },
    cardImageImg: {
      maxWidth: "60%",
      maxHeight: "60%",
      objectFit: "contain",
    },
    cardTitle: {
      padding: "15px 15px 10px",
      fontSize: "16px",
      fontWeight: 600,
      color: "#333",
      margin: 0,
    },
    progressContainer: {
      height: "6px",
      backgroundColor: "#f1f1f1",
      margin: "0 15px",
      borderRadius: "3px",
      overflow: "hidden",
    },
    progressBarBlue: {
      height: "100%",
      borderRadius: "3px",
      backgroundColor: "#3498db",
    },
    progressBarNavy: {
      height: "100%",
      borderRadius: "3px",
      backgroundColor: "#2c3e50",
    },
    progressBarOrange: {
      height: "100%",
      borderRadius: "3px",
      backgroundColor: "#e67e22",
    },
    progressText: {
      padding: "8px 15px 15px",
      fontSize: "12px",
      color: "#666",
      margin: 0,
    },
    navigationButtons: {
      position: "absolute",
      right: 0,
      top: "-50px",
      display: "flex",
      gap: "10px",
    },
    navBtn: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      backgroundColor: "#22333A",
      color: "white",
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      transition: "background-color 0.2s",
    },
  }
  
  // Helper functions for responsive design
  const getResponsiveStyles = () => {
    if (window.innerWidth <= 768) {
      return {
        profileHeader: {
          ...profilecard.profileHeader,
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        },
        profileImageContainer: {
          ...profilecard.profileImageContainer,
          marginRight: 0,
          marginBottom: "20px",
        },
        profileActions: {
          ...profilecard.profileActions,
          justifyContent: "center",
        },
        navigationButtons: {
          position: "static",
          justifyContent: "center",
          marginTop: "20px",
        },
      }
    }
    return {}
  }
  
  // Helper function to get card image style based on color
  const getCardImageStyle = (color) => {
    switch (color) {
      case "blue":
        return { ...profilecard.cardImage, ...profilecard.cardImageBlue }
      case "navy":
        return { ...profilecard.cardImage, ...profilecard.cardImageNavy }
      case "orange":
        return { ...profilecard.cardImage, ...profilecard.cardImageOrange }
      default:
        return profilecard.cardImage
    }
  }
  
  // Helper function to get progress bar style based on color
  const getProgressBarStyle = (color, progress) => {
    let baseStyle
    switch (color) {
      case "blue":
        baseStyle = profilecard.progressBarBlue
        break
      case "navy":
        baseStyle = profilecard.progressBarNavy
        break
      case "orange":
        baseStyle = profilecard.progressBarOrange
        break
      default:
        baseStyle = profilecard.progressBarBlue
    }
    return { ...baseStyle, width: `${progress}%` }
  }
  
  export { profilecard, getResponsiveStyles, getCardImageStyle, getProgressBarStyle }
  
  