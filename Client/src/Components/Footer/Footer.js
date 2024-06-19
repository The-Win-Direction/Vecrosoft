import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'; 


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left"> 
        <h3>उर्वर बारी किसानको गहना,<br/>
        स्वस्थ खेती हाम्रो चाहना।</h3>
        <p>&copy; 2024 Vecrosoft. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <div className="contact ">
          <a href="/contact-us" className='contact-us'>Contact us</a>
        
          <a href="mailto:your-email@example.com"><FaEnvelope /></a>
        </div>
        <div className="footer-links">
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/general-terms-and-conditions">General Terms and Conditions</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/cookie-policy">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
