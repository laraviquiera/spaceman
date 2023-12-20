/*----- constants -----*/

const MAX_INCORRECT = 6;


/*----- cached elements  -----*/

const wordDisplayEl = document.querySelector('.word-display');
const livesDisplay = document.querySelector('.num-lives b');
const keys = document.querySelectorAll('.key');
const gameResult = document.querySelector('.game-result');
const playAgainBtn = gameResult.querySelector('button');
const hintEl = document.querySelector('h4.hint-text > b');


/*----- app's state (variables) -----*/

let currentWord;
let guessedLetters;
let wrongGuesses;
let wordHint;

/*----- event listeners -----*/

document.querySelector('main').addEventListener('click', handleLetterClick);
playAgainBtn.addEventListener('click', init);


/*----- functions -----*/

init();

function init() {
  setRandomWordAndHint()
  guessedLetters = new Array(currentWord.length).fill('_');
  wrongGuesses = [];

  render();
}

function setRandomWordAndHint() {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  wordHint = hint; 
}


function handleLetterClick(evt) {
  if (!evt.target.matches('.key')) return;
  const letter = evt.target.textContent;
  if (currentWord.includes(letter)) {
    let found = false;
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter) {
        guessedLetters[i] = letter;
        found = true;
      }
    }
    if (!found) {
      wrongGuesses.push(letter);
      numLives--;
    }
    render();
  }
}

function checkGameStatus() {
  if (wrongGuesses === 6) {
    showGameOver(false);
  } else if (wordCompleted()) {
    showGameOver(true);
  }
}

function wordCompleted() {
  return currentWord.split('').every((letter) => guessedLetters.includes(letter));
}

function showGameOver(isVictory) {
  const resultText = isVictory ? 'Congrats! You found the word!' : 'Game Over!';
  const correctAnswer = currentWord;
  document.querySelector('.game-result h4').textContent = resultText;
  document.querySelector('.game-result p b').textContent = correctAnswer;
  gameResult.style.display = 'flex';
}


function render() {
  wordDisplayEl.innerHTML = guessedLetters.join('');
  livesDisplay.innerText = MAX_INCORRECT - wrongGuesses.length;
  hintEl.innerText = wordHint;
  // checkGameStatus();
  // gameResult.style.display = 'none';
}