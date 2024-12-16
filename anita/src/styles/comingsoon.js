export const styles = `
  .coming-soon-container {
    display: flex;
    flex-direction: column;
    color: rgba(33, 51, 53, 1);
    justify-content: start;
    font: 700 128px Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
  }

  .banner-wrapper {
    background-color: rgba(57, 153, 218, 1);
    overflow: hidden;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 1px;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 1193px;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding: 462px 70px;
  }

  .background-image {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  .announcement-text {
    position: relative;
    align-self: stretch;
    margin-bottom: -92px;
    gap: 10px;
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

  @media (max-width: 991px) {
    .coming-soon-container {
      font-size: 40px;
    }
    
    .banner-wrapper {
      max-width: 100%;
      font-size: 40px;
    }
    
    .content-wrapper {
      max-width: 100%;
      font-size: 40px;
      padding: 100px 20px;
    }
    
    .announcement-text {
      max-width: 100%;
      font-size: 40px;
      margin-bottom: 10px;
    }
  }
`