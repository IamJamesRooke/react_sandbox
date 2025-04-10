import './Toggler.css';
import { useState } from "react";

export default function Toggler() {
  
    const [isHappy, setIsHappy] = useState(true)
    const toggleIsHappy = () => setIsHappy(!isHappy);
  
    return (
    <>
        <p className="Toggler" onMouseEnter={toggleIsHappy}>
            {isHappy ? '😀' : '😭'}
        </p>
    </>
  );
}

// Removed inline styles, using external CSS instead