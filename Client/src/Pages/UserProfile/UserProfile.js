import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Your Name',
    email: 'Your gmail',
    phone: '',
    address: '',
    profession: '',
    profilePic: '',
    signUpDate: '',
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
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
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src={user.profilePic || 'default-profile-pic.jpg'} alt="Profile" className="profile-pic" />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        {!isEditing && (
          <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
        )}
      </div>
      
      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="profilePic">Profile Picture</label>
            <input type="file" id="profilePic" name="profilePic" onChange={handleImageChange} />
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
          <div className="form-buttons">
            <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
            <button type="submit" className="save-button">Save Changes</button>
          </div>
        </form>
      ) : (
        <div className="profile-details">
        <div>  <h2>General Information</h2>
          <p><strong>Account Created:</strong> {user.signUpDate}</p>
          <p><strong>Phone Number:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
         </div> 
         <div>
          <h2>User Background</h2>
          <p><strong>Profession:</strong> {user.profession}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
