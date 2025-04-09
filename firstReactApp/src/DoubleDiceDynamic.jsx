export default function DoubleDiceDynamic() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    
    return (
        <>
            {/* {num1 === num2 ? <h2>You Win 😀</h2> : <h2>You Lose 😭</h2>}    */}
            {num1 === num2 && <h2>You Win 😀</h2>}
            <p><strong>Num1:</strong> {num1}</p>
            <p><strong>Num2:</strong> {num2}</p>
        </>
    );
}