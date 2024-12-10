export const topbar = `
  .topbar {
    position: fixed;
    background-color: rgba(229, 231, 235, 1);
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    z-index: 1;
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 80px;
    position:fixed;
  }
  @media (max-width: 991px) {
    .topbar {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  @media (max-width: 640px) {
    .topbar {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
      padding: 80px 0 10px;
    }
  }
  .user-section {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(35, 52, 60, 1);
    white-space: nowrap;
    justify-content: start;
    margin-left: auto;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .user-section {
      white-space: initial;
    }
  }
  @media (max-width: 640px) {
    .user-section {
      width: 100%;
      justify-content: space-between;
    }
  }
  .profile-container {
    align-self: stretch;
    display: flex;
    gap: 10px;
    width: auto;
    min-width: fit-content;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .profile-container {
      white-space: initial;
    }
  }
  .profile-image {
    aspect-ratio: 1.01;
    object-fit: contain;
    object-position: center;
    width: 89px;
    height: 89px;
  }
  .username {
    flex-basis: auto;
    flex-grow: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: auto 0;
  }
  .balance-container {
    align-self: stretch;
    display: flex;
    gap: 10px;
    text-align: center;
    width: auto;
    min-width: 135px;
    flex-grow: 0;
    margin: auto 20px auto 0;
  }
  @media (max-width: 991px) {
    .balance-container {
      white-space: initial;
    }
  }
  .balance-amount {
    min-width: 40px;
    text-align: left;
  }
  .signout-button {
    color: rgba(34, 51, 58, 1);
    text-align: right;
    margin: auto 0;
    cursor: pointer;
    background: none;
    border: none;
    padding: 8px;
    transition: opacity 0.2s ease;
  }
  .signout-button:hover,
  .signout-button:focus {
    opacity: 0.8;
  }
  .signout-button:focus-visible {
    outline: 2px solid rgba(34, 51, 58, 1);
    outline-offset: 2px;
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
`