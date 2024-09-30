import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Contact.css";

const baseURL = "https://vecrosoft-depl.onrender.com";
// const baseURL = "http://localhost:4000";
const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [currentContact, setCurrentContact] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      const token = localStorage.getItem("admintoken");
      if (!token) {
        navigate("/sign-in");
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/api/admin/contacts`, {
          headers: { Authorization: token },
        });
        setContacts(response.data.contacts);
      } catch (error) {
        setError("Error fetching contacts");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, [navigate]);

  const deleteContact = async (contactId) => {
    const token = localStorage.getItem("admintoken");
    if (!token) {
      setError("Unauthorized access. Please log in.");
      return;
    }

    try {
      await axios.delete(`${baseURL}/api/admin/contacts/${contactId}`, {
        headers: { Authorization: token },
      });
      setContacts(contacts.filter(contact => contact._id !== contactId));
    } catch (error) {
      setError("Error deleting contact");
    }
  };

  const sendEmail = async () => {
    const token = localStorage.getItem("admintoken");
    if (!token || !currentContact) {
      setError("Unauthorized access. Please log in.");
      return;
    }

    const emailData = {
      email: currentContact.email,
      message: replyMessage,
    };

    try {
      await axios.post(`${baseURL}/api/admin/send-email`, emailData, {
        headers: { Authorization: token },
      });
      alert("Email sent successfully!");
      setIsModalOpen(false);
      setReplyMessage("");
    } catch (error) {
      setError("Error sending email.");
    }
  };

  const openReplyModal = (contact) => {
    setCurrentContact(contact);
    setIsModalOpen(true);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="admin-contact-page">
      <div className="admin-contact-content">
        <h1>Contact Requests</h1>
        <ul className="contact-list">
          {contacts.map(contact => (
            <li key={contact._id} className="contact-item">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <button className="reply-button" onClick={() => openReplyModal(contact)}>
                Reply
              </button>
              <button className="delete-button" onClick={() => deleteContact(contact._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Reply to {currentContact?.name}</h2>
            <textarea
              value={replyMessage}
              onChange={(e) => setReplyMessage(e.target.value)}
              placeholder="Type your reply message here..."
            />
            <div className="modal-actions">
              <button onClick={sendEmail}>Send</button>
              <button onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
