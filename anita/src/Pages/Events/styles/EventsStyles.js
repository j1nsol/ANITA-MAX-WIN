import { createGlobalStyle } from 'styled-components';

export const EventsGlobalStyles = createGlobalStyle`
 .events {
  background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2F94366f3f193545d4af5c1417f6233266);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; /* Ensures the image covers the entire screen */
  width: 100vw; /* Sets width to the full viewport width */
  height: 100vh; /* Sets height to the full viewport height */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  justify-content: start;
}


  .landing-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding: 132px 96px;
  }

  @media (max-width: 991px) {
    .landing-container {
      max-width: 100%;
      padding: 100px 20px;
    }
  }

  .search-controls {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(34, 51, 59, 0.68);
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 17px;
    font: 400 16px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  @media (max-width: 991px) {
    .search-controls {
      max-width: 100%;
    }
  }

  .search-bar {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    align-self: stretch;
    display: flex;
    min-width: 240px;
    align-items: start;
    gap: 30px;
    overflow: hidden;
    font-size: 32px;
    white-space: nowrap;
    width: 808px;
    margin: auto 0;
    padding: 12px 30px;
  }

  @media (max-width: 991px) {
    .search-bar {
      max-width: 100%;
      white-space: initial;
      padding: 0 20px;
    }
  }

  .search-icon {
    aspect-ratio: 1.03;
    object-fit: contain;
    object-position: center;
    width: 32px;
    margin-top: 4px;
  }

  .search-text {
    flex-basis: auto;
    flex-grow: 1;
    border: none;
    background: transparent;
    font-size: inherit;
    color: inherit;
    outline: none;
    width: 100%;
  }

  @media (max-width: 991px) {
    .search-text {
      max-width: 100%;
    }
  }

  .listbox {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    flex-direction: column;
    color: rgba(102, 102, 102, 1);
    justify-content: center;
    width: 261px;
    margin: auto 0;
    padding: 27px 0;
  }

  .listbox-inner {
    border-radius: 0px 0px 0px 0px;
    display: flex;
    width: 100%;
    max-width: 261px;
    flex-direction: column;
  }

  .listbox-content {
    border-radius: 8px;
    background-color: rgba(229, 231, 235, 1);
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 20px;
    justify-content: space-between;
    padding: 19px 17px;
    cursor: pointer;
  }

  .dropdown-icon {
    aspect-ratio: 1.83;
    object-fit: contain;
    object-position: center;
    width: 11px;
    margin: auto 0;
  }

  .create-event-btn {
    align-self: stretch;
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    min-height: 57px;
    gap: 10px;
    overflow: hidden;
    width: 166px;
    margin: auto 0;
    padding: 19px 0;
    border: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
    text-align: center;
    transition: background-color 0.2s;
  }

  .create-event-btn:hover {
    background-color: rgba(209, 211, 215, 1);
  }

  .create-event-btn:focus {
    outline: 2px solid #000;
    outline-offset: 2px;
  }

  .events-grid {
    display: flex;
    margin-top: 54px;
    max-width: 100%;
    width: 1600px;
    align-items: start;
    gap: 40px;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;
    height: 100%;
  }

  @media (max-width: 991px) {
    .events-grid {
      margin-top: 40px;
    }
  }

  .event-card {
    border-radius: 15px;
    background-color: rgba(214, 220, 231, 1);
    display: flex;
    min-width: 240px;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
    width: 572px;
    padding: 22px 30px 43px;s
    height: 430px;
    font: 500 24px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .event-header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .event-info {
    flex: 0 0 38%;
  }

  .event-title {
    font-size: 24px;
    font-weight: 700;
    color: rgba(34, 51, 58, 1);
    margin: 0;
    font: 500 24px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .event-organizer {
    font-size: 14px;
    margin: 12px 0 0;
    color: rgba(34, 51, 58, 1);
  }

  .event-image-wrapper {
    background-color: #ffffff;
height: 100px;
position: relative;
width: 400px;
border-radius: 10px;
  }

  .event-image {
    height: 100px;
object-fit: cover;
position: relative;
border-radius: 10px;
width: 400px;
  }

  .event-details {
    display: flex;
    gap: 31px;
    margin-top: 14px;
    flex-wrap: wrap;
  }

  .event-datetime,
  .event-location {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(34, 51, 58, 1);
    font-size: 14px;
  }

  .event-icon {
    width: 24px;
    height: 24px;
  }

  .event-description {
    margin: 13px 0 0;
    color: rgba(34, 51, 58, 1);
    font-size: 14px;
    line-height: 1.5;
  }

  .event-actions {
    display: flex;
    margin-top: 45px;
    gap: 20px;
    justify-content: space-between;
    max-width: 340px;
  }

  .join-button {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 6px 16px;
    border-radius: 5px;
    background-color: #22333b;
    border: none;
    color: #fffbff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .join-button:hover {
    background-color: #1a282f;
  }

  .join-button:focus {
    outline: 2px solid #fff;
    outline-offset: 2px;
  }

  .token-info {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(34, 51, 58, 1);
    font-size: 20px;
    font-weight: 500;
  }

  .token-icon {
    width: 50px;
    height: 46px;
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

export default EventsGlobalStyles;