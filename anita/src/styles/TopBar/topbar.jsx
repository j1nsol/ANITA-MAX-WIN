export const styles = `
  .top-bar {
    position: fixed;
    background-color: rgba(229, 231, 235, 1);
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 100%;
    gap: 40px 100px;
    flex-wrap: wrap;
    padding: 8px 0px;
    align-items: center;
    z-index: 1000;
  }

  @media (max-width: 991px) {
    .top-bar {
      max-width: 100%;
      padding: 0 20px;
    }
  }

  .logo {
    aspect-ratio: 4.55;
    object-fit: contain;
    object-position: center;
    width: 323px;
    margin-left: 90px;
    max-width: 100%;
  }

  .auth-buttons {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
    flex: 1;
    flex-direction: row;
    margin: 0 0 0 0;
    padding: 0 30px 0 50px;
  }

  @media (max-width: 991px) {
    .auth-buttons {
      padding: 0 20px;
    }
  }

  @media (max-width: 640px) {
    .auth-buttons {
      justify-content: center;
      margin: 0 20px;
    }
  }

  .auth-button {
    align-self: stretch;
    border-radius: 5px;
    height: 57px;
    width: 120px;
    text-align: center;
    margin: auto 0;
    padding: 16px 14px;
    cursor: pointer;
    border: none;
    color: #fff;
    font-size: 16px;
    transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
    position: relative;
  }

  .auth-button:focus {
    outline: 3px solid #4A90E2;
    outline-offset: 2px;
  }

  .auth-button:focus:not(:focus-visible) {
    outline: none;
  }

  .auth-button.pressed {
    transform: scale(0.98);
  }

  .signup {
    background-color: rgba(35, 52, 60, 1);
  }

  .signin {
    background-color: rgba(53, 152, 219, 1);
  }

  .signup:hover {
    background-color: rgba(45, 62, 70, 1);
  }

  .signin:hover {
    background-color: rgba(63, 162, 229, 1);
  }

  @media (prefers-reduced-motion: reduce) {
    .auth-button {
      transition: none;
    }
  }

  @media screen and (forced-colors: active) {
    .auth-button {
      border: 2px solid currentColor;
    }
  }
 .html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
`;