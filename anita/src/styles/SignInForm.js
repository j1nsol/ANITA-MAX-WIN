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
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
  }

  .auth-header {
    align-self: stretch;
    display: flex;
    width: 100%;
    flex-direction: column;
    color: rgba(128, 128, 128, 0.55);
    padding: 0 35px;
    font: 600 24px Roboto, sans-serif;
  }

  .header-content {
    display: flex;
    gap: 20px;
    font-size: 32px;
    color: rgba(34, 51, 58, 1);
    font-weight: 900;
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .header-icon {
    aspect-ratio: 1.08;
    object-fit: contain;
    object-position: center;
    width: 41px;
    border-radius: 0;
    align-self: start;
  }

  .form-input {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    padding: 20px 19px;
    border: 1px solid rgba(104, 104, 104, 1);
    width: 100%;
  }

  .forgot-password {
    color: rgba(66, 159, 221, 1);
    font-size: 20px;
    align-self: end;
    margin-top: 14px;
  }

  .submit-button {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(53, 152, 219, 1);
    margin-top: 50px;
    min-height: 64px;
    width: 100%;
    max-width: 675px;
    color: rgba(253, 255, 255, 0.9);
    text-align: center;
    padding: 18px 0;
    font: 800 24px Roboto, sans-serif;
    border: none;
    cursor: pointer;
  }

  .divider {
    display: flex;
    margin-top: 51px;
    width: 345px;
    max-width: 100%;
    align-items: center;
    gap: 30px;
    color: rgba(34, 51, 58, 1);
    white-space: nowrap;
    justify-content: space-between;
    font: 800 24px Roboto, sans-serif;
  }

  .divider-line {
    aspect-ratio: 125;
    object-fit: contain;
    object-position: center;
    width: 126px;
    align-self: stretch;
    margin: auto 0;
  }

  .social-login {
    display: flex;
    margin-top: 51px;
    align-items: center;
    gap: 40px 50px;
    overflow: hidden;
    justify-content: center;
    padding: 0 5px;
  }

  .social-icon {
    aspect-ratio: 1.14;
    object-fit: contain;
    object-position: center;
    width: 65px;
    border-radius: 0;
    align-self: stretch;
    margin: auto 0;
  }

  .signup-prompt {
    display: flex;
    margin-top: 73px;
    width: 425px;
    max-width: 100%;
    align-items: center;
    gap: 12px;
    text-align: center;
    justify-content: center;
    font: 24px Roboto, sans-serif;
  }

  .prompt-text {
    color: rgba(196, 197, 197, 1);
    font-weight: 600;
    align-self: stretch;
    margin: auto 0;
  }

  .create-account {
    color: rgba(53, 152, 219, 1);
    font-weight: 800;
    align-self: stretch;
    margin: auto 0;
    cursor: pointer;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  @media (max-width: 991px) {
    .auth-form {
      max-width: 100%;
    }
    
    .auth-header {
      max-width: 100%;
      padding: 0 20px;
    }
    
    .header-content {
      max-width: 100%;
    }
    
    .form-input {
      max-width: 100%;
      margin: 40px 30px 0;
      padding: 15px 20px 15px 0;
    }
    
    .forgot-password {
      margin-right: 10px;
    }
    
    .submit-button {
      max-width: 87%;
      margin: 40px auto 0;
    }
    
    .divider {
      margin-top: 40px;
      white-space: initial;
    }
    
    .social-login {
      margin-top: 40px;
    }
    
    .signup-prompt {
      margin-top: 40px;
    }
  }
`;