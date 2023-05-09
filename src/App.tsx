import { useEffect, useState } from "react"; 
import wordList from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";
import "../css/App.css"

function App() {

  const [wordToGuess, setWordToGuess] = useState<string>(
    () => {
    return wordList[Math.floor(Math.random() * wordList.length)]
  }
  );

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key)
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key)
    }

    document.addEventListener("keypress", handler);

    /* clean up function. needs to stay in function */
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [] );

  console.log(wordToGuess)
  return (
    <div className="app_wrapper">
      <div className="app_wrapper__win-lose"> Lose Win </div>
      <HangmanDrawing guesses={incorrectLetters.length}/>

      <HangmanWord
      guessedLetters={guessedLetters}
      wordToGuess={wordToGuess} />

      <div className="keyboard_container">
      <Keyboard />
      </div>
    </div>
  )
}

export default App
