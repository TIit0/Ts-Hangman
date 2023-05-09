import "./HangmanWord.css"

type HangManWordProps = {
    guessedLetters: string[];
    wordToGuess: string;
    reveal?: boolean;
}


export default function HangmanWord({guessedLetters, wordToGuess, reveal = false}: HangManWordProps) {
    
    //const guessedLetters: string[] = ["t"];
    return (
        <div className="word_wrapper">
            {wordToGuess.split("").map((letter, index) => (
                <span
                    className="letter_container"
                    key={`${letter}${index}`}>

                    <span className="letter"
                        style={
                            { visibility: guessedLetters.includes(letter) || reveal ? "visible" : "hidden",
                            
                            color: !guessedLetters.includes(letter) && reveal ? "red" : "black" }}>
                        {letter}
                    </span>
                </span>
            ))}
        </div>
    );
}