import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import {
  profilecard,
  getResponsiveStyles,
  getCardImageStyle,
  getProgressBarStyle,
} from "../styles/profilecard"; // adjust import path as needed
import Sidebar from "../components/Sidebar/Sidebar";
import { UserTopBar } from "../components/Topbar/UserTopBar";

export default function ProfileCard() {
  const [responsiveStyles, setResponsiveStyles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setResponsiveStyles(getResponsiveStyles());
    };

    handleResize(); // Set initial styles
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activityCards = [
    {
      id: 1,
      title: "Basic of C",
      image: "/placeholder.svg?height=150&width=150",
      progress: 100,
      color: "blue",
    },
    {
      id: 2,
      title: "C++ isn't a C upgrade",
      image: "/placeholder.svg?height=150&width=150",
      progress: 28,
      color: "navy",
    },
    {
      id: 3,
      title: "Philosophy 101",
      image: "/placeholder.svg?height=150&width=150",
      progress: 57,
      color: "orange",
    },
    {
      id: 4,
      title: "That was hot",
      image: "/placeholder.svg?height=150&width=150",
      progress: 38,
      color: "blue",
    },
  ];

  return (
    
    <div style={{ position: "relative", width: "100%" }}>
      <UserTopBar />
      <Sidebar />
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right,rgb(255, 255, 255), #3999DA)", // Gradient background
          zIndex: 1,
        }}
      />

      <div style={profilecard.profileContainer}>
        <div style={profilecard.profileContent}>
          <div
            style={{
              ...profilecard.profileHeader,
              ...(responsiveStyles.profileHeader || {}),
            }}
          >
            <div
              style={{
                ...profilecard.profileImageContainer,
                ...(responsiveStyles.profileImageContainer || {}),
              }}
            >
              <img
                src="/placeholder.svg?height=200&width=200"
                alt="Profile"
                style={profilecard.profileImage}
              />
            </div>

            <div style={profilecard.profileInfo}>
              <h1 style={profilecard.profileName}>Jez Xyrel Olpoc</h1>
              <p style={profilecard.profileUsername}>@jzxyREAL</p>
              <p style={profilecard.profileBio}>
                I'm someone who thrives on curiosity and creativity. Whether it's
                diving into a new hobby, tackling a challenge, or exploring fresh
                ideas, I'm always eager to learn and grow.
              </p>

              <div
                style={{
                  ...profilecard.profileActions,
                  ...(responsiveStyles.profileActions || {}),
                }}
              >
                <button style={profilecard.editProfileBtn}>EDIT PROFILE</button>
                <button style={profilecard.dropdownBtn}>
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <h2 style={profilecard.sectionTitle}>Recent Activity</h2>

            <div style={profilecard.activityCardsContainer}>
              <div style={profilecard.activityCards}>
                {activityCards.map((card) => (
                  <div key={card.id} style={profilecard.activityCard}>
                    <div style={getCardImageStyle(card.color)}>
                      <img
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        style={profilecard.cardImageImg}
                      />
                    </div>
                    <h3 style={profilecard.cardTitle}>{card.title}</h3>
                    <div style={profilecard.progressContainer}>
                      <div style={getProgressBarStyle(card.color, card.progress)} />
                    </div>
                    <p style={profilecard.progressText}>
                      {card.progress}% Complete
                    </p>
                  </div>
                ))}
              </div>

              <div
                style={{
                  ...profilecard.navigationButtons,
                  ...(responsiveStyles.navigationButtons || {}),
                }}
              >
                <button style={profilecard.navBtn}>
                  <ChevronLeft size={24} />
                </button>
                <button style={profilecard.navBtn}>
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
