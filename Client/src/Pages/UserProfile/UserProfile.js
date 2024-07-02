import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'Your name',
    email: 'Your gmail',
    phone: '',
    address: '',
    profession: '',
    profilePic: '',
    signUpDate: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('posts'); // Default to "posts"
  const [userPosts, setUserPosts] = useState([]);
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const userResponse = await axios.get('/api/user');
        setUser(userResponse.data);
        
        const postsResponse = await axios.get('/api/user/posts');
        setUserPosts(postsResponse.data);
        
        const articlesResponse = await axios.get('/api/user/articles');
        setUserArticles(articlesResponse.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
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
          <h1>{user.name}</h1>
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
        <>
          <div className="profile-details">
            <h2>General Information</h2>
            <p><strong>Account Created:</strong> {user.signUpDate}</p>
            <p><strong>Phone Number:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address}</p>
            
            <h2>User Background</h2>
            <p><strong>Profession:</strong> {user.profession}</p>
          </div>
          
          <div className="profile-tabs">
            <button
              className={`tab-button ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Posts
            </button>
            <button
              className={`tab-button ${activeTab === 'articles' ? 'active' : ''}`}
              onClick={() => setActiveTab('articles')}
            >
              Articles
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'posts' && (
              <div className="posts-section">
                {userPosts.map(post => (
                  <div key={post.id} className="post-item">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'articles' && (
              <div className="articles-section">
                {userArticles.map(article => (
                  <div key={article.id} className="article-item">
                    <h3>{article.title}</h3>
                    <p>{article.content}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
