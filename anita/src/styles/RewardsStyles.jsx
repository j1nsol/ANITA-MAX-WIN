import { createGlobalStyle } from 'styled-components';

export const RewardsStyles = createGlobalStyle`
  .rewards-container {
    background-color: rgb(229, 231, 235);
    width: 100%;
    padding: 0 5px 0 0px;
  }

  .rewards-content {
    gap: 20px;
    display: flex;
  }

  .rewards-image-column {
    flex-direction: column;
    line-height: normal;
    width: 37%;
    margin-left: 0;
    height: 400px;
  }

  .rewards-hero-image {
   aspect-ratio: 1.52;
  object-fit: contain;
  object-position: center;
  width: auto;
  height: 400px;
  align-self: stretch;
  margin: auto 0;
  overflow: visible;
  }

  .rewards-info-column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 63%;
    margin-left: 20px;
  }

  .rewards-info-wrapper {
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: 400px;
    width: 100%;
    font-family: PT Sans, sans-serif;
    font-weight: 700;
    padding: 0px 80px 0px 0;
    overflow: hidden;
  }

  .rewards-background {
    position: absolute;
    inset: 0;
    height: 400px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    overflow: hidden;
  }

  .rewards-heading {
    position: relative;
    color: rgb(34, 51, 59);
    font-size: 48px;
    text-align: center;
    align-self: start;
  }



  .rewards-cta {
    position: relative;
    align-self: center;
    border-radius: 5px;
    background-color: rgb(230, 127, 34);
    margin-top: 60px;
    min-height: 85px;
    gap: 8px;
    font-size: 32px;
    color: var(--Primary-scale-100, #fffbff);
    padding: 22px 28px;
    cursor: pointer;
    border: none;
  }

  @media (max-width: 991px) {
    .rewards-container {
      max-width: 100%;
      margin-right: -5px;
      padding-left: 20px;
    }

    .rewards-content {
      flex-direction: column;
      align-items: stretch;
      gap: 0;
    }

    .rewards-image-column {
      width: 100%;
    }

    .rewards-hero-image {
    width: auto;
    height: auto;
    max-height: 300px; /* Optional: constrain height on small devices */
  }

    .rewards-info-column {
      width: 100%;
    }

    .rewards-info-wrapper {
      max-width: 100%;
      margin-top: 40px;
      padding: 100px 0;
    }

    .rewards-heading {
      max-width: 100%;
      font-size: 40px;
    }

    .rewards-cta {
      margin-top: 40px;
      padding: 0 20px;
    }
  }
`;