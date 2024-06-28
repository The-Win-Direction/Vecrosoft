import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    profilePic: '',
  });

  useEffect(() => {
    // Fetch user data from the database
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/user');
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profilePic: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/user/update', user);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="profilePic">Profile Picture</label>
          <input type="file" id="profilePic" name="profilePic" onChange={handleImageChange} />
          {user.profilePic && <img src={user.profilePic} alt="Profile" className="profile-pic" />}
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={user.name} onChange={handleChange} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={user.email} onChange={handleChange} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" value={user.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={user.address} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="profession">Profession</label>
          <input type="text" id="profession" name="profession" value={user.profession} onChange={handleChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default UserProfile;
