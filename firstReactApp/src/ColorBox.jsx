import React from 'react';

function ColorBox() {
const [colors, setColors] = React.useState(Array.from({ length: 25 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`));

const regenerateColors = () => {
    setColors(Array.from({ length: 25 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`));
};

return (
    <div>
        <button onClick={regenerateColors} style={{ marginBottom: '10px' }}>Regenerate Colors</button>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
            {colors.map((color, index) => (
                <div
                    key={index}
                    style={{
                        width: '50px',
                        height: '50px',
                        backgroundColor: color,
                    }}
                ></div>
            ))}
        </div>
    </div>
);
}

export default ColorBox