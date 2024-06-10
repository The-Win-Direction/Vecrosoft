import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../Assets/Images/logo.png';

const Header = () => {
    const location = useLocation();
    const hideNav = location.pathname === '/SignIn' || location.pathname === '/SignUp';

    return (
        <header className="header">
            <div className="header-top">
                <div className="logo-box">
                    <img src={logo} alt="Vecrosoft Logo" />
                    <h1>Vecrosoft</h1>
                </div>
            </div>
            {!hideNav && (
                <div className="navbar">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/AboutUs">About Us</Link>
                        <Link to="/Ai">AI</Link>
                        <Link to="/Chat">Chat</Link>
                        <Link to="/Article">Articles</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
