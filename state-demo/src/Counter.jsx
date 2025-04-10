import { useState } from "react";

export default function Counter() {
    
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount((currentCount) => currentCount + 1)
    }
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+1</button>
        </>
    );
}