import css from 'styled-jsx/css';

export const portalStyles = css`
  .portal-container {
    background-color: rgba(57, 153, 218, 1);
    padding: 92px 80px;
    min-height: 100vh;
  }

  .learning-section {
    display: flex;
    gap: 155px;
    flex-wrap: wrap;
    margin-bottom: 51px;
  }

  .games-section {
    max-width: 1665px;
    margin: 0 auto;
  }

  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .section-title {
    color: #fff;
    font: 800 36px Alexandria, sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .header-icons {
    display: flex;
    gap: 20px;
  }

  .header-icon {
    width: 73px;
    height: 68px;
    border-radius: 15px;
  }

  .games-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 35px;
  }

  .learning-card {
    border-radius: 15px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
    min-width: 240px;
    flex-grow: 1;
    max-width: 338px;
    overflow: hidden;
    transition: transform 0.2s ease;
  }

  .learning-card:hover,
  .learning-card:focus-within {
    transform: translateY(-4px);
  }

  .learning-content {
    position: relative;
    min-height: 268px;
    padding: 27px 14px;
  }

  .learning-title {
    color: #22333A;
    font: 700 32px Alexandria, sans-serif;
    margin-bottom: 20px;
  }

  .learning-image {
    position: absolute;
    right: 32px;
    top: 49px;
    width: 200px;
    height: 169px;
    object-fit: contain;
  }

  .game-card {
    border-radius: 15px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
    min-width: 301px;
    max-width: 301px;
    min-height: 415px;
    padding: 17px 13px;
    background: rgba(255, 255, 255, 0.1);
    transition: transform 0.2s ease;
  }

  .game-card:hover,
  .game-card:focus-within {
    transform: translateY(-4px);
  }

  .game-stats {
    display: flex;
    justify-content: flex-end;
  }

  .player-count {
    background-color: rgba(34, 51, 59, 0.6);
    border-radius: 10px;
    padding: 1px 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font: 20px PT Sans, sans-serif;
  }

  .player-icon {
    width: 16px;
    height: 19px;
  }

  .game-content {
    margin-top: 42px;
    text-align: center;
  }

  .game-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
    margin-bottom: 30px;
  }

  .game-title {
    color: #fff;
    font: 700 40px Alexandria, sans-serif;
  }

  @media (max-width: 991px) {
    .portal-container {
      padding: 92px 20px;
    }

    .learning-section {
      gap: 40px;
    }

    .games-grid {
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .learning-card,
    .game-card {
      transition: none;
    }
  }

  @media screen and (forced-colors: active) {
    .learning-card,
    .game-card {
      border: 2px solid CanvasText;
    }
  }
`;