	/*----- state variables -----*/
	let numLives = 6;
	let currentWord;
	let mistakes = 0;
	let guessed = [];


	/*----- cached elements  -----*/
	const keys = document.querySelectorAll('.key');
	const wordDisplay = document.getElementsByClassName('word-display');
	const numLivesDisplay = document.getElementsByClassName('num-lives b');	
	const randomWord = () => {
		//selecting a random word and hint from the wordList
		const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
		currentWord = word;
		document.querySelector(".hint-text b").innerText = hint;
		//creating li of word length and inserting in the wordDisplay
		wordDisplay.innerHTML = word.split("").map(() => `<li class="letter"></li>`).join("");
		numLives = 6;
		displayLives();
	  };

	/*----- event listeners -----*/

	keys.forEach(key => {
		key.addEventListener('click', () => {
		  const selectedLetter = key.textContent;
		  handleLetterSelection(selectedLetter);
		});
	  });


	/*----- functions -----*/
	function handleLetterSelection(selectedLetter) {
		const isCorrectGuess = currentWord.includes(selectedLetter);
	  
		keys.forEach(key => {
		  if (key.textContent === selectedLetter) {
			if (isCorrectGuess) {
			  key.classList.add('correct-guess');
			  updateWordDisplay(selectedLetter)
			} else {
			  key.classList.add('incorrect-guess');
			  decreaseLives();
			}
			key.disabled = true;
		  }
		});
	  
	  }

	  
	init();

	function () {

	render();
	}