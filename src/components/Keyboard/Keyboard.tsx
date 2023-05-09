import "./Keyboard.css";

const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]

type KeyboardProps = {
    activeLetters: string[];
    inactiveLetters: string[];
    addGuessedLetter: (letter: string) => void;
    disabled?: boolean;
}


export default function Keyboard(
    { activeLetters, inactiveLetters, addGuessedLetter, disabled = false }: KeyboardProps
) {
    return (
        <div className="grid">
            {KEYS.map((letter, index) => {
                const isActive = activeLetters.includes(letter);
                const isInactive = inactiveLetters.includes(letter);
                return (
                    <button
                        onClick={() => addGuessedLetter(letter)}
                        className={`keyboard_button ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""}`}
                        disabled={isActive || isInactive || disabled}
                        key={`${letter}${index}`}
                    >{letter}
                    </button>
                )

            })}
        </div>
    );
}