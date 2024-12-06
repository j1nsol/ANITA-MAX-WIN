export const SignInStyle = `
  .auth-container {
    background-color: rgba(54, 53, 53, 0);
    display: flex;
    max-width: 756px;
    flex-direction: column;
    overflow: hidden;
  }

  .auth-form {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 20px; /* Adjust padding for consistent spacing */
    width: 100%;
    max-width: 500px; /* Align max-width with your design */
    margin: 0 auto;
  }

  .auth-header {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    color: rgba(128, 128, 128, 0.55);
    padding: 0 35px;
    font: 600 16px Roboto, sans-serif;
    text-align: center; /* Center-align header text */
  }

  .header-content {
    display: flex;
    gap: 20px;
    font-size: 18px; /* Adjust font size for uniformity */
    color: rgba(34, 51, 58, 1);
    font-weight: 900;
    text-align: center;
    justify-content: center;
  }

  .form-input {
    border-radius: 10px;
    margin: 10px auto;
    background-color: rgba(255, 255, 255, 1); /* White background for inputs */
    color: rgba(51, 51, 51, 0.85);
    padding: 10px;
    font: 600 16px Roboto, sans-serif;
    border: 1px solid rgba(200, 200, 200, 1);
    width: 100%;
    margin-top: 15px;
    margin-left: -10px; 
    cursor: text;
    transition: border-color 0.3s ease;
  }

  .form-input:focus {
    border-color: rgba(53, 152, 219, 1); /* Add a focus effect */
    outline: none;
  }

  .forgot-password {
    color: rgba(66, 159, 221, 1);
    background-color: rgba(229, 231, 235, 1);
    font-size: 14px;
    margin: 15px 0;
    cursor: pointer;
    text-align: right;
    width: 100%;
    border: none;
  }

  .submit-button {
    border-radius: 10px;
    background-color: rgba(53, 152, 219, 1);
    margin-top: 20px;
    height: 48px;
    width: 90%;
    color: rgba(255, 255, 255, 0.9);
    font: 800 18px Roboto, sans-serif;
    border: none;
    cursor: pointer;
    text-align: center;
  }

  .divider {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(34, 51, 58, 1);
    margin: 30px 0;
    font: 700 16px Roboto, sans-serif;
  }

  .divider-line {
    flex-grow: 1;
    height: 1px;
    background-color: rgba(200, 200, 200, 1);
  }

  .social-login {
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .social-icon {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .signup-prompt {
    margin-top: 20px;
    font: 400 14px Roboto, sans-serif;
    text-align: center;
  }

  .create-account {
    color: rgba(53, 152, 219, 1);
    font-weight: 600;
    cursor: pointer;
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
