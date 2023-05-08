import "./Keyboard.css";

const KEYS = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]


export default function Keyboard() {
    return (
        <div className="grid">
            {KEYS.map((letter, index) => {

                return <button
                    className={`keyboard_button`}
                    key={`${letter}${index}`}
                >{letter}
                </button>

            })}
        </div>
    );
}