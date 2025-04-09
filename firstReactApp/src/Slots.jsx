export default function SlotMachine() {
    
    const symbols = ["🍌", "🍌","🍌","🍌", "🍌", "🍒", "🍒", "🍒", "⭐", "⭐"];
    const getRandomSymbol = () => symbols[Math.floor(Math.random() * symbols.length)];
    
    const slot1 = getRandomSymbol();
    const slot2 = getRandomSymbol();
    const slot3 = getRandomSymbol();

    const isWinner = slot1 === slot2 && slot2 === slot3;
    
    return (
        <>
            <div style={{ fontSize: "4rem", textAlign: "center", display: "flex", justifyContent: "center", gap: "1.5rem", fontFamily: "'Segoe UI Emoji', 'Arial', sans-serif" }}>
                <div style={{ backgroundColor: "#f0f0f0", border: "6px solid white", padding: "1.5rem", borderRadius: "12px", color: "black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>{slot1}</div>
                <div style={{ backgroundColor: "#f0f0f0", border: "6px solid white", padding: "1.5rem", borderRadius: "12px", color: "black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>{slot2}</div>
                <div style={{ backgroundColor: "#f0f0f0", border: "6px solid white", padding: "1.5rem", borderRadius: "12px", color: "black", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}>{slot3}</div>
            </div>
            <div style={{ 
                textAlign: "center", 
                marginTop: "1.5rem", 
                color: isWinner ? "green" : "red", 
                fontSize: "2rem", 
                fontWeight: "bold", 
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" 
            }}>
                {isWinner ? "🎉 You Win! 🎉" : "Try Again!"}
            </div>

            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
                <button 
                    onClick={() => window.location.reload()} 
                    style={{ 
                        padding: "0.75rem 1.5rem", 
                        fontSize: "1.5rem", 
                        backgroundColor: "#007bff", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "8px", 
                        cursor: "pointer", 
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" 
                    }}
                >
                    Spin Again
                </button>
            </div>
        </>
    );

}