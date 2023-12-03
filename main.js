const words = [
  "banana", "elefante", "montanha", "oceano", "computador", "aventura",
  "programação", "desenvolvimento", "futebol", "viagem", "escola", "amor",
  "guitarra", "piano", "cachorro", "gato", "família", "feliz",
  "alegria", "trabalho", "escritório", "chocolate", "fotografia", "lua",
  "sol", "estrela", "jardim", "inverno", "verão", "outono",
  "primavera", "televisão", "filme", "arte", "música", "livro",
  "aventura", "ciência", "história", "geografia", "matemática", "química",
  "biologia", "pintura", "escultura", "abacaxi", "melancia", "kiwi",
  "câmera", "tecnologia", "internet", "esportes", "carro", "avião",
  "navio", "cidade", "floresta", "montanha-russa", "circo", "festival",
  "espelho", "relógio", "cozinha", "jantar", "violinista", "atleta",
  "pintor", "dançarino", "professor", "aluno", "cientista", "explorador",
  "telefone", "teclado", "mouse", "hamburguer", "pizza", "sorvete",
  "teatro", "drama", "comédia", "doutor", "enfermeira", "paciente"
];

let selectedWord, guessedWord, wrongLetters;

function initializeGame() {
  selectedWord = chooseRandomWord();
  guessedWord = Array.from(selectedWord).fill("_");
  wrongLetters = [];

  displayWord();
  createKeyboard();

  document.addEventListener("keydown", handleKeyEvent);
}

function chooseRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function isLetterKey(key) {
  return /^[a-zA-Z]$/.test(key);
}

function displayElementContent(elementId, content) {
  const element = document.getElementById(elementId);
  element.textContent = content;
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

  if (guessedWord.join("") === selectedWord || wrongLetters.length === 6) {
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

  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === letter) {
      guessedWord[i] = letter;
    }
  }

  displayWord();
}

function endGame() {
  document.removeEventListener("keydown", handleKeyEvent);

  setTimeout(() => {
    if (guessedWord.join("") === selectedWord) {
      alert(`Parabéns! Você ganhou!`);
    } else {
      alert(`Você perdeu! A palavra era: ${selectedWord}`);
    }

    initializeGame();
  }, 500);
}

function createKeyboard() {
  const keyboardContainer = document.getElementById("keyboard-container");
  keyboardContainer.innerHTML = "";

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  alphabet.split("").forEach((letter) => {
    const button = document.createElement("button");
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
      if (guessedWord.includes(letter)) {
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

  if (guessedWord.join("") === selectedWord || wrongLetters.length === 6) {
    endGame();
  }
}

initializeGame();
document.addEventListener("keydown", handleKeyEvent);
