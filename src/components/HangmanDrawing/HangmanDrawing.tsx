import "./HangmanDrawing.css"

const Head = <div className="head" />
const Torso = <div className="torso" />
const RightArm = <div className="rightArm" />
const LeftArm = <div className="leftArm" />

export default function HangmanDrawing() {

    return (
        <div className="drawing_wrapper">
            {Head}
            {Torso}
            {RightArm}
            {LeftArm}
            <div className="drawing_rope-pole" />
            <div className="drawing_upper-pole" />
            <div className="drawing_center-pole" />
            <div className="drawing_bottom-pole" />
        </div>
    );
}