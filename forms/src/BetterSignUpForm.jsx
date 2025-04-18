import { useState } from "react"

export default function BetterSignUpForm() {

    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        password: "",
    })

    const handleChange = (evt) => {
        setFormData((currData) => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            };
        })
    }

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>

            <label htmlFor="firstname"></label>

            <input 
            type="text"
            placeholder="first name"
            value={formData.firstName}
            onChange={handleChange} 
            name="firstName"
            id="firstname"
            />

            <label htmlFor="lastname"></label>

            <input 
            type="text"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
            name ="lastName"
            id="lastname"
            />

            <label htmlFor="password"></label>

            <input 
            type="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            name ="password"
            id="password"
            />

            <hr />
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}
