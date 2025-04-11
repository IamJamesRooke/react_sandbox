import { useState } from "react"
import { getRolls } from './utils'
import Dice from "./Dice";

export default function LuckyN({ title="Dice Game", numDice=2, winCheck }) {
    
    const [dice, setDice] = useState(getRolls(numDice));
    const isWinner = winCheck(dice);
    const roll = () => setDice(getRolls(numDice));
  
    return (
        <main className="LuckyN">
            <h1>{title}</h1>
            <Dice dice={dice} />
            <button onClick={roll}>Roll</button>
            <h2>{isWinner && "You Win!"}</h2>
        </main>
  )
}
