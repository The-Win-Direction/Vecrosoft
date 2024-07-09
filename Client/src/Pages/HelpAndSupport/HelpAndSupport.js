import React from 'react';
import './HelpAndSupport.css';
import Footer from "../../Components/Footer/Footer";

const HelpAndSupport = () => {
  return (
    <>
      <div className="help-container">
        <p>Help and Support</p>
        <div className="help-section">
          <p>Plant Disease Detection</p>
          <p>To ensure accurate disease detection, please follow these guidelines when uploading images of plant leaves:</p>
          <ul>
            <li>Upload a clear picture of a single leaf.</li>
            <li>The leaf should be well-focused and free from obstructions.</li>
            <li>Only leaves from the following plants are currently supported: potato, tomato, maize, and more as we update our dataset.</li>
          </ul>
        </div>
        <div className="help-section">
          <h2>Creating Posts</h2>
          <p>You can share your content by creating a post with an image. Here's how:</p>
          <ul>
            <li>Click on the "Create" button.</li>
            <li>Select the option to create a post or an article.</li>
            <li>Follow the prompts to upload an image and add your content.</li>
            <li>Submit your post to share it with the community.</li>
          </ul>
        </div>
        <div className="help-section">
          <h2>Additional Features</h2>
          <p>Our platform offers a variety of features to enhance your experience:</p>
          <ul>
            <li>Interact with other users by commenting on posts.</li>
            <li>Like posts to show your appreciation.</li>
            <li>Access a curated list of articles for the latest updates and information.</li>
            <li>Utilize the AI chat feature to ask questions and get instant responses.</li>
          </ul>
        </div>
        <div className="help-section">
          <h2>Contact Us</h2>
          <p>If you need further assistance, please contact our support team:</p>
          <ul>
            <li>Email: projectvecrosoft@gmail.com</li>
            <li>Phone: 9864311321</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpAndSupport;
