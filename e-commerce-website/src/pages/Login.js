import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("User logged in successfully!");
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;