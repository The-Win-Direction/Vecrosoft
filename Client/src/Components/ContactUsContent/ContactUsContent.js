import React from "react";
import "./ContactUsContent.css"; 
import image from '../../Assets/Images/contactImage.jpeg';
import image1 from '../../Assets/Images/contact-us.jpeg';
import image2 from '../../Assets/Images/contact-us-image.png';

const ContactUsContent = () => {
    return (
        <div className="contact-us-container">
          <p className="contact-us-description">
            We are here to assist you with any questions or concerns you may have.
            Please don't hesitate to reach out to us. <br/> Your feedback is invaluable,
            and we are committed to providing you with the best support possible.
          </p>
          <img src={image2} alt="Contact Us" className="contact-us-image" />
          <p className="contact-us-additional">
            Your satisfaction is our top priority.
          </p>
        </div>
      );
};

export default ContactUsContent;
