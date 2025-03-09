import React, { useState, useEffect, useRef } from 'react';
import './fruity.css';

import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../../../firebase';
import { UserTopBar } from '../../../components/Topbar/UserTopBar';
import Sidebar from "../../../components/Sidebar/Sidebar";


import fruit1 from './image2/1.png';
import fruit2 from './image2/2.png';
import fruit3 from './image2/3.png';
import fruit4 from './image2/4.png';
import fruit5 from './image2/5.png';
import fruit6 from './image2/6.png';
import fruit7 from './image2/7.png';
import fruit8 from './image2/8.png';
import fruit9 from './image2/9.png';
import fruit10 from './image2/10.png';
import Logo from  './image2/FRUIT.webp';


const FruitImages = [
  fruit1, fruit2, fruit3, fruit4, fruit5,
  fruit6, fruit7, fruit8, fruit9, fruit10
];
const logoImage = [
  Logo
];




const SlotMachine = () => {
  const [showRules, setShowRules] = useState(false);
  const [betValue, setBetValue] = useState(1.0);
  const [userTokens, setUserTokens] = useState(100);
  const [totalTumbleWin, setTotalTumbleWin] = useState(0);
  const [imageValues, setImageValues] = useState({});
   const [userId, setUserId] = useState(null);
   const [token, setToken] = useState(0);
   const [overlayVisible, setOverlayVisible] = useState(false);
   const [isSpinning, setIsSpinning] = useState(false);
   const slotsRef = useRef([]);
   const [images, setImages] = useState(Array(20).fill(''));
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
      updateTokenDisplay();
    }, [token, userId]);
  

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

  const getRandomImage = () => {
    return FruitImages[Math.floor(Math.random() * FruitImages.length)];
  };


  const updateTokenDisplay = () => {
    const tokenDisplay = document.getElementById('Php');
    if (tokenDisplay) {
      tokenDisplay.textContent = `TOKEN ${token.toFixed(2)}`;
    }
  };
  const startSpin = () => {

    if (token < betValue) {
      alert('Insufficient tokens to place this bet!');
      return;
    }

    // Deduct the bet value from tokens
    setToken((prevToken) => prevToken - betValue);
    setIsSpinning(true);
    const spinDuration = 1780;
    const finalImages = images.map(() => getRandomImage());

    setImages(finalImages);

    slotsRef.current.forEach((slot, index) => {
      if (slot) {
        slot.src = finalImages[index];
        slot.classList.add('falling');
      }
    });

    setTimeout(() => {
      slotsRef.current.forEach((slot) => {
        if (slot) slot.classList.remove('falling');
      });

      setIsSpinning(false);
      checkForWinAndCascade(finalImages);

      setTimeout(() => {
        checkForAnitaLogo(finalImages);
      }, 100);
    }, spinDuration);
  };

  const checkForWinAndCascade = (newReels) => {
    let symbolCount = {};
    newReels.forEach((symbol) => {
      symbolCount[symbol] = (symbolCount[symbol] || 0) + 1;
    });

    let winAmount = 0;
    for (let symbol in symbolCount) {
      if (symbolCount[symbol] >= 4) {
        winAmount += betValue * symbolCount[symbol];
      }
    }

    if (winAmount > 0) {
      setTotalTumbleWin(totalTumbleWin + winAmount);
      setToken((prevToken) => prevToken + winAmount);
      cascadeSymbols(newReels);
    }

    checkForAnitaLogo(newReels);
  };

  const cascadeSymbols = (newReels) => {
    slotsRef.current.forEach((slot, index) => {
      if (slot) {
        slot.classList.add('cascade', 'bounce');
      }
    });

    setTimeout(() => {
      const cascadedReels = newReels.map(() => getRandomImage());
      setImages(cascadedReels);

      slotsRef.current.forEach((slot, index) => {
        if (slot) {
          slot.src = cascadedReels[index];
          slot.classList.remove('cascade', 'bounce');
        }
      });

      checkForWinAndCascade(cascadedReels);
    }, 800);
  };

  const checkForAnitaLogo = (newReels) => {
    const anitaLogoIndex = 9;
    const count = newReels.filter((symbol) => symbol === anitaLogoIndex).length;
    if (count >= 5) {
      alert('🎉 JACKPOT! Anita logo triggered the max win!');
      setToken((prevToken) => prevToken + 5000);
    }
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
    <UserTopBar />
    <Sidebar />
    <div className="slot-machine">
      <div className="slot-grid">
      <img className="fruitytitle" src={Logo} alt="FRUIT Bonanza Logo" />
        {[...Array(20)].map((_, index) => (
          <div className="slot" key={index}>
            <img
              ref={(el) => (slotsRef.current[index] = el)}
              src={FruitImages[index % 10]}
              alt={`Slot Image ${(index % 10) + 1}`}
            />
          </div>
        ))}
        <button id="spin-button" onClick={startSpin} disabled={isSpinning}>Spin</button>
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
