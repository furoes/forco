const words = [
  "banana",
  "elefante",
  "montanha",
  "oceano",
  "computador",
  "aventura",
  "programação",
  "desenvolvimento",
  "futebol",
  "viagem",
  "escola",
  "amor",
  "guitarra",
  "piano",
  "cachorro",
  "gato",
  "família",
  "feliz",
  "alegria",
  "trabalho",
  "escritório",
  "chocolate",
  "fotografia",
  "lua",
  "sol",
  "estrela",
  "jardim",
  "inverno",
  "verão",
  "outono",
  "primavera",
  "televisão",
  "filme",
  "arte",
  "música",
  "livro",
  "aventura",
  "ciência",
  "história",
  "geografia",
  "matemática",
  "química",
  "biologia",
  "pintura",
  "escultura",
  "abacaxi",
  "melancia",
  "kiwi",
  "câmera",
  "tecnologia",
  "internet",
  "esportes",
  "carro",
  "avião",
  "navio",
  "cidade",
  "floresta",
  "montanha-russa",
  "circo",
  "festival",
  "espelho",
  "relógio",
  "cozinha",
  "jantar",
  "violinista",
  "atleta",
  "pintor",
  "dançarino",
  "professor",
  "aluno",
  "cientista",
  "explorador",
  "telefone",
  "teclado",
  "mouse",
  "hamburguer",
  "pizza",
  "sorvete",
  "teatro",
  "drama",
  "comédia",
  "doutor",
  "enfermeira",
  "paciente",
];

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

  document.addEventListener("keydown", handleKeyEvent);
}

function chooseRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
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
  document.removeEventListener("keydown", handleKeyEvent);
  setTimeout(restartGame, 500);
}

function restartGame() {
  const mensagem =
    guessedWord.join("") === selectedWord
      ? "Parabéns! Você ganhou!"
      : `Você perdeu! A palavra era: ${selectedWord}`;

  alert(mensagem);
  initializeGame();
}

initializeGame();

// Keyboard

function createKeyboard() {
  const keyboardContainer = document.getElementById("keyboard-container");
  keyboardContainer.innerHTML = "";

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  alphabet.split("").forEach((letter) => {
    const button = document.createElement("button");
    button.className = "key"
    button.textContent = letter;
    button.addEventListener("click", () => handleKeyboardClick(letter));
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

document.addEventListener("keydown", handleKeyEvent);

// Help Dialog
const helpButton = document.querySelector("#btn-help");
const helpDialog = document.querySelector("#dlg-help");
const helpClose = document.querySelector("#btn-help-close");

helpButton.addEventListener("click", () => {
  helpDialog.showModal();
});

helpClose.addEventListener("click", () => {
  helpDialog.close();
});

// Config Dialog
const configButton = document.querySelector("#btn-config");
const configDialog = document.querySelector("#dlg-config");
const configClose = document.querySelector("#btn-config-close");

configButton.addEventListener("click", () => {
  configDialog.showModal();
});

configClose.addEventListener("click", () => {
  configDialog.close();
});
