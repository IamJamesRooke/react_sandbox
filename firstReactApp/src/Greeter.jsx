export default function Greeter({name, from}) {
    return (
        <>
            <h3>Hello {name}!</h3>
            <h4>—{from}.</h4>
        </>
    );
}