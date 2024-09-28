import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admins.css";

const baseURL = "http://localhost:4000";

const Admins = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({ fname: "", lname: "", email: "", password: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/admin`, {
          headers: { Authorization: localStorage.getItem("admintoken") },
        });
        setAdmins(response.data.admins);
      } catch (error) {
        setError("Error fetching admins");
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  const handleInputChange = (e) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${baseURL}/api/admin/add`, newAdmin, {
        headers: { Authorization: localStorage.getItem("admintoken") },
      });
      setNewAdmin({ fname: "", lname: "", email: "", password: "" });
      const response = await axios.get(`${baseURL}/api/admin`, {
        headers: { Authorization: localStorage.getItem("admintoken") },
      });
      setAdmins(response.data.admins);
    } catch (error) {
      setError("Error creating admin");
    }
  };

  const handleDeleteAdmin = async (adminId) => {
    try {
      await axios.delete(`${baseURL}/api/admin/${adminId}`, {
        headers: { Authorization: localStorage.getItem("admintoken") },
      });
      const response = await axios.get(`${baseURL}/api/admin`, {
        headers: { Authorization: localStorage.getItem("admintoken") },
      });
      setAdmins(response.data.admins);
    } catch (error) {
      setError("Error deleting admin");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="admins-page">
      <h1>Admins Management</h1>
      <form className="admin-form" onSubmit={handleCreateAdmin}>
        <input type="text" name="fname" value={newAdmin.fname} placeholder="First Name" onChange={handleInputChange} required />
        <input type="text" name="lname" value={newAdmin.lname} placeholder="Last Name" onChange={handleInputChange} required />
        <input type="email" name="email" value={newAdmin.email} placeholder="Email" onChange={handleInputChange} required />
        <input type="password" name="password" value={newAdmin.password} placeholder="Password" onChange={handleInputChange} required />
        <button type="submit">Create Admin</button>
      </form>
      <h2>Existing Admins</h2>
      <ul className="admin-list">
        {admins.map((admin) => (
          <li key={admin._id}>
            {admin.fname} {admin.lname} - {admin.email}
            <button onClick={() => handleDeleteAdmin(admin._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admins;
