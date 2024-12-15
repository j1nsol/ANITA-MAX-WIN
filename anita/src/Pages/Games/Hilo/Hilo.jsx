import React, { useState, useEffect } from 'react';
import './Hilo.css';

// Import the images
import cardBack from './images/back.png';
import downIcon from './images/down.png';
import upIcon from './images/Up.png';
import menuIcon from './images/set.png';
import muteIcon from './images/mute.png';
import unmuteIcon from './images/unmute.png';
import card1 from './images/1.png';
import card2 from './images/2.png';
import card3 from './images/3.png';
import card4 from './images/4.png';
import card5 from './images/5.png';
import card6 from './images/6.png';
import card7 from './images/7.png';
import card8 from './images/8.png';
import card9 from './images/9.png';
import card10 from './images/10.png';
import card11 from './images/11.png';
import card12 from './images/12.png';
import card13 from './images/13.png';

// Import the audio files
import winSound from './audio/win.mp3';
import loseSound from './audio/lose.mp3';
import backgroundMusic from './audio/background.mp3';

const cardImages = {
  1: card1,
  2: card2,
  3: card3,
  4: card4,
  5: card5,
  6: card6,
  7: card7,
  8: card8,
  9: card9,
  10: card10,
  11: card11,
  12: card12,
  13: card13,
};

const HiLoGame = () => {
  const [currentCard, setCurrentCard] = useState(Math.floor(Math.random() * 13) + 1);
  const [balance, setBalance] = useState(1000);
  const [wins, setWins] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [betHistory, setBetHistory] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState(true);

  const playMusic = () => {
    if (musicPlaying) {
      document.getElementById('background-music').play();
    } else {
      document.getElementById('background-music').pause();
    }
  };

  const toggleMute = () => {
    setMusicPlaying(!musicPlaying);
  };

  const updateCardImage = (cardValue, isCurrent = true) => {
    const cardElement = isCurrent ? 'current-card' : 'previous-card';
    const cardImage = cardImages[cardValue];  // Use the mapped card image
    document.getElementById(cardElement).src = cardImage;
    document.getElementById(cardElement).alt = `Card ${cardValue}`;
  };

  const getNextCard = () => Math.floor(Math.random() * 13) + 1;

  const updateBalanceAndWins = (wonAmount, lostAmount) => {
    const newBalance = balance + wonAmount - lostAmount;
    setBalance(newBalance);

    if (wonAmount > 0) {
      setWins(wins + 1);
    }
  };

  const addBetToHistory = (betAmount, result) => {
    const currentDate = new Date().toLocaleString();
    setBetHistory([
      ...betHistory,
      { date: currentDate, bet: betAmount, result, balance: balance },
    ]);
  };

  const handleGuess = (guess) => {
    if (betAmount <= 0) {
      setMessage("Please place a bet first.");
      return;
    }

    const nextCard = getNextCard();
    const correct =
      (guess === 'higher' && nextCard > currentCard) ||
      (guess === 'lower' && nextCard < currentCard);

    updateCardImage(currentCard, false);
    setCurrentCard(nextCard);
    updateCardImage(nextCard, true);

    if (correct) {
      const winnings = betAmount * 2;
      updateBalanceAndWins(winnings, 0);
      setMessage(`Correct! You won $${winnings}.`);
      addBetToHistory(betAmount, "Win");
      document.getElementById('win-sound').play();  // Play win sound
    } else {
      updateBalanceAndWins(0, betAmount);
      setMessage(`Wrong! You lost $${betAmount}.`);
      addBetToHistory(betAmount, "Lose");
      document.getElementById('lose-sound').play(); // Play lose sound
    }

    setBetAmount(0); // Reset betAmount after a round
  };

  const handleSkip = () => {
    const nextCard = getNextCard();
    updateCardImage(currentCard, false);
    setCurrentCard(nextCard);
    updateCardImage(nextCard, true);
    setMessage(`You skipped! The next card was ${nextCard}.`);
  };

  const placeBet = (selectedBetAmount) => {
    if (balance <= 0) {
      setMessage("Out of balance! You cannot place any bets.");
      return;
    }

    if (selectedBetAmount <= 0) {
      setMessage("Invalid bet. Please select a valid amount.");
      return;
    }

    if (selectedBetAmount > balance) {
      setMessage("Insufficient balance! You cannot bet more than your current balance.");
      return;
    }

    setBetAmount(selectedBetAmount);
    setBalance(balance - selectedBetAmount);
    setMessage(`Bet of $${selectedBetAmount} placed!`);
  };

  useEffect(() => {
    playMusic();
  }, [musicPlaying]);

  return (
    <div className="container">
      <div className="left-container">
        <div className="bet-info-container">
          <h3>HISTORY</h3>
          <ul>
            {betHistory.map((bet, index) => (
              <li key={index}>
                Date: {bet.date}, Bet: ${bet.bet}, Result: {bet.result}, Balance: ${bet.balance}
              </li>
            ))}
          </ul>
        </div>

        <div className="top-containers">
          <div className="balance-container">
            <h3>Balance</h3>
            <p>{balance}</p>
          </div>
          <div className="wins-container">
            <h3>Wins</h3>
            <p>{wins}</p>
          </div>
        </div>

        <div className="betting-container">
          <p>Place Your Bet:</p>
          <select onChange={(e) => placeBet(parseInt(e.target.value, 10))}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
            <option value="90">90</option>
            <option value="100">100</option>
          </select>
          <button onClick={() => placeBet(betAmount)}>Place Bet</button>
          <p>{message}</p>
        </div>

        <div className="setting-container">
          <button id="menu-button" className="main-button">
            <img src={menuIcon} alt="Menu" />
          </button>
          <button id="mute-button" className="mute-button" onClick={toggleMute}>
            <img src={musicPlaying ? unmuteIcon : muteIcon} alt="Mute" />
          </button>
        </div>
      </div>

      <div className="game-container">
        <h1>Hi-Lo Card Game</h1>

        <div className="card-layout">
          <button id="lower" className="side-button" onClick={() => handleGuess('lower')}>
            <img src={downIcon} alt="lower" />
          </button>

          <div className="card-container">
            <img
              id="current-card"
              src={cardImages[currentCard]} // Display the current card
              alt="Card"
            />
            <img id="previous-card" src={cardBack} alt="Previous Card" />
          </div>

          <button id="higher" className="side-button" onClick={() => handleGuess('higher')}>
            <img src={upIcon} alt="higher" />
          </button>

          <button id="skip" onClick={handleSkip}>Skip</button>
        </div>

        <audio id="win-sound" src={winSound} preload="auto"></audio>
        <audio id="lose-sound" src={loseSound} preload="auto"></audio>
        <audio id="background-music" src={backgroundMusic} preload="auto" loop></audio>
      </div>
    </div>
  );
};

export default HiLoGame;
