import React from 'react';
import styles from '../styles/BreakImage.js';

export default function BreakImage() {
  return (
    <div
      className={styles.featurediv}
      style={{
        margin: "-5px -5px -5px -5px",
        padding: "0px",
        height: "400px", // Set the desired height of the div
        overflow: "hidden", // Ensure the image doesn't overflow the div
      }}
    >
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/3631e4e031e6d11d16b363adc0770837930dc2fadcb77a9cae366acb75e19d80?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
        className={styles.featureimg}
        alt="Feature background"
        style={{
          width: "100%", // Keep the image responsive
          height: "100%", // Make the image the same height as the div
          objectFit: "cover", // Ensure the image covers the div without distortion
        }}
      />
    </div>
  );
}
