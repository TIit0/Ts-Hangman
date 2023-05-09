import "./HangmanWord.css"

type HangManWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
}


export default function HangmanWord({guessedLetters, wordToGuess}: HangManWordProps) {
    
    //const guessedLetters: string[] = ["t"];
    return (
        <div className="word_wrapper">
            {wordToGuess.split("").map((letter, index) => (
                <span
                    className="letter_container"
                    key={`${letter}${index}`}>

                    <span className="letter"
                        style={
                            { visibility: guessedLetters.includes(letter) ? "visible" : "hidden" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}