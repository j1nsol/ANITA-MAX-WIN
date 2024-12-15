import React, { useState, useEffect } from 'react';
import './Hilo.css';

const HiloCardGame = () => {
  // Game State
  const [currentCard, setCurrentCard] = useState(Math.floor(Math.random() * 13) + 1);
  const [previousCard, setPreviousCard] = useState(null);
  const [balance, setBalance] = useState(1000);
  const [wins, setWins] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [isMuted, setIsMuted] = useState(false);

  const backgroundMusic = new Audio('audio/background.mp3');
  backgroundMusic.loop = true;

  useEffect(() => {
    if (!isMuted) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  }, [isMuted]);

  // Helper functions
  const getNextCard = () => Math.floor(Math.random() * 13) + 1;

  const updateHistory = (result) => {
    const currentDate = new Date().toLocaleString();
    setHistory([
      ...history,
      { date: currentDate, bet: betAmount, result, balance },
    ]);
  };

  const handleGuess = (guess) => {
    if (betAmount <= 0) {
      setMessage('Please place a bet first.');
      return;
    }

    const nextCard = getNextCard();
    const correct =
      (guess === 'higher' && nextCard > currentCard) ||
      (guess === 'lower' && nextCard < currentCard);

    setPreviousCard(currentCard);
    setCurrentCard(nextCard);

    if (correct) {
      const winnings = betAmount * 2;
      setBalance(balance + winnings);
      setWins(wins + 1);
      setMessage(`Correct! You won $${winnings}.`);
      updateHistory('Win');
    } else {
      setBalance(balance - betAmount);
      setMessage(`Wrong! You lost $${betAmount}.`);
      updateHistory('Lose');
    }

    setBetAmount(0);
  };

  const handlePlaceBet = () => {
    if (balance <= 0) {
      setMessage('Out of balance! You cannot place any bets.');
      return;
    }

    if (betAmount <= 0 || betAmount > balance) {
      setMessage('Invalid bet amount.');
      return;
    }

    setBalance(balance - betAmount);
    setMessage(`Bet of $${betAmount} placed!`);
  };

  const handleSkip = () => {
    const nextCard = getNextCard();
    setPreviousCard(currentCard);
    setCurrentCard(nextCard);
    setMessage(`You skipped! The next card was ${nextCard}.`);
  };

  return (
    <div className="container">
      <div className="left-container">
        <div className="bet-info-container">
          <h3>HISTORY</h3>
          <ul>
            {history.map((entry, index) => (
              <li key={index}>
                Date: {entry.date}, Bet: ${entry.bet}, Result: {entry.result}, Balance: ${entry.balance}
              </li>
            ))}
          </ul>
        </div>

        <div className="top-containers">
          <div className="balance-container">
            <h3>Balance</h3>
            <p id="balance">${balance}</p>
          </div>
          <div className="wins-container">
            <h3>Wins</h3>
            <p id="wins">{wins}</p>
          </div>
        </div>

        <div className="betting-container">
          <p>Place Your Bet:</p>
          <select onChange={(e) => setBetAmount(parseInt(e.target.value, 10))} value={betAmount}>
            {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((amount) => (
              <option key={amount} value={amount}>
                {amount}
              </option>
            ))}
          </select>
          <button onClick={handlePlaceBet}>Place Bet</button>
          <p className="message">{message}</p>
        </div>

        <div className="setting-container">
          <button onClick={() => setIsMuted(!isMuted)} className="mute-button">
            <img
              src={`images/${isMuted ? 'unmute.png' : 'mute.png'}`}
              alt={isMuted ? 'Unmute' : 'Mute'}
            />
          </button>
        </div>
      </div>

      <div className="game-container">
        <h1>Hi-Lo Card Game</h1>
        <div className="card-layout">
          <button onClick={() => handleGuess('lower')} className="side-button">
            <img src="./images/down.png" alt="Lower" />
          </button>
          <div className="card-container">
            {previousCard && (
              <img src={`./images/${previousCard}.png`} alt={`Card ${previousCard}`} />
            )}
            <img src={`./images/${currentCard}.png`} alt={`Card ${currentCard}`} />
          </div>
          <button onClick={() => handleGuess('higher')} className="side-button">
            <img src="./images/up.png" alt="Higher" />
          </button>
          <button onClick={handleSkip}>Skip</button>
        </div>
      </div>
    </div>
  );
};

export default HiloCardGame;
