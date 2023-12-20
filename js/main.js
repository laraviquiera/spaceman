/*----- constants -----*/
const MAX_INCORRECT = 6;

/*----- cached elements  -----*/

const wordDisplayEl = document.querySelector('.word-display');
const livesDisplay = document.querySelector('.num-lives b');
const keyEls = document.querySelectorAll('.key');
const gameResult = document.querySelector('.game-result');
const playAgainBtn = gameResult.querySelector('button');
const hintEl = document.querySelector('h4.hint-text > b');

/*----- app's state (variables) -----*/

let currentWord;
let wordHint;
let guessedLetters;
let wrongGuesses;

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
  currentWord = word.toUpperCase();
  wordHint = hint; 
}

function handleLetterClick(evt) {
  if (!evt.target.matches('.key') || evt.target.disabled) return;
  const letterButton = evt.target;
  const letter = evt.target.innerText;
  
  letterButton.disabled = true;
  
  if (currentWord.includes(letter)) {
    guessedLetters.forEach(function(char, idx) {
      if (currentWord[idx] === letter) {
        guessedLetters[idx] = letter;
      }
    });
  } else {
    wrongGuesses.push(letter);
  }
  render();
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
  document.querySelector('.game-result h4').innerText = resultText;
  document.querySelector('.game-result p b').innerText = correctAnswer;
  gameResult.style.display = 'flex';
}

function render() {
  wordDisplayEl.innerText = guessedLetters.join('');
  livesDisplay.innerText = MAX_INCORRECT - wrongGuesses.length;
  hintEl.innerText = wordHint;

  if (wordCompleted()) {
    showGameOver(true);
  } else if (wrongGuesses.length >= MAX_INCORRECT) {
    showGameOver(false);
  } else {
    gameResult.style.display = 'none';
  }
}