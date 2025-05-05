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
import spinSound from './sounds/spinsound.mp3';
import winSound from './sounds/tumble.mp3';
import bgSound from './sounds/Bgmusic.mp3';
import muteButton from './image2/mute.png';
import unmuteButton from './image2/unmute.png';
import { set } from 'firebase/database';

const FruitImages = [
  fruit1, fruit2, fruit3, fruit4, fruit5,
  fruit6, fruit7, fruit8, fruit9, fruit10
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
   const [tumbleMessage, setTumbleMessage] = useState("PLACE YOUR BETS!");
   const rulesButtonRef = useRef(null);
   const [isMuted, setIsMuted] = useState(false);
   const [showJackpot, setShowJackpot] = useState(false);
   const [jackpotImage, setJackpotImage] = useState(null);
   const baseImageValues = {
    [fruit1]: { 6: 0.20, 7: 0.20, 8: 0.30, 9: 0.30, 10: 0.50 },
    [fruit2]: { 6: 0.40, 7: 0.40, 8: 0.60, 9: 0.60, 10: 1.00 },
    [fruit3]: { 6: 0.60, 7: 0.60, 8: 0.90, 9: 0.90, 10: 1.50 },
    [fruit4]: { 6: 0.80, 7: 0.80, 8: 1.20, 9: 1.20, 10: 2.00 },
    [fruit5]: { 6: 1.00, 7: 1.00, 8: 1.50, 9: 1.50, 10: 2.50 },
    [fruit6]: { 6: 1.20, 7: 1.20, 8: 1.80, 9: 1.80, 10: 3.00 },
    [fruit7]: { 6: 1.40, 7: 1.40, 8: 2.10, 9: 2.10, 10: 3.50 },
    [fruit8]: { 6: 1.60, 7: 1.60, 8: 2.40, 9: 2.40, 10: 4.00 },
    [fruit9]: { 6: 1.80, 7: 1.80, 8: 2.70, 9: 2.70, 10: 4.50 },
    [fruit10]: { 4: 1000.00, 6: 2000.00, 7: 3000.00, 8: 5000.00 }
  };
  

  let tumbleHistoryLog = []; // Declare tumbleHistoryLog outside the component

  const updateTumbleHistory = (tumbleWin, imageSrc, count) => {
    const tumbleHistoryElement = document.getElementById('tumble-history');
    if (tumbleWin < 0) {
      tumbleWin = 0; 
    }

    const newHistoryItem = document.createElement('div');
    newHistoryItem.classList.add('tumble-history-item');

    const tinyImage = document.createElement('img');
    tinyImage.src = imageSrc;
    tinyImage.style.width = '30px'; 
    tinyImage.style.height = '30px'; 
    tinyImage.style.marginRight = '8px'; 

    newHistoryItem.textContent = `Tumble Win: ${tumbleWin.toFixed(2)} Tokens  (Count: ${count})`;

    newHistoryItem.prepend(tinyImage);

    tumbleHistoryElement.appendChild(newHistoryItem);

    tumbleHistoryElement.scrollTop = tumbleHistoryElement.scrollHeight;

    tumbleHistoryLog.push({ tumbleWin, imageSrc, count });

    console.log('Updated Tumble History Log:', tumbleHistoryLog);

  const tumbleMessageElement = document.getElementById('Tumble');
  if (tumbleMessageElement) {
    tumbleMessageElement.textContent = `Tumble Win: ${tumbleWin.toFixed(2)}`;
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
      setTumbleMessage("NOT ENOUGH TOKENS!");
      return;
    }
    const tumbleHistoryElement = document.getElementById('tumble-history');
    tumbleHistoryElement.innerHTML = ''; // Clear the history

    // Deduct the bet value from tokens
    setToken((prevToken) => prevToken - betValue);
    setIsSpinning(true);
    const spinDuration = 1780;
    const finalImages = images.map(() => getRandomImage());

    setImages(finalImages);
    document.getElementById('spin-sound').play();

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
    }, spinDuration);
  };


  const checkForWinAndCascade = (newReels) => {
    let symbolCount = {};
    let symbolIndices = {};
  
    // Count the occurrences of each symbol
    newReels.forEach((symbol, index) => {
      if (symbol === fruit10) return; // Skip fruit10 (Anita logo)
      symbolCount[symbol] = (symbolCount[symbol] || 0) + 1;
      if (!symbolIndices[symbol]) {
        symbolIndices[symbol] = [];
      }
      symbolIndices[symbol].push(index);
    });
  
    let winAmount = 0;
    let matchedIndices = [];
  
    // Iterate over the symbol counts to check for wins
    for (let symbol in symbolCount) {
      if (symbolCount[symbol] >= 6) {
        const matchedCount = symbolCount[symbol];
        const symbolValue = imageValues[symbol]?.[matchedCount] || 0;

        document.getElementById('win-sound').play();
  
        // Calculate correct win amount using image values
        winAmount += betValue * symbolValue;
  
        // Collect indices for cascading
        matchedIndices = matchedIndices.concat(symbolIndices[symbol]);
  
        // Update tumble history for this specific win
        updateTumbleHistory(symbolValue, symbol, matchedCount);
      }
    }
  
    // Only process if there was a win
    if (winAmount > 0) {
      setTotalTumbleWin((prev) => prev + winAmount);
      setToken((prevToken) => prevToken + winAmount); // Update tokens after win
      cascadeSymbols(newReels, matchedIndices);
    }
  
    // Always check for Anita logo regardless of win
    checkForAnitaLogo(newReels);
  };
  
  
  
  
  const cascadeSymbols = (newReels, matchedIndices) => {
    slotsRef.current.forEach((slot, index) => {
      if (matchedIndices.includes(index) && slot) {
        slot.classList.add('cascade', 'bounce');
      }
    });
  
    setTimeout(() => {
      const updatedReels = [...newReels];
      matchedIndices.forEach(index => {
        const newImage = getRandomImage();
        updatedReels[index] = newImage;
  
        const slot = slotsRef.current[index];
        if (slot) {
          slot.src = newImage;
          slot.classList.remove('cascade', 'bounce');
        }
      });
  
      setImages(updatedReels);
      checkForWinAndCascade(updatedReels);
    }, 800);
  };
  const checkForAnitaLogo = (newReels) => {
    const anitaLogo = fruit10
    const count = newReels.filter((symbol) => symbol === anitaLogo).length; // Compare with fruit10
    if (count >= 4 && count <= 5) {
      const miniJackpot = 1000 * betValue
      alert('🎉 JACKPOT! Anita logo triggered Mini Jackpot!');
      setToken((prevToken) => prevToken + miniJackpot);
      setJackpotImage("image2/mini.jpg");
      setShowJackpot(true);
    }else if (count >= 6 && count <= 7) {
      const minorJackpot = 2000 * betValue
      alert('🎉 JACKPOT! Anita logo triggered Minor Jackpot!');
      setToken((prevToken) => prevToken + minorJackpot);
      setShowJackpot(true);
    }else if (count >= 8 && count <= 9) {
      const majorJackpot = 3000 * betValue
      alert('🎉 JACKPOT! Anita logo triggered Major Jackpot!');
      setToken((prevToken) => prevToken +  majorJackpot);
      setShowJackpot(true);
    }else if (count >= 10){
      const GrandJackpot = 5000 * betValue
      alert('🎉 JACKPOT! Anita logo triggered Grand Jackpot!');
      setToken((prevToken) => prevToken + GrandJackpot);
      setShowJackpot(true);
    }
   setTimeout(() => setShowJackpot(false), 3000); // Hide after 3 seconds
  };

  const toggleRules = () => {
    setShowRules(!showRules);
  };
  const toggleMute = () => {
    setIsMuted((prev) => {
      const newMutedState = !prev;
      const audio = document.getElementById('bg-sound');
  
      if (audio) {
        if (newMutedState) {
          audio.pause();
        } else {
          audio.play();
        }
      }
  
      return newMutedState;
    });
  };
  
  

  const increaseBet = () => {
    setBetValue((prevBet) => {
      if (prevBet < 10.0) return prevBet + 1.0;
      if (prevBet >= 10.0 && prevBet < 100.0) return prevBet + 10.0;
      if (prevBet >= 100.0 && prevBet < 1000.00) return prevBet + 100.0;
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
      <div id="tumble-history" className="tumble-history"></div>
      <div id="win-amount" className="win-amount"></div>
      <div id="free-spin-message" className="free-spin-message"></div>
      </div>

      <div id="jackpot-message" 
      className="jackpot-message" style={{ display: 'none' }}>
      <img
        src={jackpotImage}
        alt="Jackpot Image"
        id="jackpot-image"
        style={{ width: '100%', height: 'auto' }}
      />
      </div>

      <footer className="game-footer">
        <button id="game-rules" onClick={toggleRules}>i</button>
        <button id="minus-btn" className="bet-btnminus" onClick={decreaseBet}>-</button>
        <button id="spin-button" onClick={startSpin} disabled={isSpinning}>Spin</button>
        <div id="Php">TOKEN {token.toFixed(2)}</div>
        <div id="Bet">BET {betValue.toFixed(2)}</div>
        <button id="plus-btn" className="bet-btnplus" onClick={increaseBet}>+</button>
        <button id="mute-btn" onClick={toggleMute}>
       {isMuted ? (
       <img src={muteButton} alt="Muted" />
        ) : (
         <img src={unmuteButton} alt="Unmuted" />
         )}
        </button>


        <div id="Tumble">PLACE YOUR BETS!</div>


        {showRules && (
      <div ref={rulesButtonRef} id="rules-area" className="rules-area" 
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px 40px',
        borderRadius: '10px',
        width: '600px',
        textAlign: 'center',
        color: '#ccc',
        zIndex: '1000',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}
    >
      <h2 style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '30px',
        fontWeight: '600',
        marginBottom: '1px',
        color: 'white',
        letterSpacing: '1px'
      }}>
        GAME RULES
      </h2>
    
      <p style={{
        fontFamily: 'Poppins, sans-serif',
        fontSize: '16px',
        fontWeight: '300',
        color: 'white',
        lineHeight: '1.5'
      }}>
        Symbols pay anywhere on the screen. The total number of the same symbol on the screen at the
        end of a spin determines the value of the win.
      </p>
    
      <button 
        onClick={toggleRules} 
        style={{
          position: 'absolute',
          top: '10px',
          right: '15px',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          cursor: 'pointer',
          transition: 'color 0.3s'
        }}
        onMouseOver={(e) => e.target.style.color = '#fff'}
        onMouseOut={(e) => e.target.style.color = '#999'}
      >
        ✕
      </button>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '20px',
            width: '100%',
            height: '100%',
            overflow: 'auto',
          }}
        >
          {Object.keys(imageValues).map((image, index) => (
  <div key={index} style={{ textAlign: 'center', color: 'white' }}>
    <img
      src={image}
      alt={`Image for ${image}`}
      style={{ width: '80px', height: '80px', objectFit: 'cover' }}
    />
    <div style={{ fontSize: '12px', color: 'white' }}>
      {Object.entries(imageValues[image]).map(([matchCount, value], i, array) => {
        if (matchCount === '6') {
          // Combine 6 and 7
          return (
            <div key="6-7">
              6-7: {value.toFixed(2)} tokens
            </div>
          );
        }
        if (matchCount === '8') {
          // Combine 8 and 9
          return (
            <div key="8-9">
              8-9: {value.toFixed(2)} tokens
            </div>
          );
        }
        if (matchCount === '10') {
          // Combine 8 and 9
          return (
            <div key="10">
              10+: {value.toFixed(2)} tokens
            </div>
          );
        }
        // Skip 7 and 9 to avoid duplication
        if (matchCount === '7' || matchCount === '9') return null;

        // For other match counts
        return (
          <div key={matchCount}>
            {matchCount}: {value.toFixed(2)} tokens
          </div>
        );
      })}
              </div>
            </div>
          ))}
        </div>
        <button id="close-rules-btn" onClick={toggleRules}>Close</button>
      </div>
    )}

      </footer>

      <audio id="spin-sound" src={spinSound} preload="auto"></audio>
      <audio id="win-sound" src={winSound} preload="auto"></audio>
      <audio id="bg-sound" src={bgSound} preload="auto" loop></audio>

    </div>
    </body>
  );
};

export default SlotMachine;
