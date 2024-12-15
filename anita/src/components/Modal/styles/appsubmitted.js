export const styles = `
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .sign-in-panel {
    border-radius: 10px;
    background-color: rgba(229, 231, 235, 1);
    position: relative;
    display: flex;
    max-width: 756px;
    flex-direction: column;
    color: rgba(34, 51, 58, 1);
    text-align: center;
    justify-content: start;
    width: 756px;
    height: 756px;
    padding: 186px 74px;
    font: 400 32px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .close-button {
    position: absolute;
    right: 47px;
    top: 39px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 1;
  }

  .close-icon {
    aspect-ratio: 1.08;
    object-fit: contain;
    object-position: center;
    width: 41px;
    height: 38px;
  }

  .status-img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 256px;
    align-self: center;
    z-index: 0;
    max-width: 100%;
  }

  .organize-event {
    align-self: stretch;
    flex: 1;
    margin-top: 10px;
    min-height: 88px;
    width: 100%;
    gap: 10px;
    padding: 0 10px 10px;
  }

  .status-divider {
    align-self: center;
    z-index: 0;
    display: flex;
    min-height: 28px;
    margin-top: 10px;
    gap: 10px;
  }

  @media (max-width: 991px) {
    .sign-in-panel {
      padding: 100px 20px;
    }
    .organize-event {
      max-width: 100%;
    }
  }
`;