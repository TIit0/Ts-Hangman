import { useCallback, useEffect, useState } from "react";
import wordList from "./wordList.json";
import HangmanDrawing from "./components/HangmanDrawing/HangmanDrawing";
import HangmanWord from "./components/HangmanWord/HangmanWord";
import Keyboard from "./components/Keyboard/Keyboard";
import "../css/App.css"


function getWord() {
  return wordList[Math.floor(Math.random() * wordList.length)]
}

function App() {

  const [wordToGuess, setWordToGuess] = useState<string>(getWord);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter));

  const isLooser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isLooser || isWinner) return;

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isWinner, isLooser])


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
  }, [guessedLetters]);


  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      console.log(key)
      if (key !== "Enter") return;

      e.preventDefault();
      setGuessedLetters([])
      setWordToGuess(getWord());
    }

    document.addEventListener("keypress", handler);

    /* clean up function. needs to stay in function */
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters]);



  return (
    <div className="app_wrapper">
      <div className="app_wrapper__win-lose">
        {isWinner ? "You Won press enter to play again" : "" || isLooser ? "You lost press enter to play again" : ""}
      </div>
      <HangmanDrawing guesses={incorrectLetters.length} />

      <HangmanWord
      reveal={isLooser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess} />

      <div className="keyboard_container">
        <Keyboard
          disabled={isWinner || isLooser}
          activeLetters={guessedLetters.filter(
            letter => wordToGuess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  )
}

export default App
