import React, { useEffect, useState } from 'react';
import './MinesGame.css';

const MinesGame = () => {
  const [balance, setBalance] = useState(500); // Starting balance
  const [earned, setEarned] = useState(0); // Amount earned
  const [gameActive, setGameActive] = useState(false); // Game state
  const [minePositions, setMinePositions] = useState([]); // Positions of mines
  const [totalMines, setTotalMines] = useState(5); // Number of mines
  const [cards, setCards] = useState([]); // Cards state (contains status like clicked, mined, etc.)
  const [gameOver, setGameOver] = useState(false); // Flag for game over state

  // Number of cards
  const totalCards = 25; // Fixed 5x5 grid

  // Create cards based on the state
  const generateCards = () => {
    return Array(totalCards).fill(null).map(() => ({
      clicked: false,
      mined: false,
      multiplier: 1,
      content: '',
      style: {}
    }));
  };

  // Function to generate random mine positions
  const generateMines = () => {
    const positions = new Set();
    while (positions.size < totalMines) {
      const randomPosition = Math.floor(Math.random() * totalCards);
      positions.add(randomPosition);
    }
    return Array.from(positions);
  };

  // Update the game state when a card is clicked
  const handleCardClick = (index) => {
    if (!gameActive) {
      alert("Please click the start button to begin the game.");
      return;
    }

    if (minePositions.includes(index)) {
      // If it's a mine, end the game and display the result
      const newCards = [...cards];
      newCards[index] = { ...newCards[index], clicked: true, mined: true, content: '💣', style: { backgroundColor: 'red' } };
      setCards(newCards);
      setGameOver(true); // Set game over state
      setGameActive(false); // End the game
      setEarned(0); // Reset earned balance since the player clicked on a mine
    } else {
      // Otherwise, mark the card as clicked and update earned amount
      const newCards = [...cards];
      newCards[index] = { ...newCards[index], clicked: true, content: '💎', style: { backgroundColor: 'green' } };
      setCards(newCards);

      // Calculate multiplier and update earned amount
      const multiplier = getMultiplier(totalMines);
      setEarned((prevEarned) => prevEarned + 10 * multiplier); // Add bet amount multiplied by the multiplier for a safe click
    }
  };

  // Update the balance and earned amount
  const updateBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  // Generate multipliers based on the number of mines
  const getMultiplier = (mineCount) => {
    const multipliers = Array.from({ length: totalCards }, (_, i) => (i + 1) * 0.05);
    return mineCount >= 1 && mineCount <= totalCards ? multipliers[mineCount - 1] : 1;
  };

  // Reset the game state
  const resetGame = () => {
    setCards(generateCards()); // Reset all cards
    setMinePositions(generateMines()); // Generate new mine positions
    setEarned(0); // Reset earned balance
    setGameOver(false); // Reset game over flag
  };

  // Start the game
  const startGame = () => {
    if (balance < 10) {
      alert("Insufficient balance to place the bet.");
      return;
    }

    if (totalMines < 1 || totalMines > 25) {
      alert("Please enter a valid number of mines (1-25).");
      return;
    }

    setBalance((prevBalance) => prevBalance - 10); // Deduct bet amount
    resetGame(); // Reset the game state
    setGameActive(true); // Set game state to active
  };

  // Cash out function
  const cashOut = () => {
    updateBalance(earned); // Add earned amount to the balance
    setEarned(0); // Reset earned balance
    setGameActive(false); // End the game
  };

  // Effect to initialize the game and reset everything on mount
  useEffect(() => {
    setCards(generateCards()); // Initialize cards
    setMinePositions(generateMines()); // Initialize mines
  }, []);

  // Effect to hide the overlay after a timeout when game is over
  useEffect(() => {
    if (gameOver) {
      setTimeout(() => {
        setGameOver(false); // Hide the overlay after 2 seconds
      }, 2000);
    }
  }, [gameOver]);

  return (
    <div>
      <div id="sidebar">
        <h3>Set Number of Mines</h3>
        <div>
          <input
            type="number"
            id="mine-input"
            min="1"
            max="25"
            value={totalMines}
            onChange={(e) => setTotalMines(parseInt(e.target.value))}
          />
          <p>Number of Mines</p>
          <input type="number" id="bet-input" min="1" max="25" value="10" disabled />
          <p>Bet Amount</p>
        </div>

        <button id="start-btn" onClick={startGame}>Start Game</button>
        <button id="cashout-btn" onClick={cashOut} disabled={!gameActive}>Cash Out</button>
        <div id="balance-container">
          <p>Current Balance: <span id="balance">{balance}</span></p>
          <p>Amount Earned: <span id="earned">{earned}</span></p>
        </div>
      </div>
      <div id="game-container">
        <div id="logo">
          <img src="assets/image/logo.svg" alt="MINES LOGO" />
        </div>
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
      <div id="overlay" style={{ display: gameOver ? 'flex' : 'none' }}>
        <div id="overlay-message">Game Over! You clicked a mine.</div>
        <button onClick={resetGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default MinesGame;
