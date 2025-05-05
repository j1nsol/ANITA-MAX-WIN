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
    overflow-y: scroll;
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
  position: relative;
    border-radius: 15px;
    background-color: rgba(214, 220, 231, 1);
    display: flex;
    min-width: 240px;
    flex-direction: column;
    overflow: hidden;
    flex-grow: 1;
    width: 356px;
    height: 636px;
    max-width: 356px;
    max-height: 636px;
    transition: transform 0.3s ease;
    align-items: center;
    justify-conten: center;
    font: 500 24px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }
  
.event-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: inherit; /* Inherit the background image */
    background-size: cover;
    background-position: center;
    transition: filter 0.3s ease; /* Smooth transition for filter */
    z-index: 1; /* Place it behind the content */
}

.event-card:hover {
    transform: scale(1.05); /* Scale up on hover */
}

.event-card:hover::before {
    filter: blur(4px); /* Apply blur effect on hover */
}
.event-content {
display: flex;
width: 300px;
flex-direction: column;
z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    flex-direction: column;
  gap: 15px;
  justify-content: center;
    transform: translate(-50%, -50%); /* Center the content */
    text-align: center;
    opacity: 0; /* Initially hidden */
    transition: opacity 0.3s ease; /* Smooth transition for opacity */
}

.event-card:hover .event-content {
    filter: none;
    opacity: 1; /* Show content on hover */
    z-index: 2;
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
    color: #FFFFFF;
    margin: 0;
    font: 700 40px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
    text-shadow: 5px 2px 5px #00000080;  
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
    font-family: PT Sans;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
color: white;
text-shadow: 5px 5px 10px #00000080;



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
    font-family: PT Sans;
    font-weight: 700;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0%;
    vertical-align: middle;

    width: 100%;
  height: 50px;
  border-radius: 5px;
  padding-top: 10px;
  border-color: rgba(214, 220, 231, 1);
  padding-right: 28px;
  padding-bottom: 10px;
  padding-left: 28px;
  gap: 8px;
  center-items: center;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease; /* Smooth transition for button */
  }

  .join-button:hover {
    background-color: #1a282f;
    border-color: #1a282f;
    color: #ffffff;
    box-shadow: 0px 0px 10px 5px white;
  transform: scale(1.05);
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