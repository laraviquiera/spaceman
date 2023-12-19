/*----- cached elements  -----*/

const wordDisplay = document.querySelector('.word-display');
const livesDisplay = document.querySelector('.num-lives b');
const keys = document.querySelectorAll('.key');
const gameResult = document.querySelector('.game-result');
const playAgainBtn = gameResult.querySelector('button');

/*----- app's state (variables) -----*/

let currentWord;
let guessedLetters;
let wrongGuesses;
let numLives;

/*----- event listeners -----*/

document.querySelector('main').addEventListener('click', handleLetterClick);
playAgainBtn.addEventListener('click', resetGame);


/*----- functions -----*/

init();

function init() {
  currentWord = getRandomWord();
  guessedLetters = [];
  wrongGuesses = 0;
  numLives = 6;
  render();
}

function getRandomWord() {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  document.querySelector('.hint-text b').innerText = hint;
  return word;
  render();
}

//trying to display the correct guessed letters in the placeholder
// keys.forEach(key => {
//   key.addEventListener('click', () => {
//     wordDisplay.value += key.innerText
//   })
// })

function renderWordDisplay() {
  const wordArray = currentWord.split('').map(letter => {
    return guessedLetters.includes(letter) ? `<li class="letter">${letter}</li>` : '<li class="letter"></li>';
  });
  wordDisplay.innerHTML = wordArray.join('');
}

function handleLetterClick(evt) {
  if (evt.target.matches('.key')) {
    const clickedLetter = evt.target.textContent;
    if (!guessedLetters.includes(clickedLetter)) {
      guessedLetters.push(clickedLetter);
      if (!currentWord.includes(clickedLetter)) {
        wrongGuesses++;
        numLives--;
      }
      render();
    }
  }
}

function updateLivesDisplay() {
  livesDisplay.textContent = numLives;
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
  const correctAnswer = currentWord.toUpperCase();
  document.querySelector('.game-result h4').textContent = resultText;
  document.querySelector('.game-result p b').textContent = correctAnswer;
  gameResult.style.display = 'flex';
}

function resetGame() {
  guessedLetters = [];
  wrongGuesses = 0;
  numLives = 6;
  currentWord = getRandomWord();
  renderWordDisplay();
  updateLivesDisplay();
  gameResult.style.display = 'none';
  
  render();
}

// Initialization
// currentWord = getRandomWord();

function render() {
  renderWordDisplay();
  updateLivesDisplay();
  checkGameStatus();
}
