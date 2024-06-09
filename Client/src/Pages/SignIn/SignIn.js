import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/SignUp', {
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setEmail('');
            setPassword('');

            console.log(res.data.message)
            setMessage(res.data.message);
            
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred. Please try again.',error);
            }
            console.error("Error during SignIn :", error);
        }
    
        
    };

    return (
        <>
        <div>
            <h2>SignUp</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">SignIn</button>
            </form>
            {message && <p>{message}</p>}

        </div>
           
        </>
    );
};

export default SignUp;
