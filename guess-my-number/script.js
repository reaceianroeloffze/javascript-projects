/* Logic for handling Guess My Number Game */

// Enabled Strict Mode
'use strict';

/** ====================
 * Handling Click Events
 * ===================== */

// Retrieve the button with class name "check" from the document
const checkBtn = document.querySelector('.check');

// Get the paragraph element that prints a message when the user makes a guess
const guessMsg = document.querySelector('.message');

// Listen for the click event on checkBtn
checkBtn.addEventListener('click', () => {
        // Retrieve the guessed value input by a user and convert it to a number
        const inputGuess = Number(document.querySelector('.guess').value);

        // If no guess is made and the check button is clicked, print a message notifying the user
        if (!inputGuess) {
            guessMsg.textContent = '🚫 No number guessed!';
        }
    }
)













