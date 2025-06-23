/* Logic for handling Guess My Number Game */

// Enabled Strict Mode
'use strict';

// Generate a random number between 1 and 20
const randomiseNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}

// Store the randomly generated number in a variable.
let numberToGuess = randomiseNumber();

// Set default score and high score
let score = 20;
let highScore = 0;

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
 * Handling Click Events
 * ===================== */

// Create an array to store the incorrect numbers guessed by the user.
const guesses = [];

// Listen for the click event on checkBtn
checkBtn.addEventListener('click', () => {
    // Retrieve the guessed value input by a user, convert it to a number, and store it
    let guessedNumber = Number(inputGuess.value);

    // If the score is greater than 1, keep decreases the score for each incorrect guess made
    // If no guess is made and the check button is clicked, print a message notifying the user
    if (!guessedNumber) {
        guessMsg.textContent = '🚫 No number guessed!';
    }
        // If a guess is made, write logic to execute depending on the choice made
    // If the guessed number is strictly equal to the number to guess (i.e. the player wins)
    else if (guessedNumber === numberToGuess) {
        guessMsg.textContent = '🎉 You guessed it right! Woohoo!'; // Display winning text
        bodyElem.style.backgroundColor = '#60b347'; // Set winning color
        number.style.width = '30rem'; // increase width of number container
        number.innerText = guessedNumber; // Display the randomly chosen number

        // Display the highest score
        if (score > highScore) {
            highScore = score;
            highScoreElement.innerText = highScore;
        }
    } else if (guessedNumber !== numberToGuess) {
        if (score > 1) {
            if (!guesses.includes(guessedNumber)) {
                guesses.push(guessedNumber);
                guessMsg.textContent = '🔻 Too low. Guess higher! ⬆';
                score--; // Print an appropriate message and decrease the score by 1
                scoreElement.innerText = score; // Display the new score
                // If the guessed number is greater than the number to guess
                bodyElem.style.backgroundColor = '#c1121f';
                setTimeout(() => {
                    bodyElem.style.backgroundColor = ''
                }, 300);
            } else {
                guessMsg.textContent = 'You already guessed this number. 😁';
            }
        } else {
            // On the final guess attempt, display a message saying the user lost the game.
            // Also, set score to 0
            guessMsg.textContent = '😿 You lose...';
            scoreElement.innerText = 0;
        }
    }
    // Reset the input value to blank after a guess is made
    inputGuess.value = '';
})

playAgain.addEventListener('click', () => {
    // Reset content to page defaults.
    number.innerText = originalNumberContent; // return to the question mark text
    number.style.width = ''; // reset width
    bodyElem.style.backgroundColor = ''; // reset background colour
    inputGuess.value = ''; // reset user input value
    score = 20; // reset score
    scoreElement.innerText = score; // reset score display
    guessMsg.textContent = originalMsgContent; // Reset to the starting message
    numberToGuess = randomiseNumber(); // Generate a random number
})











