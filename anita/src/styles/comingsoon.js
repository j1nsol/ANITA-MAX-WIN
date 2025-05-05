export const ComingSoonStyle = `
  .coming-soon-section {
    background: linear-gradient(to bottom,rgb(19, 145, 230),rgb(255, 255, 255));
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .content-wrapper {
    color: #ffffff;
    font-family: 'Alexandria', -apple-system, Roboto, Helvetica, sans-serif;
    font-weight: 700;
  }

  .title {
    font-size: 150px;
    margin: 0;
    color: white;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }

  .subtitle {
    font-size: 30px;
    margin-top: 20px;
    font-weight: 400;
    color: #003355;
  }

  @media (max-width: 991px) {
    .title {
      font-size: 48px;
    }

    .subtitle {
      font-size: 16px;
    }
  }
`;
