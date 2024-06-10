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

            console.log(res.data.message);
            setMessage(res.data.message);
            
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data.error);
            } else {
                setMessage('An error occurred. Please try again.', error);
            }
            console.error("Error during SignIn :", error);
        }
    };

    return (
        
        <div className='signInUp'>
            <h2>SignIn</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password:</label>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{ marginLeft: '5px' }}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </div>
                <button type="submit">SignIn</button>
            </form>
            {message && <p>{message}</p>}

            <div>
              <p>
                Don't have an account? &nbsp;
                <Link to="/SignUp">SignUp here!</Link>
              </p>
            </div>
        </div>
        
    );
};

export default SignIn;
