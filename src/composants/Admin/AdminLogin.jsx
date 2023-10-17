import React, { useState } from 'react';
import "./AdminLogin.css"

function AdminLogin({ onAuthenticationSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch("https://api-cazalet.vercel.app/auth", {
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
        <div className='loginAdmin'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nom: </label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={e => setUsername(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Mot de passe: </label>
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
