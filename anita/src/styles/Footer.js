export const footerStyles = `
  .footer {
    background-color: rgba(229, 231, 235, 1);
    width: 100%;
  }

  .footer-container {
    display: flex;
    flex-direction: column;
    padding: 103px 74px;
    max-width: 1440px;
    margin: 0 auto;
  }

  .footer-logo {
    aspect-ratio: 4.55;
    object-fit: contain;
    object-position: center;
    width: 323px;
    max-width: 100%;
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
  display: flex;
  justify-content: space-between; 
  gap: 20px; 
  align-items: 
  }

  
  .footer-column {
  display: flex;
  flex-direction: column;
  gap: 10px; 
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .footer-link {
    color: rgba(52, 72, 91, 1);
    font: 700 40px PT Sans, sans-serif;
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

  .footer-column-social {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Adds spacing between the title and icons */
  align-items: flex-start; /* Aligns the community section to the start */
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
  gap: 20px; /* Adds spacing between the social icons */
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
      margin: 0 10px;
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