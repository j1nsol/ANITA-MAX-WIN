import styled from 'styled-components';

export const LearningPlatformCard = ({ title, imageSrc, backgroundGradient }) => {
  return (
    <CardWrapper backgroundGradient={backgroundGradient}>
      <CardContent>
        <PlatformTitle>{title}</PlatformTitle>
        <PlatformImage 
          loading="lazy"
          src={imageSrc} 
          alt={`${title} platform`}
        />
      </CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled.article`
  border-radius: 15px;
  box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.25);
  min-width: 240px;
  display: flex;
  overflow: hidden;
  flex-grow: 1;
  width: 338px;
  margin: auto 0;
  background: ${({ backgroundGradient }) => backgroundGradient || 'linear-gradient(to top, #ffffff, #f0f0f0)'};
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover transition */

  &:hover {
    transform: scale(1.1); /* Scale effect on hover */
    box-shadow: 8px 8px 12px rgba(0, 0, 0, 0.35); /* Enhanced shadow for hover */
  }

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;


const CardContent = styled.div`
  border-radius: 15px;
  position: relative;
  min-height: 268px;
  min-width: 420px;
  width: 423px;
  padding: 27px 14px;

  
  @media (max-width: 991px) {
    padding-right: 20px;
  }
`;

const PlatformTitle = styled.h2`
  color: rgb(34, 51, 58);
  font-family: 'Alexandria', sans-serif;
  font-size: 32px;
  font-weight: 700;
  position: relative;
  z-index: 10;
`;

const PlatformImage = styled.img`
  position: absolute;
  right: 32px;
  top: 49px;
  width: 200px;
  height: auto;
  z-index: 0;
`;
