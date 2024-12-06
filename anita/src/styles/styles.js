export const styles = {
  heroSection: `
    position: relative;
    display: flex;
    min-height: 996px;
    padding-left: 90px;
    align-items: center;
    overflow: hidden;
    font-family: Alexandria, sans-serif;
    color: rgba(255, 255, 255, 1);
    justify-content: start;
    background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2F94366f3f193545d4af5c1417f6233266);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-left: -5px;
    @media (max-width: 991px) {
      padding: 0 20px;
    }
  `,
  contentWrapper: `
    align-self: stretch;
    display: flex;
    min-width: 240px;
    min-height: 556px;
    width: 983px;
    flex-direction: column;
    justify-content: center;
    margin: auto 0;
  `,
  heading: `
    font-size: 100px;
    font-weight: 700;
    @media (max-width: 991px) {
      max-width: 100%;
      font-size: 40px;
    }
  `,
  subheading: `
    font-size: 32px;
    font-weight: 500;
    font-family: 'PT Sans', sans-serif;
    @media (max-width: 991px) {
      max-width: 100%;
    }
  `,
  ctaButton: `
  align-self: flex-start;
  border-radius: 50px; /* Increased border radius to make the button more curved */
  background-color: rgba(230, 127, 34, 1);
  position: relative;
  z-index: 10;
  width: 400px;
  margin-top: 15px;
  gap: 8px;
  color: var(--Primary-scale-100, #fffbff);
  padding: 16px 25px;
  font: 700 32px PT Sans, sans-serif;
  cursor: pointer;
  border: none;
  @media (max-width: 991px) {
    margin-top: 20px;
    padding: 0 20px;
  }
`

};