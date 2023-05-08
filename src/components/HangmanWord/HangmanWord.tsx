import "./HangmanWord.css"


export default function HangmanWord() {
    const word = "Test".toLowerCase()
    const guessedLetters: string[] = ["t"];
    return (
        <div className="word_wrapper">
            {word.split("").map((letter, index) => (
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