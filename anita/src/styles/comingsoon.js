export const styles = `
  .coming-soon-section {
    background-color: rgba(57, 153, 218, 1);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: rgba(33, 51, 53, 1);
    font: 700 128px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 1080px;
    width: 100%;
    padding: 463px 70px 370px;
  }

  .background-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
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
    .coming-soon-section {
      font-size: 40px;
    }
    .content-wrapper {
      max-width: 100%;
      font-size: 40px;
      padding: 100px 20px 110px;
    }
  }
`