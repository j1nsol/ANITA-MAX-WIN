import React, { useEffect, useState } from 'react';
import './MinesGame.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { UserTopBar } from '../../../components/Topbar/UserTopBar';
import Sidebar  from '../../../components/Sidebar/Sidebar';
import logo from './logo.svg';

const MinesGame = () => {
  const [token, setToken] = useState(0);
  const [earned, setEarned] = useState(0);
  const [gameActive, setGameActive] = useState(false);
  const [minePositions, setMinePositions] = useState([]);
  const [totalMines, setTotalMines] = useState(5);
  const [betAmount, setBetAmount] = useState(10);
  const [cards, setCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [revealedSafeCards, setRevealedSafeCards] = useState(0);
  const [userId, setUserId] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const totalCards = 25;

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

  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  const binomialCoefficient = (n, k) =>
    factorial(n) / (factorial(k) * factorial(n - k));

  const calculateMultiplier = () => {
    if (totalMines <= 0 || totalMines >= totalCards) return 1;

    const baseMultiplier = 0.1 + totalMines / (totalCards - totalMines);
    const riskFactor = 1 + revealedSafeCards * 0.05;

    return baseMultiplier * riskFactor;
  };

  const generateCards = () =>
    Array(totalCards)
      .fill(null)
      .map(() => ({
        clicked: false,
        mined: false,
        multiplier: 1,
        content: '',
        style: {},
      }));

  const generateMines = () => {
    const positions = new Set();
    while (positions.size < totalMines) {
      const randomPosition = Math.floor(Math.random() * totalCards);
      positions.add(randomPosition);
    }
    return Array.from(positions);
  };

  const updateFirestoreToken = async (amount) => {
    const userRef = doc(db, 'User', userId);
    try {
      await updateDoc(userRef, { token: amount });
    } catch (error) {
      console.error('Error updating Firestore token:', error);
    }
  };

  const handleCardClick = (index) => {
    if (!gameActive) {
      alert('Please click the start button to begin the game.');
      return;
    }
    if (cards[index].clicked) {
      alert('This card has already been clicked.');
      return;
    }

    if (minePositions.includes(index)) {
      const newCards = [...cards];
      newCards[index] = {
        ...newCards[index],
        clicked: true,
        mined: true,
        content: '💣',
        style: { backgroundColor: 'red' },
      };
      setCards(newCards);
      setGameOver(true);
      setGameActive(false);
      setEarned(0);

      setOverlayVisible(true);
      setTimeout(() => {
        setOverlayVisible(false);
        resetGame();
      }, 1000);
    } else {
      const newCards = [...cards];
      newCards[index] = {
        ...newCards[index],
        clicked: true,
        content: '💎',
        style: { backgroundColor: 'green' },
      };
      setCards(newCards);

      const multiplier = calculateMultiplier();
      setRevealedSafeCards((prev) => prev + 1);
      setEarned((prevEarned) => prevEarned + betAmount * multiplier);
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setMinePositions(generateMines());
    setEarned(0);
    setRevealedSafeCards(0);
    setGameOver(false);
  };

  const startGame = async () => {
    if (token < betAmount) {
      alert('Insufficient tokens to place the bet.');
      return;
    }

    if (totalMines < 1 || totalMines > 25) {
      alert('Please enter a valid number of mines (1-25).');
      return;
    }

    const newToken = token - betAmount;
    setToken(newToken);
    await updateFirestoreToken(newToken);
    resetGame();
    setGameActive(true);
  };

  const cashOut = async () => {
    const newToken = token + earned;
    setToken(newToken);
    await updateFirestoreToken(newToken);
    setEarned(0);
    setGameActive(false);
  };

  useEffect(() => {
    const fetchToken = async () => {
      const userRef = doc(db, 'User', userId);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        setToken(userSnap.data().token);
      } else {
        console.error('No user data found!');
      }
    };

    fetchToken();
    setCards(generateCards());
    setMinePositions(generateMines());
  }, [userId]);

  return (
    <body className='mines-body'>
      <UserTopBar />
      <Sidebar />
      <div classname="mines-main-container">
      <div className='mines-logo-container'>
        <img className="mines-logo" src={logo} alt="logo" />
      </div>
      <div className="mines-game-container">
        <div className="mines-sidebar">
          <h3>Set Number of Mines</h3>
          <div>
            <input
              type="number"
              min="1"
              max="25"
              value={totalMines}
              onChange={(e) => setTotalMines(parseInt(e.target.value))}
            />
            <p>Number of Mines</p>
            <input
              type="number"
              min="1"
              max={token}
              value={betAmount}
              onChange={(e) => setBetAmount(parseInt(e.target.value))}
            />
            <p>Bet Amount</p>
          </div>
          <button className="mines-start-btn" onClick={startGame}>
            Start Game
          </button>
          <button className="mines-cashout-btn" onClick={cashOut} disabled={!gameActive}>
            Cash Out
          </button>
          <div className="mines-balance-container">
            <p>Current Tokens: <span>{token.toFixed(2)}</span></p>
            <p>Amount Earned: <span>{earned.toFixed(2)}</span></p>
          </div>
        </div>
        <div className="mines-card-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`mines-card ${card.clicked ? (card.mined ? 'mine' : 'safe') : ''}`}
              style={card.style}
              onClick={() => handleCardClick(index)}
            >
              {card.clicked && (card.mined ? '💣' : '💎')}
            </div>
          ))}
        </div>
      </div>
      </div>
      {overlayVisible && (
        <div className="mines-overlay">
          <div className="mines-overlay-message">Game Over! You clicked a mine.</div>
        </div>
      )}
    </body>
  );
};

export default MinesGame;
