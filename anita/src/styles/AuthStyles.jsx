import { createGlobalStyle } from 'styled-components';

export const AuthStyles = createGlobalStyle`
  /* Import PT Sans font */
  @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;600&display=swap');

  body {
    margin: 0;
    overflow: hidden; 
    font-family: 36px 'PT Sans', sans-serif; /* Apply PT Sans to body */
  
  }

  .overlay {
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
  }

  .modal {
    position: relative;
    width: 100%; 
    max-width: 500px; 
    max-height: 70vh;
    border-radius: 10px;
    padding: 20px; 
    font-family: 'PT Sans', sans-serif; /* Apply PT Sans to modal */
  }

  .auth-container {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px; /* Reduced padding */
    box-sizing: border-box; /* Ensure padding doesn't add to width */
    font-family: 'PT Sans', sans-serif; /* Apply PT Sans to auth container */
  }

 .header-wrapper {
  display: flex;
  gap: 20px;
  color: rgba(34, 51, 58, 1);
  text-align: center;
  justify-content: center;
  align-items: center;
  font: 16px 'PT Sans', sans-serif;
  margin-bottom: 20px;
  margin-top: 20px; /* Adjust this value to move the text further up or down */
}



  .close-icon {
    background: none;
    border: none;
    padding: 0;
    position: absolute;
    cursor: pointer;
    width: 40px;
    height: 40px;
    right: 40px;
    left:;
    display: flex;
    align-items: center;
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
  height: 24px;
  background-color: rgba(229, 231, 235, 1);
  color: rgba(128, 128, 128, 0.55);
  padding: 10px 20px; /* Padding for larger input fields */
  font: 800 18px 'PT Sans', sans-serif; /* Increased font size */
  border: 1px solid rgba(104, 104, 104, 1);
  width: 91%; /* Ensure the input takes full width of the container */
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
    margin-top: 10px;
    width: 100%;
    max-width: 637px;
    gap: 2px;
    color: rgba(53, 152, 219, 1);
    flex-wrap: wrap;
    font: 600 14px 'PT Sans', sans-serif; /* Apply PT Sans font here */
  }

  .checkbox {
    border-radius: 5px;
    width: 12px;
    height: 12px;
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
    color: rgba(255, 255, 255, 0.9);
    margin-top: 20px;
    height: 48px;
    text-align: center;
    font: 600 18px 'PT Sans', sans-serif; /* Apply PT Sans font here */
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .signup-button:hover {
    background-color: rgba(40, 128, 185, 1);
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
    font: 800 16px 'PT Sans', sans-serif; /* Apply PT Sans font here */
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
    width: 55px;
    height: 55px;
    object-fit: contain;
  }

  .footer {
    align-self: center;
    display: flex;
    margin-top: 40px;
    width: 425px;
    max-width: 100%;
    align-items: center;
    gap: 12px;
    text-align: center;
    justify-content: center;
    font: 16px 'PT Sans', sans-serif; /* Apply PT Sans font here */
  }

  .footer-text {
    color: rgba(34, 51, 58, 1);
    font-weight: 600;
  }

  .footer-link {
    background: none;
    border: none;
    padding: 0;
    color: rgba(53, 152, 219, 1);
    font: 16px 'PT Sans', sans-serif; /* Apply PT Sans font here */
    font-weight: 600;
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
      width: 100%; /* Full width on smaller screens */
      height: auto;
      max-height: 100vh;
      border-radius: 0; /* Remove radius for fullscreen modal */
      padding: 15px; /* Reduce padding */
    }

    .auth-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 10px;
      background-color: rgba(229, 231, 235, 1);
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 400px;
      padding: 20px;
      box-sizing: border-box;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .form-input {
      font-size: 20px; /* Adjust font size for smaller screens */
      padding: 10px;
    }

    .signup-button {
      font-size: 18px;
      padding: 12px;
    }

    .checkbox-wrapper {
      max-width: 100%;
      margin-top: 40px;
      align-items: center;
      align-self: start;
    }

    .social-login {
      margin-top: 20px;
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

