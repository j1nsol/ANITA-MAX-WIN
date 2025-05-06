import * as React from "react";
import TopBar from "../components/LandingPage/TopBar";
import Footer from "../components/LandingPage/Footer";
import SignUpForm from "../components/Authentication/SignUpForm";
import SignInForm from "../components/Authentication/SignInForm";
import jezImage from "/src/assets/images/about us/jez.png";
import edImage from "/src/assets/images/about us/ed.png";
import flexImage from "/src/assets/images/about us/flex.png";
import jeadImage from "/src/assets/images/about us/jead.png";
import jim2Image from  "/src/assets/images/about us/jim2.png";
import sephImage from "/src/assets/images/about us/seph.png";
import mayetImage from "/src/assets/images/about us/mayet.png";

export default function AboutUs() {
  const [isSignUpVisible, setSignUpVisible] = React.useState(false);
  const [isSignInVisible, setSignInVisible] = React.useState(false);

  const showSignUpForm = () => {
    setSignUpVisible(true);
    setSignInVisible(false);
  };

  const showSignInForm = () => {
    setSignInVisible(true);
    setSignUpVisible(false);
  };

  const closeModal = () => {
    setSignUpVisible(false);
    setSignInVisible(false);
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const teamMembers = [
    {name: "Jez Xyrel K. Olpoc", position: "Lead Senior Developer", image: jezImage},
    {name: "Johanna Mae R. Penional", position: "Project Manager", image: mayetImage},
    {name: "Ed Bernard B. Añasco", position: "Junior Developer", image: edImage},
    {name: "James Andrei S. Atienza", position: "UI/UX Designer", image: jim2Image},
    {name: "Flexter C. Vega", position: "Senior Developer", image: flexImage},
    {name: "Jead Rick C. Belande", position: "Senior Citizen", image: jeadImage},
    {name: "Carl Joseph R. Perez", position: "Frontend Developer", image: sephImage}

  ]
  

  return (
    <main className="about-page" style={{ fontFamily: "Arial, sans-serif" }}>
      <TopBar onSignUpClick={showSignUpForm} onSignInClick={showSignInForm} />

      {/* HERO */}
      <section className="hero-section" style={{
  height: "80vh",
  width: "100vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "4rem 2rem",
  background: "linear-gradient(to bottom, #0077c0, #ffffff)"
}}>
  <h2 style={{
    fontSize: "4rem",
    color: "#fff",
    margin: 0, // Remove default margin
    marginBottom: "0.5rem" // Reduce gap
  }}>
    Meet our team of passionate,
  </h2>
  <h2 style={{
    fontSize: "5rem",
    fontWeight: "700",
    color: "#001f3f",
    margin: 0 // Remove default margin
  }}>
    VISIONARY INNOVATORS!
  </h2>
</section>

      {/* TEAM MEMBERS */}
      <section className="team-section" style={{
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)", // 3 columns
  gap: "2rem",
  padding: "3rem 2rem",
  maxWidth: "1200px",
  margin: "0 auto"
}}>
  {teamMembers.map((member, index) => (
    <div key={index} style={{
      width: "80%", // Full width of the grid column
      aspectRatio: "7 / 9",
      padding: "1.5rem",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: "80%", // Image takes 80% of the card's width
          height: "auto",
          borderRadius: "8px",
          marginBottom: "1rem"
        }}
      />
      <h3 style={{ fontWeight: "600", marginBottom: "0.3rem" }}>{member.name}</h3>
      <p style={{ color: "#555" }}>{member.position}</p>
    </div>
  ))}
</section>
      <Footer />

      {/* SIGN-UP MODAL */}
      {isSignUpVisible && (
        <div className="overlay" onClick={handleOverlayClick} style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "500px",
            width: "90%"
          }}>
            <SignUpForm onClose={closeModal} showSignInForm={showSignInForm} />
          </div>
        </div>
      )}

      {/* SIGN-IN MODAL */}
      {isSignInVisible && (
        <div className="overlay" onClick={handleOverlayClick} style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            maxWidth: "500px",
            width: "90%"
          }}>
            <SignInForm onClose={closeModal} showSignUpForm={showSignUpForm} />
          </div>
        </div>
      )}
    </main>
  );
}
