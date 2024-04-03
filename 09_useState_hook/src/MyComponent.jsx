/* eslint-disable no-unused-vars */

import React, {useState} from "react";

function MyComponent() {

    const[name, setName] = useState("Guest");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);  // hook can be used multiple times

    const updateName = () => {
        const newName = "Soumyadip";
        setName(newName);
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return (
        <>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Employee Status</button>
        </>
    );
}

export default MyComponent;