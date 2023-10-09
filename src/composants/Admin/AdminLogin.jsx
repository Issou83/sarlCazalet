import React, { useState } from 'react';

function AdminLogin({ onAuthenticationSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3001/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            onAuthenticationSuccess();
        } else {
            setErrorMessage(data.message);
        }
    }

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {errorMessage && <p>{errorMessage}</p>}
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
}

export default AdminLogin;
