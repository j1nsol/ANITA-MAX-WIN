let user = {
    tokens: 100
};

let totalTumbleWin = 0; // This will store the accumulated tumble win amount
let betValue = 1.00;
const tumbleHistoryLog = [];

const Tokendisplay = document.getElementById('Php');
const BetInput = document.getElementById('Bet');
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const spinButton = document.getElementById('spin-button');
const TumbleMessage = document.getElementById('Tumble');
const slots = document.querySelectorAll('.slot img');
const spinSound = document.getElementById('spin-sound');
const rulesButton = document.getElementById('rules-area');
const closeRulesButton = document.getElementById('close-rules-btn');
let imageValues = {};

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

const imageProbabilities = {
    'image2/1.png': 0.15,
    'image2/2.png': 0.15,
    'image2/3.png': 0.15,
    'image2/4.png': 0.15,
    'image2/5.png': 0.15,
    'image2/6.png': 0.14,
    'image2/7.png': 0.13,
    'image2/8.png': 0.12,
    'image2/9.png': 0.11,
    'image2/10.png': 0.1
};




rulesButton.addEventListener('click', () => {
    if (rulesButton.style.display === 'none') {
        rulesButton.style.display = 'block'; 
    } else {
        rulesButton.style.display = 'none'; 
    }
});

closeRulesButton.addEventListener('click', () => {
    rulesButton.style.display = 'none'; 
});

function updateRules() {
   
    rulesButton.innerHTML = '';

    const rulesContainer = document.createElement('div');
    rulesContainer.style.display = 'grid';
    rulesContainer.style.gridTemplateColumns = 'repeat(5, 1fr)'; 
    rulesContainer.style.gridTemplateRows = 'repeat(2, 1fr)'; 
    rulesContainer.style.gap = '5px'; 
    rulesContainer.style.width = '100%'; 
    rulesContainer.style.height = '100%'; 
    rulesContainer.style.overflow = 'auto';


    for (let image in imageValues) {
        
        const imageDiv = document.createElement('div');
        imageDiv.style.textAlign = 'center'; 
        imageDiv.style.position = 'relative'; 

       
        const imgElement = document.createElement('img');
        imgElement.src = image; 
        imgElement.alt = `Image for ${image}`;
        imgElement.style.width = '100px'; 
        imgElement.style.height = '100px'; 
        imgElement.style.objectFit = 'cover'; 

      
        imageDiv.appendChild(imgElement);

        const payoutDiv = document.createElement('div');
        payoutDiv.style.fontSize = '12px'; 
        payoutDiv.style.color = 'white'; 

        for (let matchCount in imageValues[image]) {
            const payout = imageValues[image][matchCount];
            payoutDiv.innerHTML += `Match ${matchCount}: ${payout.toFixed(2)} tokens<br>`;
        }

        imageDiv.appendChild(payoutDiv);

        rulesContainer.appendChild(imageDiv);

    }

    rulesButton.appendChild(rulesContainer);
}




function updateImageValues() {
    for (let image in baseImageValues) {
        imageValues[image] = {};
        for (let matchCount in baseImageValues[image]) {
            imageValues[image][matchCount] = baseImageValues[image][matchCount] * betValue;
        }
    }
}



function updateBet() {
    BetInput.innerText = `BET ${betValue.toFixed(2)}`;
    updateImageValues();
}

function decreaseBet() {
    if (betValue > 100.00) { 
        betValue -= 100.00;
    } else if (betValue >  10.00 && betValue <= 100.00){
        betValue -= 10.00
    } else if (betValue > 1.00 && betValue <= 10.00){
        betValue -= 1.00;
    }
    updateBet();
    updateRules();
}

function increaseBet() {
    if (betValue < 10.00){
    betValue += 1.00;
    } else if(betValue >= 10.00 && betValue < 100.00){
        betValue += 10.00;
    } else if (betValue >= 100.00 && betValue < 1000.00){
        betValue += 100.00;
    }
    updateBet();
    updateRules();
}

minusBtn.addEventListener("click", decreaseBet);
plusBtn.addEventListener("click", increaseBet);



function updateTokenDisplay() {
    Tokendisplay.textContent = `TOKEN ${user.tokens.toFixed(2)}`; 
}

function updateTumbleMessage(message) {
    TumbleMessage.textContent = message; 
}

spinButton.addEventListener('click', () => {
    spinButton.disabled = true; 

    totalTumbleWin = 0;
    updateTumbleMessage("Tumble Win: 0"); 

    const betAmount = parseFloat(BetInput.textContent.replace('BET ', '')); 
    if (user.tokens < betAmount) {
        alert('Not enough tokens to place this bet!');
        spinButton.disabled = false;
        return;
    }

    user.tokens -= betAmount;
    updateTokenDisplay(); 
    updateTumbleMessage("Good Luck!");
    spinSound.play();

    const tumbleHistoryElement = document.getElementById('tumble-history');
    tumbleHistoryElement.innerHTML = '';             
    startSpin(); 
});


function getRandomImage() {
    const rand = Math.random(); 
    let cumulativeProbability = 0;

    for (const [image, probability] of Object.entries(imageProbabilities)) {
        cumulativeProbability += probability;
        if (rand <= cumulativeProbability) {
            return image; 
        }
    }
    return null; 
}

function startSpin() {
    updateImageValues();
    const spinDuration = 1780; 
    const finalImages = []; 

    slots.forEach((slot) => {
        const finalImageSrc = getRandomImage(); 
        finalImages.push(finalImageSrc); 

        slot.src = finalImageSrc;
        slot.classList.add('falling');
    });

    setTimeout(() => {
        slots.forEach((slot) => {
            slot.classList.remove('falling'); 
        });

        spinButton.disabled = false;

        checkForWinAndCascade(); // Directly call this without checking free spins.

        setTimeout(() => {
            checkForAnitaLogo(); 
        }, 100); 
    }, spinDuration);
}



function checkForAnitaLogo() {
    const anitaLogoSrc = 'image2/10.png';
    const anitaLogoCount = Array.from(slots).filter((slot) => slot.src.includes(anitaLogoSrc)).length;

    let jackpotMessage = '';

    if (anitaLogoCount == 5) {
        user.tokens += 1000; 
        updateTumbleMessage('You Won Minor Jackpot!');
    } else if (anitaLogoCount == 6) {
        user.tokens += 2000; 
        updateTumbleMessage('You Won Major Jackpot!');
    } else if (anitaLogoCount == 7) {
        user.tokens += 3000; 
        updateTumbleMessage('You Won Grand Jackpot!');
    } else if (anitaLogoCount == 8) {
        user.tokens += 5000; 
        updateTumbleMessage('You Won Anita Jackpot!');
    }

    console.log("Jackpot Message: ", jackpotMessage); 
    updateTokenDisplay(); 

    return jackpotMessage; 
}


function checkForWinAndCascade() {
    let cascadeInProgress = false;

    const imageCount = {};
    let currentTumbleWin = 0;

    slots.forEach((slot) => {
        const src = slot.src;
        const srcFile = src.split('/').pop();
        const imagePath = `image2/${srcFile}`;
        imageCount[imagePath] = (imageCount[imagePath] || 0) + 1;
    });

    const matches = Object.entries(imageCount).filter(([src, count]) => count >= 6 && !src.includes('image2/10.png'));

    if (matches.length > 0) {
        const winSound = new Audio('sounds/tumble.mp3');
        winSound.play();

        matches.forEach(([src, count]) => {
            let imageValue = 0;

            if (imageValues[src]) {
                if (count >= 8) {
                    imageValue = imageValues[src][8]; 
                } else if (count >= 6) {
                    imageValue = imageValues[src][6]; 
                } else if (count >= 5) {
                    imageValue = imageValues[src][5]; 
                }
            }

            currentTumbleWin += imageValue;


            updateTumbleHistory(imageValue, src, count); 

     
            slots.forEach((slot) => {
                const slotSrcFile = slot.src.split('/').pop();
                const slotImagePath = `image2/${slotSrcFile}`;

                if (slotImagePath === src) {
                    slot.classList.add('bounce');
                    setTimeout(() => {
                        slot.src = `image2/${Math.floor(Math.random() * 10) + 1}.png`; 
                        slot.classList.remove('bounce');
                    }, 600);
                }
            });
        });

    
        totalTumbleWin += currentTumbleWin;
        updateTumbleMessage(`Tumble Win: ${totalTumbleWin.toFixed(2)}`);

        cascadeInProgress = true;


        setTimeout(() => {
            checkForWinAndCascade(); 
        }, 600); 

    } else {
        finalizeTumbleWin();
    }

    function finalizeTumbleWin() {
        if (!cascadeInProgress) {
            user.tokens += totalTumbleWin;
            updateTokenDisplay();
            totalTumbleWin = 0;
            checkForAnitaLogo(); 
        }
    }
}



function updateTumbleHistory(tumbleWin, imageSrc, count) {

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
}
function ClickRules() {
    const rulesArea = document.getElementById('rules-area');
    if (rulesArea) {
        rulesArea.style.display = 'flex'; // Show the rules area
    } else {
        console.error("Element with ID 'rules-area' not found.");
    }
}

function closeRules() {
    const rulesArea = document.getElementById('rules-area');
    if (rulesArea) {
        rulesArea.style.display = 'none'; // Hide the rules area
    } else {
        console.error("Element with ID 'rules-area' not found.");
    }
}
document.getElementById('rules-btn').addEventListener('click', ClickRules);
document.getElementById('close-rules-btn').addEventListener('click', closeRules);
