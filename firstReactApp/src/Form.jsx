function handleFormSubmit(evt) {
    evt.preventDefault();
    console.log('Submitted')
}

export default function Form() {
    return (
    <form onSubmit={handleFormSubmit}>
        <button type="submit">Submit</button>
    </form>
    );
}