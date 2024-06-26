import { chooseRandomWord } from "./logic.js";
import {
  showErros,
  displayWord,
  displayTotalMatches,
  displayWinrate,
} from "./ui.js";

let selectedWord, guessedWord, selectedWordNormalized;
let dataGlobal = {
  wrongLetters: [],
  rightLetters: [],
  maxErrors: 8,
  wins: 0,
  all: 0,
  win: false,
};

function normalizeWord(word) {
  return word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}

function initializeGame() {
  const data = localStorage.getItem("data") ?? JSON.stringify(dataGlobal);
  const local = JSON.parse(data);

  selectedWord = chooseRandomWord();
  guessedWord = Array.from(selectedWord).map((char) =>
    char === "-" ? char : "_"
  );
  selectedWordNormalized = normalizeWord(selectedWord);

  localStorage.setItem("data", JSON.stringify(local));

  displayTotalMatches(local);
  displayWinrate(local);

  displayWord(guessedWord);
  showErros(dataGlobal);
  createKeyboard();

  if (local.win) {
    endGame();
  }
}

function endGame() {
  disableKeyboard();

  const data = localStorage.getItem("data");
  const local = JSON.parse(data);

  if (!local.win) {
    local.wins += 1;
    local.all += 1;
    local.win = true;
  }

  localStorage.setItem("data", JSON.stringify(local));

  displayTotalMatches(local);
  displayWinrate(local);

  const textClipboard = `joguei forco!\nerros: ${8 - dataGlobal.maxErrors}`;

  document.getElementById("btn-share").addEventListener("click", () => {
    navigator.clipboard.writeText(textClipboard).then(
      () => {
        console.log("Async: Copying to clipboard was successful!");
      },
      (err) => {
        console.error("Async: Could not copy text: ", err);
      }
    );
  });

  statsDialog.showModal();
}

export function createKeyboard() {
  const keyboardContainer = document.getElementById("keyboard-container");
  keyboardContainer.innerHTML = "";

  const qwerty = "qwertyuiopasdfghjklzxcvbnm";
  const letters = qwerty.split("");

  const local = JSON.parse(localStorage.getItem("data"));

  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.id = `letter-${letter}`;
    button.className = "key";
    button.textContent = letter;

    const handlerClick = () => handleKeyboardClick(letter);
    button.addEventListener("click", handlerClick);

    keyboardContainer.appendChild(button);

    if (
      local.rightLetters.includes(letter) ||
      local.wrongLetters.includes(letter)
    ) {
      updateGameStatus(letter);
      checkLetterPress(letter);
    }
  });
}

function isLetterKey(key) {
  return /^[a-zA-Z]$/.test(key);
}

function updateGameStatus(letter) {
  if (
    !selectedWordNormalized.includes(letter) &&
    !dataGlobal.wrongLetters.includes(letter)
  ) {
    dataGlobal.wrongLetters.push(letter);
  }

  if (guessedWord.includes(letter)) {
    return;
  }

  if (selectedWordNormalized.includes(letter)) {
    dataGlobal.rightLetters.push(letter);
  }

  for (let i = 0; i < selectedWordNormalized.length; i++) {
    if (selectedWordNormalized[i] === letter) {
      guessedWord[i] = selectedWord[i];
    }
  }

  displayWord(guessedWord);
  showErros(dataGlobal);
}

function updateLocalStorage() {
  localStorage.setItem("data", JSON.stringify(dataGlobal));
}

function handleKeyEvent(event) {
  const letter = event.key.toLowerCase();

  if (!isLetterKey(letter)) {
    return;
  }

  updateGameStatus(letter);
  checkLetterPress(letter);
  updateLocalStorage();

  if (
    guessedWord.join("") === selectedWord ||
    dataGlobal.wrongLetters.length === dataGlobal.maxErrors
  ) {
    endGame();
  }
}

function checkLetterPress(letter) {
  const buttonLetter = document.getElementById(`letter-${letter}`);

  if (selectedWordNormalized.includes(letter)) {
    buttonLetter.classList.add("correct-letter");
  } else {
    buttonLetter.classList.add("wrong-letter");
  }

  buttonLetter.disabled = true;
}

function handleKeyboardClick(letter) {
  if (!isLetterKey(letter)) {
    return;
  }

  updateGameStatus(letter);
  checkLetterPress(letter);
  updateLocalStorage();

  if (
    guessedWord.join("") === selectedWord ||
    dataGlobal.wrongLetters.length === dataGlobal.maxErrors
  ) {
    endGame();
  }
}

export function disableKeyboard() {
  const keyboardButtons = document.querySelectorAll(
    "#keyboard-container button"
  );

  keyboardButtons.forEach((key) => {
    const clone = key.cloneNode(true);
    key.parentNode.replaceChild(clone, key);
  });

  document.removeEventListener("keydown", handleKeyEvent);
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
