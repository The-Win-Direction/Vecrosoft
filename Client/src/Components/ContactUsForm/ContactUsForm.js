import React, { useState } from 'react';
import './ContactUsForm.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');


  const handleChange = (e) => {
    setFormStatus('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = localStorage.getItem("userdatatoken");
      const response = await fetch('http://localhost:4000/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
        body: JSON.stringify(formData),
      });


      const result = await response.json();

      if (result.success) {
        setFormStatus('Email sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        setFormStatus('Failed to send email.');
      }
    } catch (error) {
      console.error('Error:', error);
      setFormStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-us-form-container">
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
            <p>9864619901</p>
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write Message"
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        {formStatus && <p>{formStatus}</p>}
      </div>
    </div>
  );
};

export default ContactUsForm;
