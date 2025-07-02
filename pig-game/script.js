// Pig Game Logic

// Enable Strict Mode
'use strict';

// Select all necessary document elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerScore0Elem = document.querySelector('#score--0');
const playerScore1Elem = document.querySelector('#score--1');
const diceElem = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdScoreBtn = document.querySelector('.btn--hold');
const diceImg = document.querySelector('.dice');
const player0CurrentScoreElem = document.querySelector('#current--0');
const player1CurrentScoreElem = document.querySelector('#current--1');

// Pig game starting conditions
playerScore0Elem.innerText = 0;
playerScore1Elem.innerText = 0;
diceElem.classList.add('dice__hidden');
let playerCurrentScore = 0;
const scores = [0, 0];
let activePlayer = 0;

// Roll Dice Button Functionality
rollDiceBtn.addEventListener('click', () => {
	// Generate a random number between 1 & 6
	const diceNumber = Math.trunc(Math.random() * 6) + 1;

	// Remove the dice__hidden class if present
	if (diceElem.classList.contains('dice__hidden')) {
		diceElem.classList.remove('dice__hidden');
	}
	// display the rolled number
	diceImg.src = `dice-${diceNumber}.png`;

	// Check if the diceNumber = 1
	if (diceNumber !== 1) {
		// Check which player is active and apply dice roll to current score
		playerCurrentScore += diceNumber;
		document.querySelector(`#current--${activePlayer}`).innerText = playerCurrentScore;
	} else {
		// Switch to the next player and reset the current player's current score
		switchToNextPlayer();
	}
});

// Hold Score Button Functionality
holdScoreBtn.addEventListener('click', () => {
	// Add the current score to the active player's overall score
	scores[activePlayer] += playerCurrentScore;
	document.querySelector(`#score--${activePlayer}`).innerText = scores[activePlayer];

	// Check to see if a player has reached a score of 100 or higher
	if (scores[activePlayer] >= 20) {
		// End/finish the game and announce a winner
		document.querySelector(`.player--${activePlayer}`)
			.classList.add('player--winner');
		document
			.querySelector(`.player--${activePlayer}`)
			.classList.remove('player--active');
		diceElem.classList.add('dice__hidden');
	} else {
		// Switch players and reset current player score
		switchToNextPlayer();
	}
});
