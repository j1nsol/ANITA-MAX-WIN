export const UserTopBarStyles = `
  .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    z-index:1000;
    top: 0;
  }
  
  .navigation-container {
    background-color: rgba(229, 231, 235, 1);
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    flex: 1;
    height: 60px;
    padding: 4px 0px;
    position: relative;
    z-index: 100;
  }
  
  .navigation-content {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    width: 100%;
    align-items: center;
    gap: 40px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: auto 0;
    padding: 0px 20px;
  }
  
  .navigation-logo {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    padding-left: 116px;
    align-items: center;
    justify-content: flex-start;
    margin: auto 0;
  }
  
  .navigation-logo-primary {
    aspect-ratio: 1.16;
    object-fit: contain;
    object-position: center;
    width: 102px;
    align-self: stretch;
    margin: auto 0;
  }
  
  .navigation-logo-secondary {
    aspect-ratio: 2.84;
    object-fit: contain;
    object-position: center;
    width: 199px;
    align-self: stretch;
    margin: auto 0;
  }
  
  .navigation-user {
    align-self: stretch;
    display: flex;
    min-width: 240px;
    gap: 40px 100px;
    width: 614px;
    margin: auto 0;
    font-family: 'PT Sans', sans-serif;
    font-weight: 700;
    font-size: 24px;
  }
  
  .navigation-user-info {
    display: flex;
    align-items: center;
    gap: 30px;
    color: rgba(35, 52, 60, 1);
    white-space: nowrap;
    justify-content: flex-start;
    padding: 0 20px;
  }
  
  .navigation-profile {
    align-self: stretch;
    display: flex;
    gap: 30px;
    width: 222px;
    margin: auto 0;
  }
  
  .navigation-profile-image {
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  
  .navigation-username {
    text-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
    margin: auto 0;
  }
  
  .navigation-balance {
    align-self: stretch;
    display: flex;
    gap: 20px;
    text-align: center;
    width: 135px;
    margin: auto 0;
  }
  
  .navigation-signout {
    color: rgba(34, 51, 58, 1);
    text-align: right;
    margin: auto 0;
    cursor: pointer;
    background: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0px 0px;
    border-radius: 4px;
    transition: background-color 0.2s ease;
  }

  .navigation-signout:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .navigation-signout:focus {
    outline: 2px solid rgba(34, 51, 58, 0.5);
    outline-offset: 2px;
  }
  
  @media (max-width: 991px) {
    .navigation-container {
      max-width: 100%;
      padding: 0 20px;
    }
    
    .navigation-content {
      max-width: 100%;
    }
    
    .navigation-user {
      max-width: 100%;
    }
    
    .navigation-user-info {
      white-space: initial;
    }
    
    .navigation-profile {
      white-space: initial;
    }
    
    .navigation-balance {
      white-space: initial;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .navigation-signout {
      transition: none;
    }
  }
`