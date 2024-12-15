// Game State
let currentCard = Math.floor(Math.random() * 13) + 1; // Card range 1 to 13
let balance = 1000; // Set initial balance to 1000 for testing
let wins = 0; // Wins count
let betAmount = 0; // Start with no bet amount

// DOM Elements
const currentCardElement = document.getElementById('current-card');
const previousCardElement = document.getElementById('previous-card');
const betHistoryContainer = document.getElementById('bet-history-list');
const balanceElement = document.getElementById('balance');
const winsElement = document.getElementById('wins');
const messageElement = document.getElementById('message');
const betAmountElement = document.getElementById('bet-amount'); // Dropdown for bet amount
const placeBetButton = document.getElementById('place-bet');
const higherButton = document.getElementById('higher');
const lowerButton = document.getElementById('lower');
const skipButton = document.getElementById('skip');
const flipCardElement = document.getElementById('flip-card'); // Flip card container

// Audio Elements
const backgroundMusic = document.getElementById('background-music');
const muteButton = document.getElementById('mute-button');

// Functions to Control Music
function playMusic() {
    backgroundMusic.play();
}

function toggleMute() {
    if (backgroundMusic.paused) {
        playMusic();
        muteButton.innerHTML = '<img src="images/mute.png" alt="Mute">';
    } else {
        backgroundMusic.pause();
        muteButton.innerHTML = '<img src="images/unmute.png" alt="Unmute">';
    }
}

// Functions to update the game state
function updateCardImage(cardValue, isCurrent = true) {
    const cardElement = isCurrent ? currentCardElement : previousCardElement;
    cardElement.src = `images/${cardValue}.png`;
    cardElement.alt = `Card ${cardValue}`;
}

function getNextCard() {
    return Math.floor(Math.random() * 13) + 1;
}

function updateBalanceAndWins(wonAmount, lostAmount) {
    balance += wonAmount - lostAmount;
    balanceElement.textContent = balance;

    if (wonAmount > 0) {
        wins += 1;
        winsElement.textContent = wins;
    }
}

function addBetToHistory(betAmount, result) {
    const currentDate = new Date().toLocaleString();
    const li = document.createElement('li');
    li.textContent = `Date: ${currentDate}, Bet: $${betAmount}, Result: ${result}, Balance: $${balance}`;
    betHistoryContainer.appendChild(li);
}

function handleGuess(guess) {
    if (betAmount <= 0) {
        messageElement.textContent = "Please place a bet first.";
        return;
    }

    const nextCard = getNextCard();
    const correct =
        (guess === 'higher' && nextCard > currentCard) ||
        (guess === 'lower' && nextCard < currentCard);

    updateCardImage(currentCard, false); // Update previous card
    currentCard = nextCard;
    updateCardImage(currentCard, true); // Update current card

    if (correct) {
        const winnings = betAmount * 2; // Double the bet on a win
        updateBalanceAndWins(winnings, 0); // No loss deduction
        messageElement.textContent = `Correct! You won $${winnings}.`;
        addBetToHistory(betAmount, "Win");
    } else {
        updateBalanceAndWins(0, betAmount); // Deduct only the original bet amount
        messageElement.textContent = `Wrong! You lost $${betAmount}.`;
        addBetToHistory(betAmount, "Lose");
    }

    betAmount = 0; // Reset betAmount after a round
}


// Handle Skip
function handleSkip() {
    const nextCard = getNextCard();
    updateCardImage(currentCard, false);
    currentCard = nextCard;
    updateCardImage(currentCard, true);
    messageElement.textContent = `You skipped! The next card was ${currentCard}.`;
}

// Place bet functionality
placeBetButton.addEventListener('click', () => {
    const selectedBetAmount = parseInt(betAmountElement.value, 10);

    messageElement.textContent = '';
    messageElement.className = '';

    if (balance <= 0) {
        messageElement.textContent = "Out of balance! You cannot place any bets.";
        messageElement.classList.add('error');
        return;
    }

    if (selectedBetAmount <= 0) {
        messageElement.textContent = "Invalid bet. Please select a valid amount.";
        messageElement.classList.add('error');
        return;
    }

    if (selectedBetAmount > balance) {
        messageElement.textContent = "Insufficient balance! You cannot bet more than your current balance.";
        messageElement.classList.add('error');
        return;
    }

    betAmount = selectedBetAmount;
    balance -= betAmount;
    balanceElement.textContent = balance;

    messageElement.textContent = `Bet of $${betAmount} placed!`;
    messageElement.classList.add('success');
});

// Add event listeners for higher, lower, and skip buttons
higherButton.addEventListener('click', () => handleGuess('higher'));
lowerButton.addEventListener('click', () => handleGuess('lower'));
skipButton.addEventListener('click', handleSkip);

// Event listener for the mute button
muteButton.addEventListener('click', toggleMute);

// Play music on page load
window.onload = function () {
    playMusic();
};
