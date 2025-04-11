import "./Button.css"

export default function Button({ clickFunc, label = "Roll" }) {
    return (
        <button onClick={ clickFunc } className="Button">{label}</button>
    )

}