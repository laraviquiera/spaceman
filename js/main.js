	/*----- state variables -----*/
	let numLives = 6;
	let currentWord;
	let mistakes = 0;
	let guessed = [];


	/*----- cached elements  -----*/
	const keys = document.querySelectorAll('.key');
	const wordDisplay = document.querySelector('.word-display');
	const numLivesDisplay = document.querySelector('.num-lives b');	
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


	/*----- functions -----*/
	init();

	function () {

	render();
	}