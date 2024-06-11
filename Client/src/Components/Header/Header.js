import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../Assets/Images/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Vecrosoft Logo" className="logo" />
        <span className="site-title">Vecrosoft</span>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/article">Article</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/ai">AI</Link>
      </nav>
      <div className="header-right">
        <div className="dropdown">
          <button className="dropbtn">Create ▼</button>
          <div className="dropdown-content">
            <Link to="/create-article">Article</Link>
            <Link to="/create-post">Post</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
