import React from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import './HeaderDesktop.css';
import logo from "../../Assets/Images/logo.png";
import  { useState } from "react";

const HeaderDesktop = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  let fname=localStorage.getItem("adminfname")
  let lname=localStorage.getItem("adminlname")

  const logOutClickHandler = (e) => {
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminId");
    localStorage.removeItem("adminfname");
    localStorage.removeItem("adminlname");
    navigate("/sign-in");
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <header className="header-desktop">
      <div className="header-left">
        <img src={logo} alt="Vecrosoft Logo" className="logo" />
        <span className="site-title">Vecrosoft</span>
      </div>
      <nav className="nav">
        <NavLink to="/" active={location.pathname === '/'}>Home</NavLink>
        <NavLink to="/admins" active={location.pathname === '/admins'}>Admins</NavLink>
        <NavLink to="/articles" active={location.pathname === '/articles'}>Articles</NavLink>
        <NavLink to="/contact" active={location.pathname === '/contact'}>Contact</NavLink>
        <NavLink to="/posts" active={location.pathname === '/posts'}>Posts</NavLink>
        <NavLink to="/users" active={location.pathname === '/users'}>Users</NavLink>
      </nav>
      <div className="admin-name" onClick={toggleProfileDropdown}>
          <p>{(fname||" ")+" "+(lname||" ")}</p>
          {profileDropdownOpen && (
            <div>
              <div onClick={logOutClickHandler}>
                Log Out
              </div>
            </div>
          )}
        </div>
     
    </header>
  );
};

const NavLink = ({ to, active, children }) => (
  <Link to={to} className={`nav-link ${active ? 'active' : ''}`}>
    <span className="nav-text">{children}</span>
  </Link>
);

export default HeaderDesktop;
