import React from "react";
import ContactUsContent from "../../Components/ContactUsContent/ContactUsContent";
import ContactUsForm from "../../Components/ContactUsForm/ContactUsForm";
import "./ContactUs.css"; 

const ContactUs = () => {
  return (
    <div className="contact-page-container">
      <h1 className="center">Contact Us</h1>
      <div className="contact-page-content">
        <ContactUsForm />
        <ContactUsContent />
      </div>
    </div>
  );
};

export default ContactUs;
