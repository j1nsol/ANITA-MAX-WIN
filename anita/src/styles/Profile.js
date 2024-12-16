export default `
  .profile-container {
    background-color: rgba(57, 153, 218, 1);
    overflow-x: auto;
    display: flex;
    padding-top: 100px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-bottom: 112px;
  }
  .profile-landing {
    overflow-x: auto;
    display: flex;
    height: 1200px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: start;
    margin-bottom: 46px;
  }
  .profile-main {
    display: flex;
    width: 1628px;
    max-width: 100%;
    flex-direction: column;
  }
  .profile-content {
    margin-left: 31px;
    width: 1235px;
    max-width: 100%;
  }
  .profile-header {
    gap: 20px;
    display: flex;
  }
  .profile-avatar-wrapper {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 25%;
    margin-left: 0px;
  }
  .profile-avatar {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 300px;
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    max-width: 100%;
  }
  .profile-info {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 75%;
    margin-left: 20px;
  }
  .profile-details {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-self: stretch;
    align-items: start;
    font-family: PT Sans, sans-serif;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    margin: auto 0;
  }
  .profile-name {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 64px;
    font-family: Alexandria, sans-serif;
  }
  .profile-bio {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    margin-top: 23px;
    font: 20px Alexandria, sans-serif;
  }
  .profile-actions {
    display: flex;
    margin-top: 12px;
    width: 275px;
    max-width: 100%;
    gap: 16px;
    font-size: 24px;
    color: #fffbff;
  }
  .edit-profile-btn {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(57, 153, 218, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    min-height: 57px;
    gap: 8px;
    padding: 13px 28px;
    border: none;
    color: white;
    cursor: pointer;
  }
  .settings-icon {
    aspect-ratio: 0.95;
    object-fit: contain;
    object-position: center;
    width: 54px;
    border-radius: 0px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  .activity-section {
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: center;
    padding: 46px 58px;
  }
  .activity-container {
    display: flex;
    margin-right: -36px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
  }
  .activity-header {
    display: flex;
    width: 100%;
    align-items: start;
    gap: 40px 1119px;
    justify-content: start;
    flex-wrap: wrap;
  }
  .activity-title {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font: 800 36px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }
  .activity-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    width: 118px;
    padding: 0 80px;
  }
  .activity-icon {
    aspect-ratio: 1.07;
    object-fit: contain;
    object-position: center;
    width: 73px;
    border-radius: 15px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    margin: auto 0;
  }
  .quiz-grid {
    display: flex;
    margin-top: 21px;
    width: 100%;
    align-items: center;
    gap: 35px;
    font-family: Alexandria, sans-serif;
    justify-content: start;
    flex-wrap: wrap;
  }
  .quiz-card {
    border-radius: 15px;
    background-color: rgba(214, 220, 231, 1);
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    display: flex;
    min-height: 487px;
    min-width: 420px;
    align-items: center;
    overflow: hidden;
    justify-content: center;
    width: 423px;
    flex: 0 0 auto;
    max-width: 100%;
    margin: auto 0;
    padding: 0 2px;
  }
  .quiz-content {
    border-radius: 15px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
    align-self: stretch;
    display: flex;
    min-width: 240px;
    min-height: 487px;
    width: 419px;
    align-items: start;
    overflow: hidden;
    justify-content: center;
    margin: auto 0;
  }
  .quiz-inner {
    display: flex;
    min-width: 240px;
    width: 362px;
    flex-direction: column;
    justify-content: start;
    padding: 15px 0;
  }
  .quiz-image {
    aspect-ratio: 1.52;
    object-fit: contain;
    object-position: center;
    width: 100%;
    border-radius: 11px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
  }
  .quiz-details {
    display: flex;
    margin-top: 18px;
    width: 100%;
    flex-direction: column;
    justify-content: start;
  }
  .quiz-title {
    color: rgba(34, 51, 58, 1);
    font-size: 24px;
    font-weight: 500;
    align-self: center;
  }
  .progress-bar {
    display: flex;
    margin-top: 110px;
    width: 100%;
    flex-direction: column;
    font-size: 13px;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    justify-content: start;
  }
  .progress-background {
    border-radius: 10px;
    display: flex;
    min-height: 31px;
    width: 100%;
  }
  .progress-fill {
    border-radius: 10px;
    display: flex;
    min-height: 31px;
    position: relative;
    margin-top: -31px;
  }
  .progress-text {
    margin-top: 5px;
    text-align: center;
  }
  .background {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    min-height: 1px;
    width: 100%;
  }
  @media (max-width: 991px) {
    .profile-landing {
      max-width: 100%;
      height: auto;
      min-height: 1200px;
    }
    .profile-content {
      margin-left: 20px;
    }
    .profile-header {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
    .profile-avatar-wrapper {
      width: 100%;
    }
    .profile-avatar {
      margin-top: 40px;
    }
    .profile-info {
      width: 100%;
    }
    .profile-details {
      max-width: 100%;
      margin-top: 40px;
    }
    .profile-name {
      max-width: 100%;
      font-size: 40px;
    }
    .profile-bio {
      max-width: 100%;
    }
    .edit-profile-btn {
      padding: 0 20px;
    }
    .activity-section {
      max-width: 100%;
      padding-left: 20px;
    }
    .activity-container {
      max-width: 100%;
    }
    .activity-header {
      max-width: 100%;
    }
    .activity-icons {
      padding: 0 20px;
    }
    .quiz-grid {
      max-width: 100%;
    }
    .quiz-card {
      min-width: 300px;
    }
    .quiz-content {
      min-width: 200px;
    }
    .progress-bar {
      margin-top: 40px;
    }
    .background {
      max-width: 100%;
    }
  }
`;