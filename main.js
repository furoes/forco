const words = [
  "ação",
  "água",
  "amor",
  "anjo",
  "área",
  "arte",
  "ateu",
  "ator",
  "blog",
  "cara",
  "casa",
  "caso",
  "cura",
  "deus",
  "fato",
  "feto",
  "gato",
  "hora",
  "jogo",
  "lado",
  "lago",
  "meio",
  "meme",
  "meta",
  "nome",
  "olho",
  "onda",
  "país",
  "sair",
  "time",
  "vida",
  "vlog",
  "achar",
  "aluno",
  "amigo",
  "andar",
  "átomo",
  "autor",
  "avião",
  "beber",
  "bioma",
  "campo",
  "carro",
  "carta",
  "coisa",
  "comer",
  "conto",
  "corpo",
  "criar",
  "criar",
  "dança",
  "deusa",
  "dever",
  "dizer",
  "drama",
  "ética",
  "falar",
  "festa",
  "ficar",
  "força",
  "gente",
  "grupo",
  "haver",
  "homem",
  "idade",
  "ideia",
  "idoso",
  "jovem",
  "levar",
  "linha",
  "livro",
  "lugar",
  "magia",
  "manhã",
  "mente",
  "mídia",
  "morte",
  "mundo",
  "nadar",
  "nível",
  "noite",
  "olhar",
  "órgão",
  "ouvir",
  "parte",
  "pedir",
  "peixe",
  "poder",
  "poeta",
  "ponto",
  "porta",
  "praia",
  "prosa",
  "punir",
  "rádio",
  "razão",
  "roça",
  "saber",
  "salsa",
  "saúde",
  "selva",
  "série",
  "solar",
  "sonho",
  "tempo",
  "terra",
  "tomar",
  "velho",
  "viral",
  "viver",
  "viver",
  "acabar",
  "adulto",
  "ajudar",
  "animal",
  "apoiar",
  "artigo",
  "cabeça",
  "cantar",
  "cantor",
  "célula",
  "chamar",
  "chegar",
  "cidade",
  "cinema",
  "código",
  "cometa",
  "correr",
  "crente",
  "dançar",
  "década",
  "deixar",
  "doença",
  "edição",
  "editor",
  "emoção",
  "ensaio",
  "entrar",
  "enzima",
  "escola",
  "espaço",
  "estado",
  "estudo",
  "ficção",
  "física",
  "físico",
  "futuro",
  "gameta",
  "gênero",
  "gentil",
  "guerra",
  "humana",
  "idioma",
  "inovar",
  "inseto",
  "jardim",
  "láctea",
  "língua",
  "lógica",
  "mágica",
  "membro",
  "menina",
  "método",
  "minuto",
  "mulher",
  "música",
  "número",
  "oceano",
  "outros",
  "página",
  "partir",
  "passar",
  "pensar",
  "pensar",
  "perder",
  "pessoa",
  "pintar",
  "pintor",
  "poesia",
  "próton",
  "quadro",
  "quarto",
  "querer",
  "réptil",
  "século",
  "seguir",
  "semana",
  "sentir",
  "sexual",
  "sonhar",
  "sorrir",
  "teatro",
  "tecido",
  "teoria",
  "terror",
  "título",
  "tornar",
  "trocar",
  "troféu",
  "utopia",
  "viagem",
  "viajar",
  "voltar",
  "volume",
  "zigoto",
  "aceitar",
  "adaptar",
  "admirar",
  "álgebra",
  "amizade",
  "anfíbio",
  "biólogo",
  "brincar",
  "cálculo",
  "caminho",
  "caverna",
  "cérebro",
  "ciência",
  "citação",
  "começar",
  "comédia",
  "coragem",
  "cordado",
  "criação",
  "criança",
  "crônica",
  "cultura",
  "deidade",
  "demônio",
  "desafio",
  "deserto",
  "direita",
  "diretor",
  "editora",
  "elétron",
  "embrião",
  "empresa",
  "energia",
  "ensinar",
  "espécie",
  "esporte",
  "estrela",
  "estudar",
  "evoluir",
  "existir",
  "família",
  "galáxia",
  "governo",
  "inferno",
  "medalha",
  "meditar",
  "memória",
  "meteoro",
  "milênio",
  "mineral",
  "molusco",
  "momento",
  "mudança",
  "mutação",
  "natural",
  "negócio",
  "nêutron",
  "palavra",
  "paraíso",
  "parecer",
  "passado",
  "pintura",
  "piscina",
  "planeta",
  "plantar",
  "podcast",
  "primate",
  "química",
  "químico",
  "receber",
  "receita",
  "revisor",
  "revista",
  "romance",
  "segundo",
  "seleção",
  "serviço",
  "sinapse",
  "sistema",
  "sucesso",
  "superar",
  "terapia",
  "tolerar",
  "vegetal",
  "velhice",
  "vitória",
  "alcançar",
  "ambiente",
  "anelídeo",
  "animista",
  "apreciar",
  "aprender",
  "assexual",
  "aventura",
  "biologia",
  "cachorro",
  "capítulo",
  "celebrar",
  "cirurgia",
  "cnidário",
  "comentar",
  "conduzir",
  "conectar",
  "conhecer",
  "controle",
  "cooperar",
  "cozinhar",
  "desenhar",
  "dialogar",
  "dinheiro",
  "distopia",
  "economia",
  "educação",
  "elefante",
  "escrever",
  "escritor",
  "escultor",
  "espírito",
  "estética",
  "evolução",
  "explorar",
  "familiar",
  "fantasia",
  "filósofo",
  "floresta",
  "fracasso",
  "genética",
  "geógrafo",
  "hipótese",
  "história",
  "imaginar",
  "imprensa",
  "infância",
  "inovação",
  "integrar",
  "internet",
  "inventar",
  "mamífero",
  "maratona",
  "mesquita",
  "mistério",
  "molécula",
  "montanha",
  "natureza",
  "nebulosa",
  "nematoda",
  "neurônio",
  "objetivo",
  "observar",
  "pergunta",
  "pesquisa",
  "placenta",
  "política",
  "político",
  "porífero",
  "postagem",
  "presente",
  "problema",
  "produtor",
  "programa",
  "proteína",
  "realizar",
  "refletir",
  "religião",
  "repostar",
  "resolver",
  "sensação",
  "silêncio",
  "suspense",
  "telefone",
  "trabalho",
  "tradição",
  "universo",
  "variável",
  "vibração",
  "agnóstico",
  "anestesia",
  "aracnídeo",
  "artrópode",
  "asteroide",
  "astrônomo",
  "bailarino",
  "biografia",
  "cientista",
  "colaborar",
  "comemorar",
  "conclusão",
  "congresso",
  "conquista",
  "conseguir",
  "construir",
  "continuar",
  "descobrir",
  "descrente",
  "diplomata",
  "encontrar",
  "escultura",
  "estudante",
  "eucariota",
  "expressão",
  "favoritar",
  "filosofia",
  "geografia",
  "geometria",
  "indexação",
  "indivíduo",
  "juventude",
  "linguagem",
  "linguista",
  "narrativa",
  "oncologia",
  "ortopedia",
  "panteísta",
  "partícula",
  "percepção",
  "professor",
  "progresso",
  "psicólogo",
  "realidade",
  "religioso",
  "respeitar",
  "responder",
  "resultado",
  "revolução",
  "sabedoria",
  "sociedade",
  "sociólogo",
  "televisão",
  "trabalhar",
  "trabalhar",
  "apresentar",
  "arqueólogo",
  "científica",
  "compositor",
  "computador",
  "comunidade",
  "considerar",
  "contemplar",
  "darwinismo",
  "descoberta",
  "economista",
  "endoscopia",
  "equilibrar",
  "escritório",
  "espiritual",
  "eternidade",
  "existência",
  "felicidade",
  "fotografar",
  "fotografia",
  "frequência",
  "harmonizar",
  "imaginação",
  "informação",
  "investigar",
  "jornalismo",
  "literatura",
  "matemática",
  "matemático",
  "metafísica",
  "monoteísta",
  "nascimento",
  "neurologia",
  "observação",
  "pensamento",
  "politeísta",
  "presidente",
  "psicologia",
  "publicação",
  "questionar",
  "raciocínio",
  "radiologia",
  "referência",
  "reportagem",
  "reprodução",
  "respiração",
  "retrocesso",
  "roteirista",
  "sociologia",
  "tecnologia",
  "tratamento",
  "vertebrado",
  "adolescente",
  "antropólogo",
  "aprendizado",
  "arqueologia",
  "cardiologia",
  "celenterado",
  "civilização",
  "compreender",
  "comunicação",
  "conferência",
  "consciência",
  "crescimento",
  "curiosidade",
  "ecossistema",
  "equinodermo",
  "estatística",
  "experimento",
  "historiador",
  "laboratório",
  "medicamento",
  "metabolismo",
  "modernidade",
  "platelminto",
  "procarionte",
  "psiquiatria",
  "transformar",
  "adolescência",
  "antropologia",
  "bibliografia",
  "compartilhar",
  "conhecimento",
  "criatividade",
  "documentário",
  "experimentar",
  "fotossíntese",
  "infectologia",
  "inteligência",
  "psicoterapia",
  "revolucionar",
  "universidade",
  "autobiografia",
  "epistemologia",
  "solidariedade",
  "envelhecimento",
  "desenvolvimento",
  "espiritualidade",
  "hereditariedade"
];

let selectedWord, guessedWord, wrongLetters, selectedWordNormalized, maxErrors;

const { Temporal } = temporal;

const MAX_INT32 = 2147483647;

const epoch = Temporal.PlainDate.from({ year: 2020, month: 1, day: 1 });
const today = Temporal.Now.instant().toZonedDateTimeISO('UTC').toPlainDate()
const days = today.since(epoch).days

const random = mulberry32(days)()

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

function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

function chooseRandomWord() {
  return words[Math.floor(random * MAX_INT32 %  words.length)];
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
