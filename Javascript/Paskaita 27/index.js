// const emailRegexp = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/
// const someString = "aasdf@ssd.as";
// const result = emailRegexp.test(someString);
// console.log(result);

function getRandomNumber(n) {
  return Math.floor(Math.random() * n);
}

const words = ["labas", "ate", "katukas"];
const userGuesses = [];
let remainingGuesses = 6;

const wordContainer = document.querySelector("#wordContainer");
const newWordButton = document.querySelector("#newWordButton");
const input = document.querySelector("input");
const guessButton = document.querySelector("#guessButton");
const guessesText = document.querySelector("#guessesText")

function isInputValid(value) {
  const regex = /^[a-zA-Z]$/;
  return regex.test(value);
}

function revealCorrectlyGuessed(currentGuess) {
  const letterSpans = document.querySelectorAll('#wordContainer > span');
  let correctlyGuessed = false;

  for (let i = 0; i < letterSpans.length; i++) {
    const letter = letterSpans[i].getAttribute("data-letter");

    const isGuessed = currentGuess === letter;
    if (isGuessed) {
      letterSpans[i].textContent = letter;
      correctlyGuessed = true;
    }
  }

  if (!correctlyGuessed) {
    decrementGuesses()
  }
}

function checkIfWon() {
  const letterSpans = document.querySelectorAll('#wordContainer > span');
  for (let i = 0; i < letterSpans.length; i++) {
    if (letterSpans[i].textContent === "_ ") {
      return false;
    }
  }
  return true;
}

function decrementGuesses() {
  remainingGuesses--;
  guessesText.textContent = `Like spejimai: ${remainingGuesses}`
}

function guessButtonHandler() {
  const inputValue = input.value;

  const isValid = isInputValid(inputValue);
  if (isValid) {
    userGuesses.push(inputValue.toLowerCase())
    revealCorrectlyGuessed(inputValue);
    console.log(checkIfWon())
  } else {
    alert("galimi tik simboliai A-Z")
  }
}

guessButton.addEventListener("click", guessButtonHandler)

function generateWordHtml(word) {
  const letterSpans = [];

  for (let i = 0; i < word.length; i++) {
    const letterSpan = document.createElement("span");
    letterSpan.textContent = "_ ";
    letterSpan.setAttribute("data-letter", word[i]);
    letterSpans.push(letterSpan);
  }

  wordContainer.append(...letterSpans);
}

function generateRandomWord() {
  wordContainer.innerHTML = "";
  generateWordHtml(words[getRandomNumber(words.length)]);
}

newWordButton.addEventListener("click", generateRandomWord);

generateRandomWord();
