import { createGlobalStyle } from 'styled-components';

export const CommunityEventStyles = createGlobalStyle`
  .community-events-container {
    display: flex;
    flex-direction: row;
    position: relative;
    min-height: 1108px;
    padding-bottom: 30px;
    background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfbfb01d41eab83aea3f5ce6f5d6%2F092fed06e8aa4934830279da89719e86);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-wrap: wrap;
  }

  .community-events-heading {
    color: #fdfdff;
    text-align: center;
    align-self: center;
    margin: 30px auto 0;
    font: 700 64px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .community-events-list {
    border-radius: 20px;
    background-color: #e5e7eb;
    display: flex;
    flex-direction: column;
    font-family: PT Sans, sans-serif;
    justify-content: center;
    overflow: auto;
    margin: 30px auto;
    padding: 54px 93px;
    width: 100%;
    max-width: 1038px;
  }

  .community-event-card {
    border-radius: 15px;
    background-color: #b8babe;
    display: flex;
    width: 100%;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 23px 42px;
    margin-bottom: 34px;
  }

  .community-event-content {
    display: flex;
    flex-direction: column;
  }

  .community-event-title {
    font-size: 32px;
    font-weight: 700;
    color: #34485b;
    margin: 0;
  }

  .community-event-meta {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 16px;
    color: #34485b;
    margin-top: 10px;
  }

  .community-event-icon {
    width: 32px;
    height: 32px;
  }

  .community-event-actions {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .community-event-attendees {
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 24px;
    color: #34485b;
  }

  .community-event-join {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #22333b;
    min-height: 37px;
    gap: 8px;
    font-size: 20px;
    color: #fffbff;
    font-weight: 700;
    width: 100px;
    padding: 6px 16px;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #2c424d;
    }

    &:focus {
      outline: 2px solid #4a90e2;
      outline-offset: 2px;
    }
  }

  .community-events-view-all {
    border-radius: 15px;
    background-color: #e67f22;
    padding: 23px 70px;
    text-align: center;
    color: #34485b;
    font-size: 32px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease;
    width: 100%;

    &:hover {
      background-color: #f48b2c;
    }

    &:focus {
      outline: 2px solid #4a90e2;
      outline-offset: 2px;
    }
  }

  @media (max-width: 991px) {
    .community-events-heading {
      max-width: 100%;
      font-size: 40px;
    }

    .community-events-list {
      margin-top: 40px;
      padding: 20px;
    }

    .community-event-card {
      padding: 20px;
    }
  }

  @media (max-width: 640px) {
    .community-events-list {
      margin: 0 auto;
    }

    .community-event-actions {
      width: 100%;
      justify-content: space-between;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .community-event-join,
    .community-events-view-all {
      transition: none;
    }
  }
`;