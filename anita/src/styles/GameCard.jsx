import { createGlobalStyle } from 'styled-components';

export const GameStyles = createGlobalStyle`
  .game-section {
    display: flex;
    flex-direction: column;
    position: relative;
    height: auto;
    padding-bottom: 30px;
    background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2Fe0421bcdc49848e9a0460ddd17b0d3f1);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .game-container {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 195px;
    margin: 100px auto;
  }

  .game-grid {
    gap: 20px;
    display: flex;
    @media (max-width: 991px) {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }

  .game-card {
    border-radius: 15px;
    background-color: rgba(214, 220, 231, 1);
    display: flex;
    width: 427px;
    flex-direction: column;
    min-height: 540px;
    margin: auto;
    padding: 20px 22px 55px 9px;
    @media (max-width: 991px) {
      max-width: 100%;
      padding-right: 20px;
    }
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 4px;
    color: rgba(34, 51, 58, 1);
    font: 40px Alexandria, sans-serif;
    padding: 0 10px;
  }

  .card-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 57px;
  }

  .card-title {
    font: 32px Alexandria, sans-serif;
    color: rgba(34, 51, 58, 1);
  }

  .card-description {
    color: rgba(34, 51, 59, 1);
    text-align: center;
    font: 20px PT Sans, sans-serif;
    margin-top: 25px;
  }

  .card-image {
    aspect-ratio: 1.23;
    object-fit: contain;
    object-position: center;
    width: 100%;
  }
`;

export default GameStyles;