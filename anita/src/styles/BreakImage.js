const styles = {
    featurediv: {
      position: 'relative',
      overflow: 'hidden', // Ensures the image is clipped if it overflows
      borderRadius: '15px', // Optional for rounded corners
      width: '100%',
      maxWidth: '427px',
      height: '100px', // Set a fixed height for the container
    },
    featureimg: {
      width: '50%',
      height: '50%',
      objectFit: 'cover', // Ensures the image covers the container while maintaining aspect ratio
    },
  };
  
  export default styles;
  