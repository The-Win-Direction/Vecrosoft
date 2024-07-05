import React from 'react';
import './ContactUs.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <div>
            <h3>Address</h3>
            <p>Mahendranagar</p>
          </div>
        </div>
        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>9800060112</p>
          </div>
        </div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>projectvecrosoft@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h3>Send us a message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
