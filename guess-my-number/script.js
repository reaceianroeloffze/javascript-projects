/* Logic for handling Guess My Number Game */

// Enabled Strict Mode
'use strict';

// Create a function to randomise a number between 1 and 20
const randomiseNumber = function () {
    return Math.trunc(Math.random() * 20) + 1;
}

// Initialise a variable that will store the randomly generated number that the user will guess.
let numberToGuess = randomiseNumber();

/** ================
 * Element Retrieval
 * ================= */

// Retrieve the body element from the document
const bodyElem = document.querySelector('body');

// Retrieve the element that contains the mystery number to guess
const number = document.querySelector('.number');

// Store the original text of the element in a variable
const originalNumberContent = number.innerText;

// Retrieve the button with the class name "check" from the document and store it
const checkBtn = document.querySelector('.check');

// Get the paragraph element that prints a message when the user makes a guess and store it
const guessMsg = document.querySelector('.message');
// Store the original text of the element in a variable
const originalMsgContent = guessMsg.innerText;

// Retrieve the input the user will use to input their guess
const inputGuess = document.querySelector('.guess');

// Set the score of the game equal to the highest number of guesses (20, in this case)
let score = 20;
// Retrieve the span element holding the score and store it.
const scoreElement = document.querySelector('.score');

// Set the default high score value
let highScore = 0;
// Pull the element containing the high score from the document
const highScoreElement = document.querySelector('.high-score');

// Get the button responsible for resetting the game from the document
const playAgain = document.querySelector('.again');

/** ====================
 * Handling Click Events
 * ===================== */

// Listen for the click event on checkBtn
checkBtn.addEventListener('click', () => {
    // Retrieve the guessed value input by a user, convert it to a number, and store it
    let guessedNumber = Number(inputGuess.value);

    // If the score is greater than 1, keep decreases the score for each incorrect guess made
    if (score > 1) {
        // If no guess is made and the check button is clicked, print a message notifying the user
        if (!guessedNumber) {
            guessMsg.textContent = '🚫 No number guessed!';
        }
            // If a guess is made, write logic to execute depending on the choice made
        // If the guessed number is strictly equal to the number to guess (i.e. the player wins)
        else if (guessedNumber === numberToGuess) {
            guessMsg.textContent = '🎉 You guessed it right! Woohoo!';
            bodyElem.style.backgroundColor = '#60b347';
            number.style.width = '30rem';
            number.innerText = guessedNumber;

            if (score > highScore) {
                highScore = score;
                highScoreElement.innerText = highScore;
            }
        } else if (guessedNumber < numberToGuess) {
            guessMsg.textContent = '🔻 Too low. Guess higher! ⬆';
            score--; // Print an appropriate message and decrease the score by 1
            scoreElement.innerText = score; // Display the new score
            // If the guessed number is greater than the number to guess
        } else if (guessedNumber > numberToGuess) {
            guessMsg.textContent = '🔺 Too high. Guess lower! ⬇';
            score--; // Print an appropriate message and decrease the score by 1
            scoreElement.innerText = score; // Display the new score
        }
        // On the final guess attempt, display a message saying the user lost the game.
        // Also, set score to 0
    } else {
        guessMsg.textContent = '😿 You lose...';
        scoreElement.innerText = 0;
    }

    // Reset the input value to blank after a guess is made
    // inputGuess.value = '';
})

playAgain.addEventListener('click', () => {
    number.innerText = originalNumberContent;
    number.style.width = '';
    bodyElem.style.backgroundColor = '';
    inputGuess.value = '';
    score = 20;
    scoreElement.innerText = score;
    guessMsg.textContent = originalMsgContent;
    numberToGuess = randomiseNumber();
})











