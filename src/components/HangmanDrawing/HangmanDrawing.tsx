import "./HangmanDrawing.css"

const Head = <div className="head" />
const Torso = <div className="torso" />
const RightArm = <div className="rightArm" />
const LeftArm = <div className="leftArm" />
const RightLeg = <div className="rightLeg" />
const LeftLeg = <div className="leftLeg" />

type HangmanDrawingProps = {
    guesses: number;
}

const BODY_PARTS: JSX.Element[] = [Head,Torso,RightArm,LeftArm,RightLeg,LeftLeg,]

export default function HangmanDrawing({guesses}: HangmanDrawingProps) {
console.log(guesses)
    return (
        <div className="drawing_wrapper">
            {BODY_PARTS.slice(0, guesses)}
            <div className="drawing_rope-pole" />
            <div className="drawing_upper-pole" />
            <div className="drawing_center-pole" />
            <div className="drawing_bottom-pole" />
        </div>
    );
}