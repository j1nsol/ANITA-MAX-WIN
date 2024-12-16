export const styles = `
.landing-page {
  background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2F94366f3f193545d4af5c1417f6233266);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: fixed; /* Ensures it covers the full viewport */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex; /* Enables flexbox for centering */
  flex-direction: column; /* Stacks children vertically */
  align-items: center; /* Centers children horizontally */
  justify-content: center; /* Centers children vertically */
  padding: 40px; /* Optional: padding for spacing */
  overflow: hidden; /* Ensures no overflow issues */
  z-index: -1; /* Keeps it behind other content */
}


  @media (max-width: 991px) {
    .landing-page {
      max-width: 100%;
      padding: 100px 20px;
    }
  }
  .event-frame {
    border-radius: 15px;
    background-color: rgba(214, 220, 231, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    margin-right: 75px;
    margin-bottom: 85px;
    padding: 45px 45px;
  }
  @media (max-width: 991px) {
    .event-frame {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .content-wrapper {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
  }
  @media (max-width: 991px) {
    .content-wrapper {
      max-width: 100%;
    }
  }
  .event-info-section {
    align-self: start;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: start;
    width: 552px;
    padding: 0 15px;
  }
  @media (max-width: 991px) {
    .info-section {
      max-width: 100%;
    }
  }
  .event-title {
    color: rgba(34, 51, 58, 1);
    font: 700 24px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .title {
      max-width: 100%;
    }
  }
  .subtitle {
    color: rgba(34, 51, 58, 1);
    margin-top: 20px;
    font: 700 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .subtitle {
      max-width: 100%;
    }
  }
  .description {
    color: rgba(34, 51, 58, 1);
    margin-top: 20px;
    font: 400 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .description {
      max-width: 100%;
    }
  }
  .requirements-header {
    display: flex;
    margin-top: 20px;
    width: 100%;
    gap: 10px;
    white-space: nowrap;
    justify-content: start;
    flex-wrap: wrap;
    font: 700 14px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }
  @media (max-width: 991px) {
    .requirements-header {
      max-width: 100%;
      white-space: initial;
    }
  }
  .requirements-title {
    color: rgba(34, 51, 58, 1);
    align-self: start;
  }
  .requirement-item {
    display: flex;
    align-items: center;
    gap: 2px;
    color: rgba(57, 153, 218, 1);
    justify-content: center;
    height: 100%;
  }
  @media (max-width: 991px) {
    .requirement-item {
      white-space: initial;
    }
  }
  .requirement-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 10px;
    align-self: stretch;
    margin: auto 0;
  }
  .requirement-text {
    align-self: stretch;
    margin: auto 0;
  }
  .requirement-section {
    align-self: start;
    display: flex;
    margin-top: 20px;
    gap: 10px;
    justify-content: start;
  }
  @media (max-width: 991px) {
    .requirement-section {
      max-width: 100%;
    }
  }
  .icon-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    height: 100%;
    width: 24px;
  }
  .requirement-icon-large {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 24px;
    align-self: stretch;
    flex: 1;
    flex-basis: 0%;
    margin: auto 0;
  }
  .requirement-content {
    align-self: start;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    font-size: 14px;
    justify-content: start;
    width: 423px;
  }
  @media (max-width: 991px) {
    .requirement-content {
      max-width: 100%;
    }
  }
  .requirement-title {
    color: rgba(34, 51, 58, 1);
    font-family: Alexandria, sans-serif;
    font-weight: 400;
  }
  @media (max-width: 991px) {
    .requirement-title {
      max-width: 100%;
    }
  }
 .form-input,
.text-input {
  align-self: stretch;
  border-radius: 5px;
  background-color: rgba(229, 231, 235, 1);
  margin-top: 5px;
  min-height: 15px; /* Same height as the reason-textarea */
  max-width: 100%;
  width: 100%;
  gap: 10px;
  font-family: Roboto, sans-serif;
  color: rgba(128, 128, 128, 0.55);
  font-weight: 600;
  white-space: nowrap;
  padding: 10px; /* Padding for better alignment */
  border: 1px solid rgba(0, 0, 0, 1);
  box-sizing: border-box;
  resize: none;
}

  @media (max-width: 991px) {
    .form-input {
      white-space: initial;
    }
  }
  .form-section {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    justify-content: start;
    width: 588px;
    padding: 0 15px;
    gap: 10px;
  }
  @media (max-width: 991px) {
    .form-section {
      max-width: 100%;
    }
  }
  .input-group {
  display: flex;
  flex-direction: column;
  width: 100%; /* Match container width */
  max-width: 410px; /* Same as the reason input container */
  
}
  .input-label {
    color: rgba(34, 51, 58, 1);
    font-family: Alexandria, sans-serif;
    font-weight: 700;
  }
  .text-input {
    align-self: stretch;
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    margin-top: 5px;
    min-height: 26px;
    width: 100%;
    gap: 10px;
    font-family: Roboto, sans-serif;
    color: rgba(128, 128, 128, 0.55);
    font-weight: 600;
    white-space: nowrap;
    padding: 10px 14px;
    border: 1px solid rgba(0, 0, 0, 1);
  }
  @media (max-width: 991px) {
    .text-input {
      white-space: initial;
    }
  }
  .reason-section {
    display: flex;
    margin-top: 20px;
    width: 410px;
    max-width: 100%;
    align-items: start;
    gap: 15px;
    font-family: Alexandria, sans-serif;
    justify-content: start;
  }
  .reason-wrapper {
    display: flex;
    min-width: 240px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    flex-basis: 0%;
  }
  .reason-label {
    color: rgba(34, 51, 58, 1);
    font-weight: 700;
  }
  .reason-input-wrapper {
    display: flex;
    margin-top: 6px;
    width: 95%;
    align-items: center;
    gap: 12px;
    color: rgba(34, 51, 58, 0.5);
    font-weight: 400;
    justify-content: start;
  }
  .reason-input-container {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    flex-basis: 0%;
    margin: auto 0;
  }
  .reason-textarea {
    flex: 1;
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    min-height: 152px;
    width: 100%;
    gap: 10px;
    padding: 10px;
    border: 1px solid rgba(117, 117, 117, 1);
    font-family: Roboto, sans-serif;
    font-size: 14px;
    resize: vertical;
  }
  .upload-section {
    display: flex;
    margin-top: 20px;
    width: 394px;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
    font-weight: 700;
    justify-content: center;
  }
  .upload-button {
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--Secondary, #22333b);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
    background-color: var(--Secondary, #22333b);
    display: flex;
    min-height: 26px;
    width: 100%;
    max-width: 410px;
    gap: 8px;
    font-family: PT Sans, sans-serif;
    color: var(--Primary-scale-100, #fffbff);
    padding: 4px 10px;
    cursor: pointer;
    border: none;
  }
  @media (max-width: 991px) {
    .upload-button {
      padding: 0 20px;
    }
  }
  .button-content {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 13px;
    overflow: hidden;
    justify-content: center;
    margin: auto 0;
  }
  .button-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 18px;
    align-self: stretch;
    margin: auto 0;
  }
  .button-text {
    align-self: stretch;
    margin: auto 0;
  }
  .file-status {
    color: rgba(173, 174, 176, 1);
    font-family: Alexandria, sans-serif;
    margin-top: 5px;
  }
  .join-button {
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background: var(--Secondary_2, #868a88);
    background-color: var(--Secondary_2, #868a88);
    display: flex;
    min-height: 37px;
    width: 100px;
    max-width: 100%;
    gap: 8px;
    color: var(--Primary-scale-100, #fffbff);
    padding: 6px 16px;
    font: 700 20px PT Sans, sans-serif;
    border: none;
    cursor: pointer;
  }
  .join-button-content {
    align-self: stretch;
    display: flex;
    align-items: center;
    gap: 13px;
    overflow: hidden;
    justify-content: start;
    margin: auto 0;
  }
  .join-icon {
    aspect-ratio: 1.4;
    object-fit: contain;
    object-position: center;
    width: 21px;
    align-self: stretch;
    margin: auto 0;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;