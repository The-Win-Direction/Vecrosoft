import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/register', {
                fname,
                lname,
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setMessage(res.data.message);
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred. Please try again.',error);
            }
            console.error("Error during registration:", error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} required />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
