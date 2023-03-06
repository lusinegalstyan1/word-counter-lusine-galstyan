// example:
// let userString = "I am learning JS with Pavel.";

const userString = document.querySelector("#userString");
console.log(userString.value.split(""));
const words = document.querySelector("#words");
const letters = document.querySelector("#letters");
const sentences = document.querySelector("#sentences");

function countWords() {
	let amountOfWords = userString.value.split(" ").length;
	words.innerText = amountOfWords;
}

function countLetters() {
	let amountOfLetters = userString.value.split("");
	let result = 0;
	for (let el of amountOfLetters) {
		if (
			el == " " ||
			el == "!" ||
			el == "." ||
			el == "," ||
			el == ";" ||
			el == "?" ||
			el == "..."
		) {
			continue;
		} else {
			result++;
		}
	}
	return (letters.innerText = result);
}

function countSentences() {
	let amountOfSentences = userString.value.split(".").length;
	sentences.innerText = amountOfSentences;
}

function counter() {
	countWords();
	countLetters();
	countSentences();
}

function changeBackground() {
	var colors = [
		"#FF5733",
		"#F7DC6F",
		"#9B59B6",
		"#85C1E9",
		"#48C9B0",
		"#F1948A",
		"#D35400",
	];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];
	document.body.style.backgroundColor = randomColor;
}
