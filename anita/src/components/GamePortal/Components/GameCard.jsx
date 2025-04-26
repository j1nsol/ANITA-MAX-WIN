import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GameCard = ({ title, playerCount, imageSrc, backgroundGradient, link }) => {
  return (
    <CardWrapper backgroundGradient={backgroundGradient}>
      <StyledLink to={link}>
        <PlayerCount>
          <PlayerCountInner>
            <PlayerIcon 
              loading="lazy"
              src="/icons/player.svg"
              alt="Active players"
            />
            <Count>{playerCount}</Count>
          </PlayerCountInner>
        </PlayerCount>
        <GameContent>
          <GameImage 
            loading="lazy"
            src={imageSrc}
            alt={`${title} game`}
          />
          <GameTitle>{title}</GameTitle>
        </GameContent>
      </StyledLink>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  position: relative; /* Ensure the card is positioned relative for z-index to work */
  border-radius: 15px;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
  min-height: 415px;
  min-width: 301px;
  max-width: 301px;
  display: flex;
  flex-direction: column;
  overflow: visible; /* Allow hover effects to extend outside the card */
  background: ${({ backgroundGradient }) => backgroundGradient || 'linear-gradient(to top, #ffffff, #f0f0f0)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for scaling and shadow */
  cursor: pointer; /* Change cursor to pointer to indicate it's clickable */
   margin: 0 80px;

  &:hover {
    transform: scale(1.1); /* Scales the card to 1.1 times */
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.35); /* Enhances shadow for hover effect */
    z-index: 10; /* Brings the card to the front on hover */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const PlayerCount = styled.div`
  border-radius: 10px;
  background-color: rgba(34, 51, 59, 0.6);
  align-self: flex-end;
  min-height: 28px;
  width: 74px;
  padding: 1px 8px;
  margin-right: 10px;
`;

const PlayerCountInner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PlayerIcon = styled.img`
  width: 15px;
  height: 19px;
`;

const Count = styled.span`
  color: #fff;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
`;

const GameContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  text-align: center;
`;

const GameImage = styled.img`
  width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const GameTitle = styled.h2`
  color: #fff;
  font-family: 'Alexandria', sans-serif;
  font-size: 40px;
  font-weight: 700;
`;