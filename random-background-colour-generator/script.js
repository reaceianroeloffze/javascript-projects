// Generating a random background colour

// Select the page heading (h1) and colour generator button from the DOM.
const pageTitle = document.querySelector('.page-title');
const generatorBtn = document.querySelector('.generator-btn');

// Create a function to generate a random colour using rgba values.
/*
const generateRandomRGBColor = () => {
    // Colours are randomised using the floor and random Math methods.
    // They're then multiplied by 256 since the values are floored.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const a = Math.floor(Math.random() * 256);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}
*/

// Create a function to generate a random colour using hexadecimal values.
const generateRandomHexColor = () => {
    let hexColour;
    // Generate random hex values using Math.floor and convert it
    // to a string and to upper case.
    hexColour = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
    return `#${hexColour.padStart(6, '0')}`;
}

// Listen for the click event on the button to generate random RGB colours.
/*
generatorBtn.addEventListener('click', () => {
    let randomRGBColour;
    // Call the function to generate a random RGB colour.
    randomRGBColour = generateRandomRGBColor();
    // Set the background of the body to the colour generated from
    // the function. Set the colour of the h1 (pageTitle), too.
    document.body.style.backgroundColor = randomRGBColour;
    pageTitle.style.color = randomRGBColour;
    // Display the randomised colour in as the heading text.
    pageTitle.innerText = randomRGBColour;
})
*/

// Listen for the click event on the button to generate random hex colours.
generatorBtn.addEventListener('click', () => {
    let randomHexColour;
    // Call the function to generate a random hex colour.
    randomHexColour = generateRandomHexColor();
    // Set the background of the body to the colour generated from
    // the function. Set the colour of the h1, too.
    document.body.style.backgroundColor = randomHexColour;
    pageTitle.style.color = randomHexColour;
    // Display the randomised colour in as the heading text.
    pageTitle.innerText = randomHexColour;
})
