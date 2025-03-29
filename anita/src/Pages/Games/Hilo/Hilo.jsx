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
  const [cards, setCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [userId, setUserId] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [wins, setWins] = useState(0);
  const [betHistory, setBetHistory] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [volume, setVolume] = useState(0.7); // Add volume state

  const playMusic = () => {
    const bgMusic = document.getElementById('background-music');
    const winSound = document.getElementById('win-sound');
    const loseSound = document.getElementById('lose-sound');
    
    [bgMusic, winSound, loseSound].forEach(audio => {
      audio.volume = volume;
    });

    if (musicPlaying) {
      bgMusic.play().catch(e => console.log("Autoplay prevented:", e));
    } else {
      bgMusic.pause();
    }
  };
  const renderSettings = () => (
    <div className="volume-control">
      <button onClick={toggleMute} className="mute-button">
        <img 
          src={musicPlaying ? unmuteIcon : muteIcon} 
          alt={musicPlaying ? "Mute" : "Unmute"} 
          style={{ width: '24px', height: '24px' }}
        />
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={volume}
        onChange={(e) => {
          const newVolume = parseFloat(e.target.value);
          setVolume(newVolume);
          if (newVolume === 0) {
            setMusicPlaying(false);
          } else if (!musicPlaying) {
            setMusicPlaying(true);
          }
        }}
        aria-label="Volume control"
      />
    </div>
  );
  
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

  useEffect(() => {
    const fetchTokenAndUpdateFirestore = async () => {
      if (userId !== null) {
        const userRef = doc(db, 'User', userId);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          setToken(userData.token);
        } else {
          console.error('No user data found!');
        }
      }
    };

    fetchTokenAndUpdateFirestore();
  }, [userId]);

  useEffect(() => {
    if (userId !== null && token !== 0) {
      const userRef = doc(db, 'User', userId);
      updateDoc(userRef, { token: token })
        .then(() => console.log("Token updated"))
        .catch((error) => console.error("Error updating token:", error));
    }
  }, [token, userId]);

  useEffect(() => {
    playMusic();
  }, [musicPlaying]);

  useEffect(() => {
    if (cards.length > 0) {
      setIsFlipped(true);
      const timer = setTimeout(() => {
        setIsFlipped(false);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [cards]);

  const placeBet = (selectedBetAmount) => {
    // Ensure bet stays within valid range
    const newBet = Math.max(10, Math.min(selectedBetAmount, token));
    
    if (newBet <= 0 || newBet > token) {
      setMessage('Invalid bet amount or insufficient balance.');
      return;
    }
    
    setBetAmount(newBet);
    setMessage(`Bet set to ${newBet}`);
  };

  const handleGuess = (guess) => {
    if (betAmount <= 0) {
      setMessage("Please place a bet before making a guess.");
      return;
    }
  
    if (betAmount > token) {
      setMessage("Insufficient balance! Adjust your bet.");
      return;
    }
  
    if (cards.length === 0) {
      // First card draw (no comparison needed)
      const firstCard = Math.floor(Math.random() * 13) + 1;
      setCards([firstCard]);
      setMessage("First card drawn! Make your guess for the next card.");
      return;
    }
  
    setIsFlipped(true);
  
    setTimeout(() => {
      const nextCard = Math.floor(Math.random() * 13) + 1;
      const currentCard = cards[cards.length - 1];
      const isEqual = nextCard === currentCard;
      
      setCards((prevCards) => [...prevCards, nextCard]);
      setIsFlipped(false);
  
      let newToken = token;
      let resultMessage = "";
      let result = "";
      let soundToPlay = null;
  
      if (isEqual) {
        // Cards are equal - no win or loss
        resultMessage = "Cards are equal! No change to your balance.";
        result = "Push";
      } else {
        const correct =
          (guess === 'higher' && nextCard > currentCard) ||
          (guess === 'lower' && nextCard < currentCard);
  
        if (correct) {
          const winnings = betAmount * 2;
          newToken = token + winnings;
          setWins(wins + 1);
          setEarned(earned + winnings);
          resultMessage = `Correct! You won ${winnings}`;
          result = "Win";
          soundToPlay = 'win-sound';
        } else {
          newToken = token - betAmount;
          resultMessage = `Wrong! You lost ${betAmount}`;
          result = "Lose";
          soundToPlay = 'lose-sound';
          setGameOver(true);
        }
      }
  
      setToken(newToken);
      setMessage(resultMessage);
      if (soundToPlay) document.getElementById(soundToPlay).play();
  
      const currentDate = new Date().toLocaleString();
      setBetHistory((prevHistory) => [
        ...prevHistory,
        { 
          date: currentDate, 
          bet: betAmount, 
          result: result, 
          token: newToken 
        },
      ]);
    }, 300);
  };
  const handleSkip = () => {
    setMessage('You skipped the round!');
    setGameActive(false);
    setGameOver(false);
    setBetAmount(10);
    const nextCard = Math.floor(Math.random() * 13) + 1;
    setCards((prevCards) => [...prevCards, nextCard]);
  };

  const toggleMute = () => {
    setMusicPlaying((prev) => !prev);
  };

  return (
    <div className="hilobody">
      <UserTopBar />
      <Sidebar />
      <div className="container">
        <div className="left-container">
        <div className="bet-info-container">
  <h3>Bet History</h3>
  <div className="bet-history-container">
    {betHistory.length > 0 ? (
      <table className="bet-history-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Bet</th>
            <th>Result</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {betHistory.map((bet, index) => (
            <tr key={index} className={bet.result === 'Win' ? 'win-row' : 'lose-row'}>
              <td>{bet.date}</td>
              <td>Php{bet.bet.toFixed(2)}</td>
              <td>{bet.result}</td>
              <td>Php{bet.token.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No bet history yet</p>
    )}
  </div>
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
  <div className="bet-adjust-container">
    <button 
      className="bet-adjust-button" 
      onClick={() => placeBet(Math.max(10, betAmount - 10))}
      disabled={betAmount <= 10}
    >
      -10
    </button>
    <span className="bet-display">Php{betAmount}</span>
    <button 
      className="bet-adjust-button" 
      onClick={() => placeBet(betAmount + 10)}
      disabled={betAmount + 10 > token}
    >
      +10
    </button>
  </div>
  <p>{message}</p>
</div>

          <div className="setting-container">
            <button id="menu-button" className="main-button">
              <img src={menuIcon} alt="Menu" />
            </button>
            <button id="mute-button" className="mute-button" onClick={toggleMute}>
              <img src={musicPlaying ? unmuteIcon : muteIcon} alt="Mute" />
            </button>
            {renderSettings()}
          </div>
        </div>

<div className="gradient-container">      

          <div className="card-layout">
            <button id="lower" className="side-button" onClick={() => handleGuess('lower')}>
              <img src={downIcon} alt="lower" />
            </button>

            <div className="card-flip-container">
              <div className={`card-flip ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front">
                  <img 
                    src={cards.length > 0 ? cardImages[cards[cards.length - 1]] : card1} 
                    alt="Current Card" 
                  />
                </div>
                <div className="card-back"></div>
              </div>
            </div>

            <button id="higher" className="side-button" onClick={() => handleGuess('higher')}>
              <img src={upIcon} alt="higher" />
            </button>

            {cards.length > 1 && (
              <img
                id="previous-card"
                src={cardImages[cards[cards.length - 2]]}
                alt="Previous Card"
                style={{
                  position: 'absolute',
                  right: '-100px',
                  width: '100px',
                  height: 'auto',
                  opacity: 0.8
                }}
              />
            )}

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