import { useState } from "react"

export default function BetterSignUpForm() {

    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "",
        password: "",
    })

    const handleChange = (evt) => {
        const changedField = evt.target.name;
        const newValue = evt.target.value;
        setFormData((currData) => {
            currData[changedField] = newValue;
            return {...currData};
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
