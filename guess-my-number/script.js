/* Logic for handling Guess My Number Game */

// Enabled Strict Mode
'use strict';

/** =================================
 * Element Retrieval & Default values
 * ================================== */

// Retrieve all necessary elements from the document and store them in variables
// In addition, store the content of some of these elements in variables
const bodyElem = document.querySelector('body');
const number = document.querySelector('.number');
const checkBtn = document.querySelector('.check');
const guessMsg = document.querySelector('.message');
const inputGuess = document.querySelector('.guess');
const scoreElement = document.querySelector('.score');
const highScoreElement = document.querySelector('.high-score');
const playAgain = document.querySelector('.again');
const originalNumberContent = number.innerText;
const originalMsgContent = guessMsg.textContent;

/** ====================
 * Functionality
 * ===================== */

// Generate a random number between 1 and 20
const randomiseNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}

// Store the randomly generated number in a variable.
let numberToGuess = randomiseNumber();

// Set the lowest and highest values a user can guess
let lowestGuess = 1;
let highestGuess = 20;

// Set default score and high score
let score = 20;
let highScore = 0;

// Display a message
const displayMessage = function (message) {
    guessMsg.textContent = message;
}

// Set background colour for the body of the document
const setBackgroundColour = function (colour) {
    bodyElem.style.backgroundColor = colour;
}

// Create a function to handle the logic for what happens when the check button is clicked or touched
const handleCheckBtnEvent = function () {
	// Retrieve the guessed value input by a user, convert it to a number, and store it
	let guessedNumber = Number(inputGuess.value);

	// If the score is greater than 1, keep decreases the score for each incorrect guess made
	// If no guess is made and the check button is clicked, print a message notifying the user
	// If a guess is made, write logic to execute depending on the choice made
	// If the guessed number is strictly equal to the number to guess (i.e. the player wins)
	if (!guessedNumber) {
		displayMessage('🚫 No number guessed!');
	} else if (guessedNumber === numberToGuess) {
		inputGuess.setAttribute('readonly', 'true');
		displayMessage('🎉 You guessed it right! Woohoo!'); // Display winning text
		setBackgroundColour('#60b347'); // Set winning colour
		number.style.width = '20rem'; // increase width of number container
		number.innerText = guessedNumber; // Display the randomly chosen number
		// Display the highest score
		if (score > highScore) {
			highScore = score;
			highScoreElement.innerText = highScore;
		}
	} else if (guessedNumber !== numberToGuess) {
		// Make sure that all guesses made are within the given range of numbers.
		if (!(guessedNumber > highestGuess) && !(guessedNumber < lowestGuess)) {
			if (score > 1) {
				if (!guesses.includes(guessedNumber)) {
					guesses.push(guessedNumber); // Store a guessed number so a user only guesses once
					displayMessage(guessedNumber > numberToGuess ?
								   '🔺 Too high. Guess lower! 🔽' : '🔻 Too low. Guess higher! 🔼');
					score--; // Print an appropriate message and decrease the score by 1
					scoreElement.innerText = score; // Display the new score
					setBackgroundColour('#c1121f'); // Display a colour signalling an incorrect guess
					setTimeout(() => {
						setBackgroundColour('');
					}, 300); // revert to original colour after .3 seconds
				} else {
					displayMessage('You already guessed this number. 😁');
				}
			} else {
				// On the final guess attempt, display a message saying the user lost the game.
				// Also, set score to 0
				displayMessage('😿 You lose...');
				scoreElement.innerText = 0;
			}
		} else {
			displayMessage(`❗ Guess is out of range! Please guess a number between ${lowestGuess} and ${highestGuess}.`);
		}
	}
}

// Create a function that handles the logic for when playAgain is clicked or touched.
const handlePlayAgainBtnEvent = function () {
	// Reset content to page defaults.
	number.innerText = originalNumberContent; // return to the question mark text
	number.style.width = ''; // reset width
	setBackgroundColour(''); // reset background colour
	inputGuess.value = ''; // reset user input value
	score = 20; // reset score
	scoreElement.innerText = score; // reset score display
	displayMessage(originalMsgContent); // Reset to the starting message
	numberToGuess = randomiseNumber(); // Generate a random number
	guesses = []; // Reset the guesses to 0
}

/** ====================
 * Handling Click Events
 * ===================== */

// Create an array to store the incorrect numbers guessed by the user.
let guesses = [];

// Listen for the click event on checkBtn
checkBtn.addEventListener('click', handleCheckBtnEvent);

// Listen for the click event on the "Again!" button
playAgain.addEventListener('click', handlePlayAgainBtnEvent)
