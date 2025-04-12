import { useState, useEffect } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    
    // Runs after every render and the first render
    useEffect(function myEffect() {
        console.log("EFFECT CALLED")
    }, [count]);


    const increment = () => {
        setCount((count) => setCount(count + 1));
    };

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>

            <h2>{name}</h2>
            <input value={name} onChange={handleChange} type="text" />
        </div>
    );
}
