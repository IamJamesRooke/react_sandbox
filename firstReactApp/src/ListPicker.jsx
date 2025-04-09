export default function ListPicker({values}) {
    
    const randIdx = Math.floor(Math.random() * values.length);
    const randElement = values[randIdx]
    
    return (
        <>
            <h3>Full List: {values}</h3>
            <h3>Random Element: {randElement}</h3>
        </>
    )
}