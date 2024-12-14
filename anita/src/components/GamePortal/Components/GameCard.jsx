import styled from 'styled-components';

export const GameCard = ({ title, playerCount, imageSrc }) => {
  return (
    <CardWrapper>
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
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  border-radius: 15px;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
  min-height: 415px;
  min-width: 301px;
  max-width: 301px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0;
  background: rgba(34, 51, 59, 0.1);
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
  margin-bottom: 30px;
`;

const GameTitle = styled.h2`
  color: #fff;
  font-family: 'Alexandria', sans-serif;
  font-size: 40px;
  font-weight: 700;
`;