import { useState } from "react"; 
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

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  console.log(wordToGuess)
  return (
    <div className="app_wrapper">
      <div className="app_wrapper__win-lose"> Lose Win </div>
      <HangmanDrawing />
      <HangmanWord />
      <div className="keyboard_container">
      <Keyboard />
      </div>
    </div>
  )
}

export default App
