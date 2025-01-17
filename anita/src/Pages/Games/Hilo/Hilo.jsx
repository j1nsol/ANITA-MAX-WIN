import React, { useState, useEffect } from 'react';
import './Hilo.css';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { UserTopBar } from '../../../components/Topbar/UserTopBar';
import Sidebar from "../../../components/Sidebar/Sidebar";

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
  const [token, setToken] = useState(0);
  const [earned, setEarned] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [betAmount, setBetAmount] = useState(10);
  const [cards, setCards] = useState([]); // Track an array of cards
  const [gameOver, setGameOver] = useState(false);
  const [userId, setUserId] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [wins, setWins] = useState(0);
  const [betHistory, setBetHistory] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState(true);

  const playMusic = () => {
    if (musicPlaying) {
      document.getElementById('background-music').play();
    } else {
      document.getElementById('background-music').pause();
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        alert('Please sign in to play the game.');
        setUserId(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Fetch token from Firestore when user logs in
  useEffect(() => {
    const fetchTokenAndUpdateFirestore = async () => {
      if (userId !== null) {
        const userRef = doc(db, 'User', userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          setToken(userData.token); // Set the token state correctly
        } else {
          console.error('No user data found!');
        }
      }
    };

    fetchTokenAndUpdateFirestore();
  }, [userId]);

  // Update Firestore when token changes
  useEffect(() => {
    if (userId !== null && token !== 0) {
      const userRef = doc(db, 'User', userId);
      updateDoc(userRef, { token: token }) // Update token in Firestore
        .then(() => console.log("Token updated"))
        .catch((error) => console.error("Error updating token:", error));
    }
  }, [token, userId]);

  // Handle placing a bet
  const placeBet = (selectedBetAmount) => {
    if (selectedBetAmount <= 0 || selectedBetAmount > token) {
      setMessage('Invalid bet amount or insufficient balance.');
      return;
    }
    setBetAmount(selectedBetAmount);
    setMessage(`Bet of $${selectedBetAmount} placed!`);
  };

  // Handle card guessing
  const handleGuess = (guess) => {
    if (betAmount <= 0) {
      setMessage("Please place a bet before making a guess.");
      return;
    }

    if (betAmount > token) {
      setMessage("Insufficient balance! Adjust your bet.");
      return;
    }

    const nextCard = Math.floor(Math.random() * 13) + 1;
    const correct =
      (guess === 'higher' && nextCard > cards[cards.length - 1]) ||
      (guess === 'lower' && nextCard < cards[cards.length - 1]);

    // Deduct the bet amount and update tokens
    setToken((prevToken) => prevToken - betAmount);
    setCards((prevCards) => [...prevCards, nextCard]);

    if (correct) {
      const winnings = betAmount * 2;
      setToken((prevToken) => prevToken + winnings);
      setWins(wins + 1);
      setEarned(earned + winnings);
      setMessage(`Correct! You won $${winnings}`);
      document.getElementById('win-sound').play();
    } else {
      setMessage(`Wrong! You lost $${betAmount}`);
      setGameOver(true);
      document.getElementById('lose-sound').play();
    }

    // Add to bet history
    const currentDate = new Date().toLocaleString();
    setBetHistory((prevHistory) => [
      ...prevHistory,
      { date: currentDate, bet: betAmount, result: correct ? 'Win' : 'Lose', token },
    ]);
  };

  // Handle skip
  const handleSkip = () => {
    setMessage('You skipped the round!');
    setGameActive(false); // Disable further guesses for now
    setGameOver(false);   // Reset game over state
    setBetAmount(10);     // Reset bet amount to default
  
    // Add a new card to the cards array to simulate skipping the round
    const nextCard = Math.floor(Math.random() * 13) + 1; // Generate a new card
    setCards((prevCards) => [...prevCards, nextCard]);  // Add new card to the array
  };

  // Toggle music play
  const toggleMute = () => {
    setMusicPlaying((prev) => !prev);
  };

  useEffect(() => {
    playMusic();
  }, [musicPlaying]);

  return (
    <div className="hilobody">
      <UserTopBar />
      <Sidebar />
      <div className="container">
        <div className="left-container">
          <div className="bet-info-container">
            <h3>Bet History</h3>
            <ul>
              {betHistory.map((bet, index) => (
                <li key={index}>
                  Date: {bet.date}, Bet: ${bet.bet}, Result: {bet.result}, Balance: ${bet.token}
                </li>
              ))}
            </ul>
          </div>

          <div className="top-containers">
            <div className="balance-container">
              <h3>Current Tokens</h3>
              <p>{token.toFixed(2)}</p>
            </div>
            <div className="wins-container">
              <h3>Wins</h3>
              <p>{wins}</p>
            </div>
          </div>

          <div className="betting-container">
            <p>Select Your Bet:</p>
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
  {/* Display the most recent card */}
  <img
    id="current-card"
    src={cardImages[cards[cards.length - 1] || 1]} // Fallback to card 1 if no card is in array
    alt="Card"
  />

  {/* Show the previous card if available */}
  {cards.length > 1 && (
    <img
      id="previous-card"
      src={cardImages[cards[cards.length - 2]]}
      alt="Previous Card"
    />
  )}
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
    </div>
  );
};

export default HiLoGame;
