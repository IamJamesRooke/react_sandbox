import { useState } from "react"

export default function UsernameForm() {

    const [username, setUsername] = useState("username")

    const updateUsername = (evt) => {
        setUsername(evt.target.value);
    }

    return (
        <div>

            <label htmlFor="username"></label>

            <input 
            type="text"
            placeholder="username"
            value={username}
            onChange={updateUsername} 
            id="username"
            />

            <button>Submit</button>

        </div>
    )
}
