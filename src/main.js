import { words } from "./words.js";

const { Temporal } = temporal;

let selectedWord, guessedWord, wrongLetters, selectedWordNormalized, maxErrors;

function initializeGame() {
  selectedWord = chooseRandomWord();
  guessedWord = Array.from(selectedWord).map((char) =>
    char === "-" ? char : "_"
  );
  wrongLetters = [];
  selectedWordNormalized = normalizeWord(selectedWord);
  maxErrors = 8;

  displayWord();
  showErros();
  createKeyboard();
}

function getDays() {
  const epoch = Temporal.PlainDate.from({ year: 2020, month: 1, day: 1 });
  const today = Temporal.Now.instant().toZonedDateTimeISO("UTC").toPlainDate();

  return today.since(epoch).days;
}

function mulberry32(a) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function chooseRandomWord() {
  const MAX_INT32 = 2147483647;
  const random = mulberry32(getDays())();

  return words[Math.floor((random * MAX_INT32) % words.length)];
}

function normalizeWord(word) {
  return word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function isLetterKey(key) {
  return /^[a-zA-Z]$/.test(key);
}

function displayElementContent(elementId, content) {
  const element = document.getElementById(elementId);
  element.textContent = content;
}

function showErros() {
  displayElementContent("wrongs", maxErrors - wrongLetters.length);
}

function displayWord() {
  displayElementContent("word-container", guessedWord.join(" "));
}

function handleKeyEvent(event) {
  const letter = event.key.toLowerCase();

  if (!isLetterKey(letter)) {
    return;
  }

  updateGameStatus(letter);
  checkLetterPress(letter);

  if (
    guessedWord.join("") === selectedWord ||
    wrongLetters.length === maxErrors
  ) {
    endGame();
  }
}

function updateGameStatus(letter) {
  if (!selectedWord.includes(letter) && !wrongLetters.includes(letter)) {
    wrongLetters.push(letter);
  }

  if (guessedWord.includes(letter)) {
    return;
  }

  for (let i = 0; i < selectedWordNormalized.length; i++) {
    if (selectedWordNormalized[i] === letter) {
      guessedWord[i] = selectedWord[i];
    }
  }

  showErros();
  displayWord();
}

function endGame() {
  const keyboardButtons = document.querySelectorAll(
    "#keyboard-container button"
  );

  // remove all event listener
  keyboardButtons.forEach((key) => {
    const clone = key.cloneNode(true);
    key.parentNode.replaceChild(clone, key);
  });

  document.removeEventListener("keydown", handleKeyEvent);

  // get data



  statsDialog.showModal();
}

function createKeyboard() {
  const keyboardContainer = document.getElementById("keyboard-container");
  keyboardContainer.innerHTML = "";

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  alphabet.split("").forEach((letter) => {
    const button = document.createElement("button");
    button.className = "key";
    button.textContent = letter;

    const handler = () => handleKeyboardClick(letter)

    button.addEventListener("click", handler);
    keyboardContainer.appendChild(button);
  });
}

function checkLetterPress(letter) {
  const keyboardButtons = document.querySelectorAll(
    "#keyboard-container button"
  );

  keyboardButtons.forEach((button) => {
    if (button.textContent === letter) {
      if (selectedWordNormalized.includes(letter)) {
        button.classList.add("correct-letter");
      } else {
        button.classList.add("wrong-letter");
      }

      button.disabled = true;
    }
  });
}

function handleKeyboardClick(letter) {
  if (!isLetterKey(letter)) {
    return;
  }

  updateGameStatus(letter);
  checkLetterPress(letter);

  if (
    guessedWord.join("") === selectedWord ||
    wrongLetters.length === maxErrors
  ) {
    endGame();
  }
}

const helpButton = document.querySelector("#btn-help");
const helpDialog = document.querySelector("#dlg-help");
const helpClose = document.querySelector("#btn-help-close");

helpButton.addEventListener("click", () => {
  helpDialog.showModal();
});

helpClose.addEventListener("click", () => {
  helpDialog.close();
});

const statsButton = document.querySelector("#btn-stats");
const statsDialog = document.querySelector("#dlg-stats");
const statsClose = document.querySelector("#btn-stats-close");

statsButton.addEventListener("click", () => {
  statsDialog.showModal();
});

statsClose.addEventListener("click", () => {
  statsDialog.close();
});

initializeGame();

document.addEventListener("keydown", handleKeyEvent);