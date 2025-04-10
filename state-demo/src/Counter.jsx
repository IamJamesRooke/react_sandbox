import { useState } from "react";

export default function Counter() {
    
    const [count, setCount] = useState(0)
    const incrementCount = () => {
        setCount((currentCount) => currentCount + 1)
    }

    const setToTen = () => {setCount(10)}
    
    return(
        <>
        <h1>{count}</h1>
        <button onClick={incrementCount}>+1</button>
        <br></br>
        <button onClick={setToTen}>Set to 10</button>
        </>
    );
}