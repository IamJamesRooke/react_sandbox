import { useState } from 'react'

function generateGameBoard() {
  return Array(5000);
}

export default function Dumbo() {
    
    const [board, setBoard] = useState(generateGameBoard);
    
    return (
        <button onClick={() => setBoard("Hello")}>{board}</button>
    );
}