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



/*----- functions -----*/

init();

function init() {
  currentWord = getRandomWord();
  guessedLetters = "";
  wrongGuesses = 0;
  numLives = 6;
  render();
}


function getRandomWord() {
	const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
	document.querySelector(".hint-text b").innerText = hint;
	currentWord = word;
	wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
	render();
  };

//Virtual Keyboard
function keyboardLetters() {
	keys.forEach(key => {
	key.addEventListener('click', () => {
	  guessedLetters = key.textContent;
	  handleLetterSelection(guessedLetters);
	});
  });
	render();
  }

function startGame() {
	const initGame = (button, clickedLetter) => {
	  if(currentWord.includes(clickedLetter)) {
		[...currentWord].forEach((letter, index) => {
		  if(letter === clickedLetter) {
			guessed.push(letter);
			wordDisplay.querySelectorAll("li")[index].innerText = letter;
			wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
		  }
		});
		} else {
			numLives--;
		  }
	  
		button.disabled = true; // Disabling the clicked button so user can't click again
		livesDisplay.innerText = `${numLives}`;
		// Calling gameOver function if any of these condition meets
		if(wrongGuesses === numLives) return gameOver(false);
		if(guessedLetters.length === currentWord.length) return gameOver(true);
	  }
  }
  
  
  
  function render() {
	// guessedLetters();
	// wrongGuesses();
	// numLives();
  }
