import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();
    const hideNav = location.pathname === '/login' || location.pathname === '/signup';

    return (
        <header className="header">
            <div className="header-top">
                <div className="logo-box">
                    <img src="" alt="Vecrosoft Logo" />
                    <h1>Vecrosoft</h1>
                </div>
            </div>
            {!hideNav && (
                <div className="navbar">
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about-us">About Us</Link>
                        <Link to="/ai">AI</Link>
                        <Link to="/chat">Chat</Link>
                        <Link to="/articles">Articles</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
