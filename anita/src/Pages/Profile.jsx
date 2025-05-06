import React from 'react';
import styles from './Profile.styles';
import Sidebar from '../components/Sidebar/Sidebar';
import { UserTopBar } from '../components/Topbar/UserTopBar';

export default function Profile() {
  const quizData = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c639bd404fa1ed27331d0ed0b14861809f20a2139baaae14f18ea495aed328c9?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06",
      title: "Basic of C",
      progress: 100,
      color: "rgba(52, 152, 219, 1)"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/fefe5dc855de19fd3d459ec8fa521bb18457aac763dc54278b4b8b4220883fe3?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06",
      title: "C++ isn't a C upgrade",
      progress: 28,
      color: "rgba(47, 64, 71, 1)"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9c94b0dd1149c1bf3fe07f7134069078ce75342c01b275e779001e545a91dd43?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06",
      title: "Philosophy 101",
      progress: 28,
      color: "rgba(230, 127, 34, 1)"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/278df84c52c3efb87586f60ecc42d20afc9c869971664af4217e097ddd625344?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06",
      title: "That was hot",
      progress: 28,
      color: "rgba(52, 152, 219, 1)"
    }
  ];

  return (
    
    <div className="profile-container">
     <UserTopBar />
     <Sidebar />
      <div className="profile-landing">
        <div className="profile-main">
          <div className="profile-content">
            <div className="profile-header">
              <div className="profile-avatar-wrapper">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d3d0c5e372b1655034b5d5bfd32bebb9b0e1164901fa7e7b9ca6b66923420ca?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                  alt="Profile avatar"
                  className="profile-avatar"
                />
              </div>
              <div className="profile-info">
                <div className="profile-details">
                  <div className="profile-name">
                    Jez Xyrel Olpoc
                    <br />
                    @jzxyREAL
                    <br />
                    <br />
                  </div>
                  <div className="profile-bio">
                    I'm someone who thrives on curiosity and creativity.
                    Whether it's diving into a new hobby, tackling a
                    challenge, or exploring fresh ideas, I'm always eager to
                    learn and grow.
                  </div>
                  <div className="profile-actions">
                    <button 
                      className="edit-profile-btn"
                      aria-label="Edit profile"
                    >
                      EDIT PROFILE
                    </button>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/91844f46352a157b36d434338ed70907e978878c86f803ef74f667a0f481b974?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                      alt="Settings"
                      className="settings-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="activity-section">
            <div className="activity-container">
              <div className="activity-header">
                <div className="activity-title">Recent Activity</div>
                <div className="activity-icons">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/40b51ce1e9069e984d674b3cd7d8a2ca48d71ab54e093bc403bf28cd3c101c48?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                    alt="Activity icon 1"
                    className="activity-icon"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c521b0bc645ad1fd0de77aa643f4447b7598e1f65ae756c4e754a1148b30d0b6?placeholderIfAbsent=true&apiKey=d7d67a4d824c46b4aa861d05b7657a06"
                    alt="Activity icon 2"
                    className="activity-icon"
                  />
                </div>
              </div>
              <div className="quiz-grid">
                {quizData.map((quiz, index) => (
                  <div key={index} className="quiz-card">
                    <div className="quiz-content">
                      <div className="quiz-inner">
                        <img
                          loading="lazy"
                          src={quiz.image}
                          alt={`${quiz.title} quiz thumbnail`}
                          className="quiz-image"
                        />
                        <div className="quiz-details">
                          <div className="quiz-title">{quiz.title}</div>
                          <div className="progress-bar">
                            <div 
                              className="progress-background"
                              style={{backgroundColor: `${quiz.color}50`}}
                            />
                            <div 
                              className="progress-fill"
                              style={{
                                backgroundColor: quiz.color,
                                width: `${quiz.progress}%`
                              }}
                            />
                            <div className="progress-text">
                              {quiz.progress}% Complete
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="background" />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
}