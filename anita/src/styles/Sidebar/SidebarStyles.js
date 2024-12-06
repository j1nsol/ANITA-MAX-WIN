export const sidebarButtonStyles = `
  .sidebar-button {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  .sidebar-button:hover {
    transform: scale(1.1);
  }
  .sidebar-button:focus {
    outline: 2px solid #4A90E2;
    border-radius: 4px;
  }
  .sidebar-button-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const sidebarGroupStyles = `
  .sidebar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 13px;
  }
`;

export const sidebarStyles = `
  .sidebar {
    background-color: rgb(229, 231, 235);
    box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 31px 23px 293px;
    min-width: 114px;
    position:absolute;
  }

  .sidebar-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .sidebar-nav-icon {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 67px;
  }

  .sidebar-event-container {
    border-radius: 10px;
    background-color: rgb(201, 202, 203);
    display: flex;
    width: 68px;
    height: 68px;
    padding: 8px;
    align-items: center;
    justify-content: center;
  }

  .sidebar-event-icon {
    aspect-ratio: 0.98;
    object-fit: contain;
    object-position: center;
    width: 52px;
  }

  .sidebar-utility-container {
    border-radius: 10px;
    background-color: rgb(201, 202, 203);
    display: flex;
    min-height: 272px;
    margin: 31px 0 -59px;
    padding: 7px 3px;
    width: 68px;
  }

  .sidebar-utility-icon {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 52px;
  }

  @media (max-width: 640px) {
    .sidebar {
      margin-right: auto;
    }
  }

  @media (forced-colors: active) {
    .sidebar {
      border: 1px solid CanvasText;
    }
    .sidebar-event-container,
    .sidebar-utility-container {
      border: 1px solid CanvasText;
    }
  }
`;