import * as React from "react";
import { portalStyles } from "../../styles/GamePortal/GamePortalStyles";

function GamePortal() {
  const learningPlatforms = [
    { title: "Doulingo", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/386180a7cef0f9422ef823b267018c3269a4f68e22361faf5599213db04d4f79?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" },
    { title: "LeetCode", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/42b31e39ab2a7e0adaf9cb64d08a5b4729b7c3b987bc9d01b8d4e6f080660922?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" },
    { title: "Quizizz", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/caa1d8525b6b1bf1351cbc61554c66ba1540e8f11ee97dc6c7ca2b2e5f56fd9b?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" }
  ];

  const games = [
    { title: "HiLo", playerCount: "318", iconSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/d543d10c126dc1f32717345cab29857e3c92173037d12d17ba7ed0bf32c10993?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/573a5ea5ffba380d775f31472bcb332d2d20ffa4249309e867e4fe6288ca6394?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" },
    { title: "Fruity Bonanza", playerCount: "394", iconSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1a9163c6da313c49309c3120ca3464cc2032d17b0e529d0db8c11cc1b03b3eb0?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/93c657484a835d629382ff017b06493c73cd8e2a4113a2867e660b6b4829bed3?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" },
    { title: "Chess", playerCount: "400", iconSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/dc101a3a322845b954ea7658071beb47f723342655eb0122fb06a986b402a2af?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1342a12cfe5427fd06f94627dee3703eebf1a1decc21b5b354edb0752631c8a3?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" },
    { title: "Mines", playerCount: "183", iconSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/bb0dc64289eaadfec39e9ade5ea55b66d32cc1c968db03ee28cee4bcebaa12d0?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/2f1169651980f382c69d7a96b4434b26fc435d04426d26fe8b52b2a96f8aae90?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" },
    { title: "Tetris", playerCount: "301", iconSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1aa8b02eabf320826cf68fe9de0e12f2ef63882a1aec20eee41438de577a5f14?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&", imageSrc: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/792f963857c45aa2b07966434af7c50b3ff1a273dff665962778d39582953c55?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" }
  ];

  return (
    <main className="portal-container" role="main">
      <section className="learning-section" aria-label="Learning Platforms">
        {learningPlatforms.map((platform, index) => (
          <div 
            key={`learning-${index}`}
            className="learning-card"
            role="article"
            aria-label={`${platform.title} platform card`}
          >
            <div className="learning-content">
              <h3 className="platform-title">{platform.title}</h3>
              <img 
                src={platform.imageSrc} 
                alt={`${platform.title} platform logo`} 
                className="platform-image"
              />
            </div>
          </div>
        ))}
      </section>
      
      <section className="games-section" aria-label="MAXWIN Original Games">
        <div className="section-header">
          <h2 className="section-title">MAXWIN Originals</h2>
          <div className="header-icons" aria-hidden="true">
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/31e7691715972976d48b417f1635bea17b874451e17d26e0941f4cfa393fb06e?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" 
              alt="" 
              className="header-icon" 
            />
            <img 
              src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/1cf1e3729e9fb5877da0914c01c8a2b5cc1f5a7a852f2419ea395388a6c66622?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&" 
              alt="" 
              className="header-icon" 
            />
          </div>
        </div>

        <div 
          className="games-grid" 
          role="list" 
          aria-label="Games list"
        >
          {games.map((game, index) => (
            <div 
              key={`game-${index}`}
              className="game-card"
              role="listitem"
              aria-label={`${game.title} game card`}
            >
              <div className="game-stats">
                <div 
                  className="player-count"
                  aria-label={`${game.playerCount} active players`}
                >
                  <img 
                    src={game.iconSrc} 
                    alt="" 
                    className="player-icon"
                    aria-hidden="true"
                  />
                  <span className="count">{game.playerCount}</span>
                </div>
              </div>
              <div className="game-content">
                <img 
                  src={game.imageSrc} 
                  alt={`${game.title} game preview`} 
                  className="game-image"
                />
                <h3 className="game-title">{game.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <style jsx>{portalStyles}</style>
    </main>
  );
}

export default GamePortal;