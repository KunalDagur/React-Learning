import React, { useState, useContext } from "react";

import UserContext from "../context/userContext";

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <>
            <h2></h2>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="Enter Username"
            />
            {" " + " "}
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Login