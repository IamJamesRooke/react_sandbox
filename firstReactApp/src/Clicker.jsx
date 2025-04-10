function handleClick() {
    console.log('Click')
}

function handleHover() {
    console.log('That tickles!')
}

export default function Clicker () {
    return (
        <>
            <h3 onMouseOver={handleHover}>Hover Over Me</h3>
            <button onClick={handleClick}>Click Me</button>

        </>
    );
}