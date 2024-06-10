import React, { useState } from 'react';
import "./SignIn.css";
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4000/SignIn', {
                email,
                password
            },{
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setEmail('');
            setPassword('');

            console.log(res.data.message);
            setMessage(res.data.message);
            
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred. Please try again.', error);
            }
            console.error("Error during SignIn:", error);
        }
    };

    return (
        <div className='signin-container'>
            <h2 className='signin-title'>SignIn</h2>
            <form className='signin-form' onSubmit={handleSubmit}>
                <div className='signin-field'>
                    <label className='signin-label'>Email:</label>
                    <input className='signin-input' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className='signin-field'>
                    <label className='signin-label'>Password:</label>
                    <div className='signin-password'>
                        <input
                            className='signin-input'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            className='signin-show-password'
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button className='signin-button' type="submit">SignIn</button>
            </form>
            {message && <p className='signin-message'>{message}</p>}

            <div className='signin-signup-link'>
                <p>
                    Don't have an account? &nbsp;
                    <Link to="/SignUp">SignUp here!</Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
