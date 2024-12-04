import { createGlobalStyle } from 'styled-components';

export const AuthStyles = createGlobalStyle`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    position: relative;
    max-width: 90%;
    width: 600px;
    max-height: 90vh;
    overflow-y: auto;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .auth-container {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 45px 30px;
  }

  .header-wrapper {
    display: flex;
    gap: 20px;
    color: rgba(34, 51, 58, 1);
    text-align: center;
    flex-wrap: wrap;
    justify-content: space-between;
    font: 900 32px Roboto, sans-serif;
  }

  .close-icon {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    width: 41px;
    height: 41px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .close-icon img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .input-group {
    margin: 20px 0;
  }

  .form-input {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    color: rgba(128, 128, 128, 0.55);
    padding: 20px 19px;
    font: 600 24px Roboto, sans-serif;
    border: 1px solid rgba(104, 104, 104, 1);
    width: 100%;
    transition: border-color 0.3s ease;
  }

  .form-input:focus {
    outline: none;
    border-color: rgba(53, 152, 219, 1);
    box-shadow: 0 0 0 2px rgba(53, 152, 219, 0.2);
  }

  .checkbox-wrapper {
    align-self: center;
    display: flex;
    margin-top: 43px;
    width: 100%;
    max-width: 637px;
    gap: 23px;
    color: rgba(53, 152, 219, 1);
    flex-wrap: wrap;
    font: 600 20px Roboto, sans-serif;
  }

  .checkbox {
    border-radius: 5px;
    width: 23px;
    height: 23px;
    border: 1px solid rgba(104, 104, 104, 1);
    cursor: pointer;
  }

  .link-button {
    background: none;
    border: none;
    padding: 0;
    color: rgba(53, 152, 219, 1);
    font: inherit;
    cursor: pointer;
    text-decoration: underline;
  }

  .signup-button {
    width: 100%;
    border-radius: 10px;
    background-color: rgba(53, 152, 219, 1);
    margin-top: 42px;
    min-height: 64px;
    color: rgba(253, 255, 255, 0.9);
    text-align: center;
    padding: 18px 0;
    font: 800 24px Roboto, sans-serif;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .signup-button:hover {
    background-color: rgba(41, 128, 185, 1);
  }

  .signup-button:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(53, 152, 219, 0.4);
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
    font: 800 24px Roboto, sans-serif;
  }

  .social-login {
    align-self: center;
    display: flex;
    margin-top: 51px;
    align-items: center;
    gap: 40px 50px;
    justify-content: center;
    padding: 0 5px;
  }

  .social-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .social-button:hover {
    transform: scale(1.1);
  }

  .social-icon {
    width: 65px;
    height: 65px;
    object-fit: contain;
  }

  .footer {
    align-self: center;
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

  .footer-text {
    color: rgba(196, 197, 197, 1);
    font-weight: 600;
  }

  .footer-link {
    background: none;
    border: none;
    padding: 0;
    color: rgba(53, 152, 219, 1);
    font-weight: 800;
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .footer-link:hover {
    color: rgba(41, 128, 185, 1);
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
    .modal {
      width: 100%;
      height: 100%;
      max-height: 100vh;
      border-radius: 0;
    }

    .auth-container {
      height: 100%;
      border-radius: 0;
      padding: 20px;
    }

    .header-wrapper {
      max-width: 100%;
    }

    .form-input {
      max-width: 100%;
      margin: 40px 0 0;
      padding: 15px;
    }

    .checkbox-wrapper {
      max-width: 100%;
      margin-top: 40px;
      align-items: center;
      align-self: start;
    }

    .signup-button {
      margin: 40px 0 0;
    }

    .social-login {
      margin-top: 40px;
    }

    .footer {
      margin-top: 40px;
    }
  }

  @media (max-width: 640px) {
    .footer-text,
    .footer-link {
      font-size: 20px;
    }

    .social-icon {
      width: 50px;
      height: 50px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .social-button,
    .signup-button,
    .form-input,
    .footer-link {
      transition: none;
    }
  }
`;