export const SignInStyle = `
  .auth-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    overflow: hidden; /* Removed scroll wheel */
  }

  .auth-form {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    box-sizing: border-box;
    font-family: "PT Sans", sans-serif; /* Applied PT Sans font */
  }

  .auth-header {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    color: rgba(128, 128, 128, 0.55);
    padding: 0 35px;
    font: 600 16px "PT Sans", sans-serif; /* Applied PT Sans font */
    text-align: center;
  }

  .header-content {
    display: flex;
    gap: 20px;
    font-size: 18px;
    color: rgba(34, 51, 58, 1);
    font-weight: 900;
    text-align: center;
    justify-content: center;
    font-family: "PT Sans", sans-serif; /* Applied PT Sans font */
  }

  .form-input {
  border-radius: 10px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 1);
  color: rgba(51, 51, 51, 0.85);
  padding: 10px;
  font: 600 16px "PT Sans", sans-serif; /* Applied PT Sans font */
  border: 1px solid rgba(200, 200, 200, 1);
  width: 113%;
  margin-top: 10px;
  margin-left: -35px;
  cursor: text;
  transition: border-color 0.3s ease;
  height: 28px; /* Set the height to 48px to match the submit button */
}

  .form-input:focus {
    border-color: rgba(53, 152, 219, 1);
    outline: none;
  }

  .forgot-password {
  color: rgba(66, 159, 221, 1);
  background-color: rgba(229, 231, 235, 1);
  font-size: 14px;
  margin-left: 30px;
  cursor: pointer;
  text-align: right;
  font-weight: 600;
  width: 100%;
  border: none;
  font-family: "PT Sans", sans-serif; /* Applied PT Sans font */
}


  .submit-button {
  border-radius: 10px;
  background-color: rgba(53, 152, 219, 1);
  margin-top: 20px;
  height: 48px; /* Keep the submit button height as 48px */
  width: 100%;
  color: rgba(255, 255, 255, 0.9);
  font: 600 18px "PT Sans", sans-serif; /* Applied PT Sans font */
  border: none;
  cursor: pointer;
  text-align: center;
}

  .social-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.2s ease, opacity 0.3s ease;
  }

  .social-button:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .divider {
    align-self: center;
    display: flex;
    margin-top: 30px;
    width: 345px;
    max-width: 100%;
    align-items: center;
    gap: 30px;
    justify-content: space-between;
  }

  .divider-line {
    flex-grow: 1;
    height: 1px;
    background-color: rgba(104, 104, 104, 0.5);
  }

  .divider-text {
    color: rgba(34, 51, 58, 1);
    font: 800 16px "PT Sans", sans-serif; /* Applied PT Sans font */
  }

  .social-login {
    align-self: center;
    display: flex;
    margin-top: 30px;
    align-items: center;
    gap: 40px 50px;
    justify-content: center;
    padding: 0 5px;
  }

  .social-icon {
    width: 55px;
    height: 55px;
    cursor: pointer;
  }

  .signup-prompt {
    margin-top: 20px;
    font: 600 16px "PT Sans", sans-serif; /* Applied PT Sans font */
    text-align: center;
    color: rgba(34, 51, 58, 1);
  }

  .create-account {
    color: rgba(53, 152, 219, 1);
    font-weight: 600;
    cursor: pointer;
    font-family: "PT Sans", sans-serif; /* Applied PT Sans font */
  }

  .footer-link {
    background: none;
    border: none;
    padding: 0;
    color: rgba(53, 152, 219, 1);
    font-weight: 800;
    cursor: pointer;
    transition: color 0.3s ease;
    font-size: 16px;
    font-family: "PT Sans", sans-serif; /* Applied PT Sans font */
  }

  .footer-link:hover {
    color: rgba(41, 128, 185, 1);
  }

  @media (max-width: 991px) {
    .auth-form {
      padding: 35px 15px;
    }

    .form-input {
      max-width: 756px;
    }

    .submit-button {
      width: 100%;
    }

    .divider {
      flex-direction: column;
      gap: 10px;
    }
  }
`;
