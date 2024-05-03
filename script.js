
const userString = document.querySelector("#userString");
const words = document.querySelector("#words");
const letters = document.querySelector("#letters");
const sentences = document.querySelector("#sentences");

function countLetters() {
    let amountOfLetters = userString.value.replace(/[^a-zA-Z]/g, '').length;
    letters.innerText = amountOfLetters;
}

function countWords() {
    let text = userString.value.trim(); 
    let amountOfWords = text.match(/\b[\w']+\b/g).length;
    words.innerText = amountOfWords;
}

function countSentences() {
    let text = userString.value.trim();
    let amountOfSentences = text.match(/[.!?]+/g).length; 
    sentences.innerText = amountOfSentences;
}

function counter() {
    countWords();
    countLetters();
    countSentences();
}

function getRandomColor() { 
    let red = Math.floor(Math.random() * 256); 
    let green = Math.floor(Math.random() * 256); 
    let blue = Math.floor(Math.random() * 256); 

    let redHex = red.toString(16).padStart(2, '0'); 
    let greenHex = green.toString(16).padStart(2, '0'); 
    let blueHex = blue.toString(16).padStart(2, '0'); 

    let colorCode = `#${redHex}${greenHex}${blueHex}`;

    return colorCode;
}

function changeBackground() {
    let randomColor = getRandomColor();

    document.body.style.backgroundColor = randomColor;
}


