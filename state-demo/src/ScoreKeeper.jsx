import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 2 }) {
    // Initialize scores array with 0 for each player
    const [scores, setScores] = useState(Array(numPlayers).fill(0));

    function increaseScore(playerIndex) {
        // Update the score for the specific player
        setScores((oldScores) => {
            const newScores = [...oldScores];
            newScores[playerIndex] += 1;
            return newScores;
        });
    }

    return (
        <div>
            {scores.map((score, index) => (
                <div key={index}>
                    <h3>Player {index + 1}: {score}</h3>
                    <button onClick={() => increaseScore(index)}>+</button>
                </div>
            ))}
        </div>
    );
}
