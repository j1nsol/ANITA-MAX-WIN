import React from 'react';

export const GameCard = ({ icon, title, description, image, altText }) => {
  return (
    <div className="game-card" role="article">
      <div className="card-header">
        <img src={icon} alt="" className="card-icon" />
        <h2 className="card-title">{title}</h2>
      </div>
      <div>
        <img src={image} alt={altText} className="card-image" />
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
};

export default GameCard;