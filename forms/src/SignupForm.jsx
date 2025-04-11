import { useState } from "react"

export default function SignUpForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    };

    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    };

    const handleSubmit = () => {
        console.log(firstName, lastName);
    }

    return (
        <div>

            <label htmlFor="firstname"></label>

            <input 
            type="text"
            placeholder="first name"
            value={firstName}
            onChange={updateFirstName} 
            id="firstname"
            />

            <label htmlFor="lastname"></label>

            <input 
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={updateLastName} 
            id="lastname"
            />

            <hr />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}
