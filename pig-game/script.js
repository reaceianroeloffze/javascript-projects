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



