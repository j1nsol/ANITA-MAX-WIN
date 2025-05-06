export const footerStyles = `
  .footer {
    background-color: #e5e7eb;
    width: 100%;
    padding: 20px 0;
  }

  .footer-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .footer-columns {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .footer-brand {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .footer-brand-text {
    font: 700 28px PT Sans, sans-serif;
    color: #34485B;
  }

  .footer-logo {
    width: 250px;
    height: auto;
  }

  .footer-column {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  .footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
  }

  .footer-link {
    color: #34485B;
    font: 700 20px PT Sans, sans-serif;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-link:hover,
  .footer-link:focus {
    color: rgba(52, 72, 91, 0.8);
    text-decoration: underline;
    outline: none;
  }

  .footer-column-social {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
  }

  .social-title {
    font: 700 24px PT Sans, sans-serif;
    color: #34485B;
    margin: 0;
  }

  .social-icons {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
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
    width: 40px;
    height: 40px;
    object-fit: contain;
  }

  .copyright {
    text-align: center;
    color: #34485B;
    font: 700 16px PT Sans, sans-serif;
  }

  @media (max-width: 768px) {
    .footer-columns {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
    }

    .footer-column {
      justify-content: center;
    }

    .footer-column-social {
      align-items: center;
      text-align: center;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .social-icon-link {
      transition: none;
    }
  }
`;
