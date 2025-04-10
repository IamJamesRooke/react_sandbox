import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);

    const incrementCounter = () => setNum(num + 1);
    const resetCounter = () => setNum(0); // Optional reset functionality

    return (
        <section>
            <h2>Counter: {num}</h2>
            <button onClick={incrementCounter} aria-label="Increment counter">+</button>
            <button onClick={resetCounter} aria-label="Reset counter">Reset</button>
        </section>
    );
}

