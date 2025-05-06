import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .dashboard-container {
    display: flex;
    padding: 20px 44px;
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }

  .header {
    display: flex;
    width: 100%;
    max-width: 1832px;
    align-items: center;
    gap: 40px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .logo-container {
    display: flex;
    min-width: 240px;
    align-items: center;
    justify-content: start;
    width: 301px;
  }

  .logo-image {
    aspect-ratio: 1.16;
    object-fit: contain;
    object-position: center;
    width: 102px;
    align-self: stretch;
    margin: auto 0;
    flex-shrink: 0;
  }

  .logo-text {
    aspect-ratio: 2.84;
    object-fit: contain;
    object-position: center;
    width: 199px;
    align-self: stretch;
    margin: auto 0;
    flex-shrink: 0;
  }

  .profile-container {
    display: flex;
    align-items: center;
    gap: 13px;
    font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    font-weight: 700;
  }

  .profile-name {
    margin: auto 0;
    width: 77px;
  }

  .profile-image {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 80px;
    border-radius: 50%;
    margin: auto 0;
    flex-shrink: 0;
  }

  .dashboard-content {
    margin-top: 20px;
    max-width: 100%;
    width: 1832px;
  }

  .title-container {
    width: 100%;
    max-width: 1832px;
  }

  .dashboard-title {
    font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 64px;
    color: rgba(0, 0, 0, 1);
    font-weight: 700;
  }

  .content-wrapper {
    margin-top: 100px;
    width: 100%;
  }

  .action-bar {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 40px 100px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .search-container {
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(0, 0, 0, 1);
    display: flex;
    padding: 18px 22px;
    align-items: center;
    gap: 15px;
    font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 24px;
    color: rgba(0, 0, 0, 1);
    font-weight: 500;
    flex-grow: 1;
  }

  .search-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 30px;
    flex-shrink: 0;
  }

  .add-tokens-button {
    border-radius: 20px;
    background-color: rgba(10, 10, 10, 1);
    min-height: 65px;
    padding: 12px 28px;
    font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 32px;
    color: #fffbff;
    font-weight: 700;
    border: none;
    cursor: pointer;
  }

  .stats-container {
    display: flex;
    min-width: 240px;
    margin: auto 0;
    align-items: center;
    gap: 13px;
    font-family: Alexandria, -apple-system, Roboto, Helvetica, sans-serif;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    justify-content: start;
    flex-wrap: wrap;
  }

  .stat-box {
    display: flex;
    margin: auto 0;
    padding: 1px 14px;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    width: 159px;
  }

  .stat-title {
    font-size: 18px;
    font-weight: 600;
  }

  .stat-value {
    font-size: 64px;
    font-weight: 700;
    margin-top: 10px;
  }

  .table-container {
    margin-top: 10px;
    width: 100%;
    font-family: PT Sans, -apple-system, Roboto, Helvetica, sans-serif;
    font-size: 32px;
    color: rgba(0, 0, 0, 1);
    font-weight: 700;
  }

  .user-table {
    border-radius: 20px;
    background-color: rgba(201, 202, 203, 0.5);
    min-height: 601px;
    width: 100%;
    padding-bottom: 20px;
  }

  .table-header {
    border-radius: 20px 20px 0 0;
    background-color: rgba(245, 245, 245, 1);
    min-height: 75px;
    text-align: center;
  }

  .header-cell {
    padding: 17px 28px;
    font-weight: 700;
  }

  .table-row-even {
    background-color: rgba(229, 229, 230, 1);
  }

  .table-row-odd {
    background-color: rgba(245, 245, 245, 1);
  }

  .table-cell {
    padding: 6px 28px;
    text-align: center;
  }

  .edit-button {
    color: #fffbff;
    text-shadow: 0px 4px 14px rgba(0, 0, 0, 0.45);
    border-radius: 5px;
    min-height: 63px;
    padding: 16px 28px;
    background-color: #22333b;
    border: none;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: 991px) {
    .dashboard-container {
      padding: 20px;
    }

    .header {
      max-width: 100%;
    }

    .dashboard-title {
      font-size: 40px;
    }

    .content-wrapper {
      margin-top: 40px;
    }

    .search-container {
      padding: 20px;
    }

    .add-tokens-button {
      padding: 20px;
    }

    .stat-value {
      font-size: 40px;
    }

    .table-container {
      max-width: 100%;
    }

    .header-cell,
    .table-cell {
      padding: 20px;
    }
  }
`;