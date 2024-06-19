import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import logo from "../../Assets/Images/logo.png";
import { FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-logo">
          <img src={logo} alt="Vecrosoft Logo" className="logo" />
        </div>
        <div className="footer-section footer-content">
          <h3>उर्वर बारी किसानको गहना,<br /> स्वस्थ खेती हाम्रो चाहना।</h3>
        </div>
        <div className="footer-section footer-links">
          <div className="contact">
            <Link to="/contact-us" className='contact-us'>Contact us</Link>
            <a href="mailto:your-email@example.com" className='email-icon'><FaEnvelope /></a>
          </div>
          <div className="links">
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/general-terms-and-conditions">General Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Vecrosoft. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
