import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("User signed up successfully!");
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <h2>Sign Up</h2>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default Signup;