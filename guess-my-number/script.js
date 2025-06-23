/* Logic for handling Guess My Number Game */

// Enabled Strict Mode
'use strict';

// Initialise a variable that will store the randomly generated number that the user will guess.
const numberToGuess = Math.trunc(Math.random() * 20) + 1;

/** ================
 * Element Retrieval
 * ================= */

// Retrieve the button with the class name "check" from the document and store it
const checkBtn = document.querySelector('.check');

// Get the paragraph element that prints a message when the user makes a guess and store it
const guessMsg = document.querySelector('.message');

// Retrieve the input the user will use to input their guess
const inputGuess = document.querySelector('.guess');

// Set the score of the game equal to the highest number of guesses (20, in this case)
let score = 20;

// Retrieve the span element holding the score and store it.
const scoreElement = document.querySelector('.score');

/** ====================
 * Handling Click Events
 * ===================== */

// Listen for the click event on checkBtn
checkBtn.addEventListener('click', () => {
    // Retrieve the guessed value input by a user, convert it to a number, and store it
    let guessedNumber = Number(inputGuess.value);
    // If no guess is made and the check button is clicked, print a message notifying the user
    if (!guessedNumber) {
        guessMsg.textContent = '🚫 No number guessed!';
        // If a guess is made, write logic to execute depending on the choice made
        // If the guessed number is strictly equal to the number to guess
    } else if (guessedNumber === numberToGuess) {
        guessMsg.textContent = '🎉 You guessed it right! Woohoo!';
        // If the guessed number is lower than the number to guess
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
    // Reset the input value to blank after a guess is made
    inputGuess.value = '';
})













