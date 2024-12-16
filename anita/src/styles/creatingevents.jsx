import { createGlobalStyle } from 'styled-components';

export const EventFormStyles = createGlobalStyle`
  .event-container {
    overflow: hidden;
    display: flex;
    background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2Fe0421bcdc49848e9a0460ddd17b0d3f1);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    justify-content: center;
    padding: 199px 80px;
  }

  .event-frame {
    border-radius: 15px;
    background-color: rgba(214, 220, 231, 1);
    display: flex;
    margin-left: 58px;
    width: 715px;
    max-width: 100%;
    flex-direction: column;
    overflow: hidden;
    padding: 20px 30px;
  }

  .content-wrapper {
    display: flex;
    width: 100%;
    align-items: end;
    gap: 5px;
    font-family: Alexandria, sans-serif;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .event-details {
    display: flex;
    min-width: 240px;
    min-height: 176px;
    flex-direction: column;
    color: rgba(34, 51, 58, 1);
    font-weight: 400;
    width: 251px;
    padding: 0 6px;
  }

  .event-title {
    font-family: 16px PT Sans,sans-serif;
    color: rgba(34, 51, 58, 1);
    width: 100%;
    font-weight: 600;
  }

  .title-input-wrapper {
    display: flex;
    margin-top: 12px;
    width: 100%;
    flex-direction: column;
  }

  .title-input {
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    min-height: 43px;
    padding: 8px;
    border: 1px solid rgba(117, 117, 117, 1);
  }

  .org-name {
    font-weight: 600;
    color: rgba(34, 51, 58, 1);
    margin-top: 12px;
    width: 100%;
  }

  .date-picker {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-top: 12px;
  }

  .date-icon {
    aspect-ratio: 1;
    object-fit: contain;
    width: 24px;
  }

  .image-upload {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    font-weight: 600;
    width: 399px;
    margin: auto 0px auto 0px;
    overflow: hidden;
  }

  .upload-container {
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    display: flex;
    min-height: 177px;
    width: 98%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px dashed rgba(117, 117, 117, 1);
    margin
      width: 200px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
  object-fit: cover;
  }

  .uploaded-image-preview {
  width: 100%;
  height: 100%; /* Ensures it scales to the container dimensions */
  object-fit: fit; /* Maintains the aspect ratio and fits the image inside */
  border-radius: 5px; /* Optional: Rounds the corners */
  background-color: #f5f5f5; /* Optional: Adds a background color for contrast */
}

  .upload-content {
    border-radius: 5px;
    display: flex;
    max-width: 100%;
    gap: 3px;
    cursor: pointer;
    object-fit: cover;
  }

  .upload-prompt {
    display: flex;
    flex-direction: column;
    color: var(--Secondary_2, #868a88);
  }

  .upload-icon {
    aspect-ratio: 1.64;
    object-fit: contain;
    width: 77px;
    border-radius: 5px;
    align-self: end;
  }

  .browse-button {
    color: rgba(25, 175, 255, 1);
    align-self: end;
    margin-top: 50px;
  }

  .time-section {
    display: flex;
    width: 100%;
    align-items: end;
    font-family: Alexandria, sans-serif;
    font-weight: 600;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .time-picker {
    display: flex;
    min-width: 240px;
    align-items: center;
    gap: 30px;
    color: rgba(34, 51, 58, 1);
    justify-content: start;
    flex: 1;
  }

  .time-input-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }

  .time-inputs {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .time-value {
    border-radius: 4px;
    background-color: rgba(229, 231, 235, 1);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    width: 29px;
    height: 22px;
    text-align: center;
    border: none;
  }

  .time-period {
    border-radius: 4px;
    background-color: rgba(229, 231, 235, 1);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    width: 34px;
    height: 22px;
    border: none;
  }

  .location-section {
    display: flex;
    min-width: 240px;
    flex-direction: column;
    justify-content: start;
    flex: 1;
  }

  .location-input {
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    min-height: 24px;
    width: 94%;
    padding: 8px;
    border: 1px solid rgba(117, 117, 117, 1);
    margin-top: 1px;
  }

  .description-input {
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    margin-top: 19px;
    min-height: 307px;
    width: 97%;
    padding: 8px;
    border: 1px solid rgba(117, 117, 117, 1);
    resize: vertical;
  }

  .footer {
    display: flex;
    margin-top: 19px;
    width: 100%;
    align-items: center;
    gap: 40px;
    font-size: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .token-section {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Alexandria, sans-serif;
    color: rgba(34, 51, 58, 1);
    font-weight: 500;
  }

  .token-input {
    border-radius: 5px;
    background-color: rgba(229, 231, 235, 1);
    width: 56px;
    height: 26px;
    border: 1px solid rgba(0, 0, 0, 1);
    text-align: center;
  }

  .create-button {
    border-radius: 5px;
    background-color: var(--Secondary, #22333b);
    min-height: 37px;
    font-family: PT Sans, sans-serif;
    color: var(--Primary-scale-100, #fffbff);
    font-weight: 700;
    width: 100px;
    padding: 6px 21px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .create-button:hover {
    background-color: #2c424d;
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
    .event-container {
      padding: 100px 20px;
    }
    
    .event-frame {
      padding: 0 20px;
      margin-left: 0;
    }
    
    .upload-container {
      padding: 20px;
    }
    
    .description-input {
      min-height: 200px;
    }
    
    .time-picker {
      flex-direction: column;
      gap: 15px;
    }
  }
`;