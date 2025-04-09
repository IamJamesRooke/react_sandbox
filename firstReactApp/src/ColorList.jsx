export default function ColorList({colors}) { 
    return (
        <div>
            <ul>
                {colors.map((color) => (
                    <li style={{color: color}}>{color}</li>
                ))}
            </ul>
        </div>
    );
}