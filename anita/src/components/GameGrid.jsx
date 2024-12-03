import React from 'react';
import GameCard from './GameCard';
import GameStyles from '../styles/GameCard';

const gameData = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/fa2a34f2c7dc6fbd5fabdc81ca0edce706598ac6eef2be2a7de3386be842f21a?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    title: "Casino",
    description: "Dive into our mini-games—play for fun, win for the community",
    image: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/55946b4279ea6f6acf2c59e37ff3ae46acd2efcbd8dd8ef3928211851ea01821?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    altText: "Casino gaming interface"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/7639607a7c5ccbe9b06c19e7f5f5bb74563ce92a4014595bedf590ea8ce0965e?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    title: "Sports",
    description: "Predict outcomes and win tokens",
    image: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/a218124059cddb546c9b4722b6babd4d04499f17ed0430bd0533b434138680ef?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    altText: "Sports betting interface"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/69624dd0b6f1a1127ec143c0905a3ee3dbc47288dfe489ff4a52efadbd6eb391?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    title: "Events",
    description: "Join our community events and activities",
    image: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/cf585a0e000432c5c6b70e8816a297cc2de9b4a904743d1a5e57c9ad38a7f34c?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    altText: "Community events showcase"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/8336b62d63cab82a3113c5a29d72399f70eb1175ebcbbd2284f93972558b09ed?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    title: "Learn",
    description: "Master new skills through interactive lessons",
    image: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/da2b5c16ae620ee4e84e56e9292e7267082daa53eddaa7ec8506cae3cf74c9bd?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    altText: "Learning platform interface"
  }
];

export const GameGrid = () => {
  return (
    <section className="game-section">
      <GameStyles />
      <div className="game-container">
        <div className="game-grid">
          {gameData.map((game, index) => (
            <GameCard
              key={`game-${index}`}
              icon={game.icon}
              title={game.title}
              description={game.description}
              image={game.image}
              altText={game.altText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGrid;