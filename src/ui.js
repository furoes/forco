function displayElementContent(elementId, content) {
  const element = document.getElementById(elementId);
  element.textContent = content;
}

export function showErros(data) {
  displayElementContent(
    "wrongs",
    data.maxErrors - data.wrongLetters.length
  );
}

export function displayWord(word) {
  displayElementContent("word-container", word.join(" "));
}

export function displayTotalMatches(localStorage) {
  displayElementContent("totalPartidas", localStorage.all);
}

export function displayWinrate(localStorage) {
  displayElementContent("taxaVitorias", `${(localStorage.wins / localStorage.all) * 100 || 0}%`
  );
}
