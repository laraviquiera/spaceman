#### GAME PLANNING
##### Choice of Game: Spaceman
---
#### PSEUDOCODE

**1. Constants**
- Maximum incorrect guesses
- Secret word and hints

**2. App's State (Variables)**
- Correct guessed letters
- Number of lives left
- Game result
- Play Again button
- Hint Display
- Keyboard Elements/Letters

**3. Cached Elements**
- Current word (Secret word)
- Secret word's hint
- Correct guessed letters
- Wrong guesses

**4. Event Listeners**
- Wait for the user to select a letter then track correct and wrong guesses. Display the correct letter in the placeholder.
- Letters that are used will be inactive.
- Once the game is over, display the Play Again button along with the correct word.

**5. Functions**
- Generate a random word and its hint.
- If the correct letter is selected, display the letter in the placeholder. Otherwise, the number of lives will decrease.
- Check the game status. There are maximum of 6 lives/attempts. - If the secret word was correctly guessed, congratulate the winner and show the Play Again button.