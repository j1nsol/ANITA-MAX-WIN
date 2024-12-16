import React, { useState, useEffect } from 'react';
import './fruity.css';

const SlotMachine = () => {
  const [showRules, setShowRules] = useState(false);
  const [betValue, setBetValue] = useState(1.0);
  const [userTokens, setUserTokens] = useState(100);
  const [totalTumbleWin, setTotalTumbleWin] = useState(0);
  const [imageValues, setImageValues] = useState({});
  const baseImageValues = {
    'image2/1.png': { 6: 0.20, 7: 0.20, 8: 0.30, 9: 0.30 },
    'image2/2.png': { 6: 0.40, 7: 0.40, 8: 0.60, 9: 0.60 },
    'image2/3.png': { 6: 0.60, 7: 0.60, 8: 0.90, 9: 0.90 },
    'image2/4.png': { 6: 0.80, 7: 0.80, 8: 1.20, 9: 1.20 },
    'image2/5.png': { 6: 1.00, 7: 1.00, 8: 1.50, 9: 1.50 },
    'image2/6.png': { 6: 1.20, 7: 1.20, 8: 1.80, 9: 1.80 },
    'image2/7.png': { 6: 1.40, 7: 1.40, 8: 2.10, 9: 2.10 },
    'image2/8.png': { 6: 1.60, 7: 1.60, 8: 2.40, 9: 2.40 },
    'image2/9.png': { 6: 1.80, 7: 1.80, 8: 2.70, 9: 2.70 },
    'image2/10.png': { 5: 1000.00, 6: 2000.00, 7: 3000.00, 8: 5000.00 }
  };

  const updateImageValues = () => {
    const updatedValues = {};
    for (let image in baseImageValues) {
      updatedValues[image] = {};
      for (let matchCount in baseImageValues[image]) {
        updatedValues[image][matchCount] = baseImageValues[image][matchCount] * betValue;
      }
    }
    setImageValues(updatedValues);
  };

  useEffect(() => {
    updateImageValues();
  }, [betValue]);

  const handleSpin = () => {
    const spinSound = document.getElementById('spin-sound');
    spinSound.play();
    // Spin logic to be implemented here
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };

  const increaseBet = () => {
    setBetValue((prevBet) => {
      if (prevBet < 10.0) return prevBet + 1.0;
      if (prevBet >= 10.0 && prevBet < 100.0) return prevBet + 10.0;
      if (prevBet >= 100.0 && prevBet < 1000.0) return prevBet + 100.0;
      return prevBet;
    });
  };

  const decreaseBet = () => {
    setBetValue((prevBet) => {
      if (prevBet > 100.0) return prevBet - 100.0;
      if (prevBet > 10.0 && prevBet <= 100.0) return prevBet - 10.0;
      if (prevBet > 1.0 && prevBet <= 10.0) return prevBet - 1.0;
      return prevBet;
    });
  };

  return (
    <body className='fruitybody'>
    <div className="slot-machine">
      <div className="slot-grid">
        <img className="title" src="image2/FRUIT.webp" alt="FRUIT Bonanza Logo" />
        {[...Array(20)].map((_, index) => (
          <div className="slot" key={index}>
            <img
              src={`image2/${(index % 10) + 1}.png`}
              alt={`Slot Image ${(index % 10) + 1}`}
            />
          </div>
        ))}
        <button id="spin-button" onClick={handleSpin}>Spin</button>
      </div>

      <div id="jackpot-message" className="jackpot-message" style={{ display: 'none' }}>
        <img
          src="image2/ScatterTumble.webp"
          alt="Jackpot Image"
          id="jackpot-image"
          style={{ display: 'none' }}
        />
      </div>
      <div id="tumble-history" className="tumble-history"></div>
      <div id="win-amount" className="win-amount"></div>
      <div id="free-spin-message" className="free-spin-message"></div>

      <footer className="game-footer">
        <button id="game-rules" onClick={toggleRules}>i</button>
        <div id="Php">TOKEN {userTokens.toFixed(2)}</div>
        <div id="Bet">BET {betValue.toFixed(2)}</div>

        <button id="minus-btn" className="bet-btnminus" onClick={decreaseBet}>-</button>
        <button id="plus-btn" className="bet-btnplus" onClick={increaseBet}>+</button>

        <div id="Tumble">PLACE YOUR BETS!</div>
      </footer>

      {showRules && (
        <div id="rules-area">
          <h2>HOW TO PLAY</h2>
          <img
            src="image2/rules.webp"
            alt="Game Rules"
            id="rules-image"
            style={{ width: '100%', height: 'auto', border: '2px solid #ff5722' }}
          />
          <button id="close-rules-btn" onClick={toggleRules}>Close</button>
        </div>
      )}

      <audio id="spin-sound" src="sounds/spinsound.mp3" preload="auto"></audio>
    </div>
    </body>
  );
};

export default SlotMachine;
