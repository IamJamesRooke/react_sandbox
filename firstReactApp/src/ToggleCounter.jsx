import './Toggler.css';
import { useState } from "react";

export default function TogglerCounter() {
  
    const [isHappy, setIsHappy] = useState(true)
    const [count, setCount] = useState(0);
    
    const toggleIsHappy = () => setIsHappy(!isHappy);
    const incrementCount = () => setCount(count + 2);
  
    return (
    <div>
        <p className="Toggler" onClick={toggleIsHappy}>
            {isHappy ? '😀' : '😭'}
        </p>
        <p>{count}</p>
        <button onClick={incrementCount}>+</button>
    </div>
  );
}

// Removed inline styles, using external CSS instead