// Modal Window Display Logic

'use strict';

// Retrieve all necessary DOM elements
const modalWindow = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

// Create a function to handle opening the modal window
const openModalWindow = function() {
	modalWindow.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

// Create a function to handle closing the modal window
const closeModalWindow = function() {
	modalWindow.classList.add('hidden');
	overlay.classList.add('hidden');
};

// Loop through the NodeList of buttons and add a click event
// to display the modal window when clicked
for (let btn of showModalBtns) {
	btn.addEventListener('click', openModalWindow);
}

// When the button to close the modal window is clicked or the overlay is
// clicked, remove the window
closeModalBtn.addEventListener('click', closeModalWindow);
overlay.addEventListener('click', closeModalWindow);

// When the escape key is pressed, close the modal window
document.addEventListener('keydown', (ev) => {
	if (ev.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
		closeModalWindow();
	}
});
