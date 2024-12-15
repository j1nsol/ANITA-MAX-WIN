import React, { useEffect, useState } from 'react';
import './MinesGame.css';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../../../firebase';
import { onAuthStateChanged } from 'firebase/auth';



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

  // Helper: Factorial function for combinatorial logic
  const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

  // Helper: Calculate binomial coefficient
  const binomialCoefficient = (n, k) =>
    factorial(n) / (factorial(k) * factorial(n - k));

  // Calculate multiplier dynamically
  const calculateMultiplier = () => {
    const safeCardsRemaining = totalCards - totalMines - revealedSafeCards;
    const totalCardsRemaining = totalCards - revealedSafeCards;
    if (safeCardsRemaining <= 0 || totalCardsRemaining <= 0) return 1;

    return (
      binomialCoefficient(safeCardsRemaining, 1) /
      binomialCoefficient(totalCardsRemaining, 1)
    );
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
    <div>
      <div id="sidebar">
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
        <button id="start-btn" onClick={startGame}>
          Start Game
        </button>
        <button id="cashout-btn" onClick={cashOut} disabled={!gameActive}>
          Cash Out
        </button>
        <div id="balance-container">
          <p>Current Tokens: <span id="token">{token}</span></p>
          <p>Amount Earned: <span id="earned">{earned}</span></p>
        </div>
      </div>
      <div id="game-container">
        <div className="card-container">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`card ${card.clicked ? (card.mined ? 'mine' : 'safe') : ''}`}
              style={card.style}
              onClick={() => handleCardClick(index)}
            >
              {card.clicked && card.content}
            </div>
          ))}
        </div>
      </div>
      {gameOver && (
        <div id="overlay">
          <div id="overlay-message">Game Over! You clicked a mine.</div>
          <button onClick={resetGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default MinesGame;
