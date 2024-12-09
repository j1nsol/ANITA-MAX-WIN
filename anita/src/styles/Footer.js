export const footerStyles = `
  .footer {
    background-color: rgba(229, 231, 235, 1);
    width: 100%;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    padding: 70px 74px;
    max-width: 1440px;
    width: 1925px;
    height: 300px;
    flex-shrink: 0;
    margin: 0 auto;
  }

  .footer-logo {
    flex: 0; 
    margin-right: 20px; 
    max-width: 150px; 
  }

  .copyright {
    color: rgba(52, 72, 91, 1);
    align-self: start;
    margin: 8px 0 0 29px;
    font: 700 20px PT Sans, sans-serif;
  }

  .footer-divider {
    width: 100%;
    max-width: 1723px;
    margin: 32px 0 0 26px;
    border: none;
    height: 1px;
    background: rgba(52, 72, 91, 1);
  }

  .footer-content {
    align-self: end;
    width: 790px;
    max-width: 100%;
    margin: 39px 0 -23px;
  }

  .footer-columns {
    gap: 20px;
    justify-content: space-between;
    align-items: flex-start;
    display: flex;
  }

  .footer-column-social {
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    line-height: normal;
    width: 61%;
    margin-top: 30px;
    gap: 20px;
  }

  .footer-column-social,
  .footer-column {
    flex: 1; 
    min-width: 200px;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
  }

  .footer-link {
    color: rgba(52, 72, 91, 1);
    font: 700 25px PT Sans, sans-serif;
    display: flex;
    width: 202px;
    height: 41px;
    justify-content: flex-end;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    display: block;
    margin-bottom: 38px;
    transition: color 0.3s ease;
  }

  .footer-link:hover,
  .footer-link:focus {
    color: rgba(52, 72, 91, 0.8);
    outline: none;
    text-decoration: underline;
  }

  

  .social-section {
    display: flex;
    width: 100%;
    flex-direction: column;
  }

  .social-title {
    color: rgba(52, 72, 91, 1);
    margin: 0 11px 0 12px;
    font: 700 40px PT Sans, sans-serif;
  }

  .social-icons {
    display: flex;
    margin-top: 24px;
    gap: 10px;
    justify-content: space-between;
  }

  .social-icon-link {
    display: block;
    transition: transform 0.3s ease;
  }

  .social-icon-link:hover,
  .social-icon-link:focus {
    transform: scale(1.1);
    outline: none;
  }

  .social-icon {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 67px;
  }

  @media (max-width: 991px) {
    .footer-container {
      padding: 0 20px 100px;
    }

    .copyright {
      margin-left: 10px;
    }

    .footer-content {
      margin: 0 10px 10px 0;
    }

    .footer-columns {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }

    .footer-column,
    .footer-column-social {
      width: 100%;
      margin-left: 0;
    }

    .social-title {
      margin-bottom: 10px;
    }

    .social-section {
      margin-top: 40px;
    }
  }

  @media (max-width: 640px) {
    .footer {
      text-align: center;
    }

    .footer-container {
      align-items: center;
    }

    .copyright {
      align-self: center;
    }

    .footer-link {
      font-size: 32px;
    }

    .social-title {
      font-size: 32px;
    }

    .social-icons {
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .social-icon-link {
      transition: none;
    }
  }
`;