export default function DoubleDiceDynamic() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 == num2;
    
    const styles = {
        color: isWinner ? "#00FF00" : "#FF4500", 
        fontSize: "40px"
    };
    
    return (
        <div className="DoubleDice" style = {styles}>
            {num1 === num2 ? <h2>You Win 😀</h2> : <h2>You Lose 😭</h2>}   
            <p><strong>Die 1:</strong> {num1}</p>
            <p><strong>Die 2:</strong> {num2}</p>
        </div>
    );
}