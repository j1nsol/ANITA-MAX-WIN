import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { GameCard } from './Components/GameCard';
import { LearningPlatformCard } from './Components/LearningPlatform';
import { UserTopBar } from '../Topbar/UserTopBar';
import Sidebar from '../Sidebar/Sidebar';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const learningPlatforms = [
  { 
    title: 'Doulingo', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/8f29aeaf28da1e43c34220aa97159cabf4ff2f63182143edb9a948d25fc1e5cd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #AAFF9C 1%, #D6DCE7 60%)'
  },
  { 
    title: 'LeetCode', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/f23acec449a338022596cce1b7e9b68b4bdf31de827484d2202c78700e5d4c52?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #F1D28D 1%, #D6DCE7 60%)'
  },
  { 
    title: 'Quizizz', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/bb4a350dd85e118372822c6a4b107032321463f3b372470ce2ed325207c35ce3?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #EA82E1 1%, #D6DCE7 60%)'
  }
];

const games = [
  { 
    title: 'HiLo', 
    playerCount: '318', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/2d5a631c6a4369a2665d633b6215dd7b3d0474f11367fed39274471662a1ae2c?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&',
    backgroundGradient: 'linear-gradient(to top, #FF5E3E, #F89186, #FFCCCC)',
    link : '/games/hilo'
  },
  { 
    title: 'Fruity Bonanza', 
    playerCount: '394', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/9a76b988264afa59a85ed540c8b3a798c741732475359e2b1b2626ebddffb276?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #3EC8FF, #9CDBFF, #CCF6FF)',
    link : '/games/slot'
  },
  { 
    title: 'Chess', 
    playerCount: '400', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/d529ff4d6f071e7890cf355e13a979c55155856bd00406e4123e7ca58ae9a005?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #9645FF, #CBA3FF, #ECDDFF)',
    link : 'https://www.facebook.com/xyyjz'
  },
  { 
    title: 'Mines', 
    playerCount: '183', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/72992dd16b4bd468805530206c25a2076397bdcf78ea270d125cc8f3cfd9c6cf?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #CDBB48, #E5E083, #EAE9BD)',
    link : '/games/mines'
  },
  { 
    title: 'Tetris', 
    playerCount: '301', 
    imageSrc: 'https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7d53666a47eb33a0e96dbb762ef6b41e724734404a3f97933506bc7d1e700d32?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&', 
    backgroundGradient: 'linear-gradient(to top, #20EED3, #8AFDB8, #C5FFD7)',
    link : 'https://www.facebook.com/xyyjz'
  }
];

export function GamingPortal() {
  const sliderRef = React.useRef(null);

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <body>
      <UserTopBar/>
      <Sidebar/>
      <PortalWrapper>
        <PortalContent>
          <Background>
            <LearningSection>
              {learningPlatforms.map((platform, index) => (
                <LearningPlatformCard
                  key={index}
                  title={platform.title}
                  imageSrc={platform.imageSrc}
                  backgroundGradient={platform.backgroundGradient}
                />
              ))}
            </LearningSection>
            <GamesSection>
              <SectionHeader>
                <Title>MAXWIN Originals</Title>
                <LogoWrapper>
                  <Logo
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a764da91915be219eb94877b86fffe990fcae44c8b2e50fdb8d86dd150c6464e?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                    alt="Logo 2"
                    onClick={handlePrevClick}
                    style={{ cursor: 'pointer' }}
                  />
                  <Logo
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/57deac5d4c5203e13aafeecdaa32dbeaa52a22957196e9a52944cfe4b54b70d5?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                    alt="Logo 1"
                    onClick={handleNextClick}
                    style={{ cursor: 'pointer' }}
                  />
                </LogoWrapper>
              </SectionHeader>
              <StyledSlider ref={sliderRef} {...settings}>
                {games.map((game, index) => (
                  <GameCard
                    key={index}
                    title={game.title}
                    playerCount={game.playerCount}
                    imageSrc={game.imageSrc}
                    backgroundGradient={game.backgroundGradient}
                    link={game.link}
                  />
                ))}
              </StyledSlider>
            </GamesSection>
          </Background>
        </PortalContent>
      </PortalWrapper>
    </body>
  );
}

const PortalWrapper = styled.main`
  background-image: url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2Fe0421bcdc49848e9a0460ddd17b0d3f1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 42px 20px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: visible !important;
  }

  .slick-track {
    overflow: visible !important;
  }
`;

const PortalContent = styled.div`
  width: 1698px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Background = styled.div`
  min-height: 996px;
  width: 100%;
  max-width: 1698px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 11px 0 89px;
  
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LearningSection = styled.section`
  display: flex;
  min-height: 327px;
  width: 100%;
  max-width: 1804px;
  align-items: center;
  gap: 40px 155px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 100px;
  
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

const GamesSection = styled.section`
  margin-top: 51px;
  width: 1665px;
  max-width: 100%;
  padding: 100px;
  overflow: visible;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 20px;
  margin-bottom: 35px;
  position: relative;

  @media (max-width: 991px) {
    margin-bottom: -5px;
  }
`;

const Title = styled.h1`
  color: #fff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Alexandria', sans-serif;
  font-size: 36px;
  font-weight: 800;
  margin: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 0 20px;
  justify-content: flex-end;
`;

const Logo = styled.img`
  width: 74px;
  height: auto;
  border-radius: 15px;
  cursor: pointer;
`;

const GameGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: start;
  align-items: center;
  overflow: visible;
  position: relative;
`;