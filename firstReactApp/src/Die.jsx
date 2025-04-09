export default function Die({numDice = 1, numSides = 6}) {
    const roll = Array.from({ length: numDice })
        .reduce((total) => total + Math.floor(Math.random() * numSides) + 1, 0);
    
    return <h3>{numDice}d{numSides}: {roll}</h3>
}