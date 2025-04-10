import { useState } from "react";

export default function ScoreKeeper() {
    
    // Score Board Object
    const [scores, setScores] = useState({ 
        p1Score: 0, 
        p2Score: 0,
    });
    
    function increaseScoreP1() {
        
        // We don't mutate arrays. We create a copy with ...
        setScores((oldScores) => {
            return {...oldScores, p1Score: oldScores.p1Score + 1}
        });
    }

    function increaseScoreP2() {
        
        // We don't mutate arrays. We create a copy with ...
        setScores((oldScores) => {
            return {...oldScores, p2Score: oldScores.p2Score + 1}
        });
    }
    
    return (
        <div>
            <h3>Player 1: {scores.p1Score}</h3>
            <h3>Player 2: {scores.p2Score}</h3>
            <button onClick={increaseScoreP1}>+1 Player 1</button>
            <button onClick={increaseScoreP2}>+1 Player 2</button>
        </div>
    );
}