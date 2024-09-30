import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./UsersList.css";

const baseURL = "https://vecrosoft-depl.onrender.com";
// const baseURL = "http://localhost:4000";
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      let token = localStorage.getItem("admintoken");

      if (!token) {
        navigate("/sign-in");
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/api/admin/users`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          }
        });

        setUsers(response.data.users || []);  
        // console.log(response.data.users );  
      } catch (error) {
        console.error("Error fetching users: ", error);
        if (error.response && error.response.status === 401) {
          navigate("/sign-in");
        }
      }
    };
    fetchUsers();
  }, [navigate]);

  const handleDelete = async (userId) => {
    let token = localStorage.getItem("admintoken");
    if (!token) {
      navigate("/sign-in");
      return;
    }

    try {
      await axios.delete(`${baseURL}/api/admin/users/${userId}`, {
        headers: {
          'Authorization': token
        }
      });
      setUsers(users.filter(user => user._id !== userId));
      alert('User deleted successfully!');
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  return (
    <div className="users-list-container">
      <h1>User List</h1>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Profession</th>
            <th >Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.fname} {user.lname}</td>
                <td>{user.email}</td>
                <td>{user.phone_number}</td>
                <td>{user.profession || 'Unspecified'}</td>
                <td >
                  <Link to={`/users/${user._id}`} className="view-button">View Profile</Link>
                  <button onClick={() => handleDelete(user._id)} className="delete-button">
                    Delete User
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
