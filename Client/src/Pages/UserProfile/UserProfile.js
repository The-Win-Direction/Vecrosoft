import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";

const baseURL = "http://localhost:4000";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    _id: "",
    fname: "",
    lname: "",
    email: "",
    created_at: "",
    updated_at: "",
    bio: "",
    phone_number: "",
    profession: "",
    profile_pic_url: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("posts");
  const [userPosts, setUserPosts] = useState([]);
  const [userArticles, setUserArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem("userdatatoken");
      if (!token) {
        navigate("/sign-in");
        return;
      }
      try {
        const response = await axios.get(`${baseURL}/api/profile`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        });
        const { user, posts, articles } = response.data;
        setUser({
          _id: user._id,
          fname: user.fname,
          lname: user.lname,
          email: user.email,
          created_at: user.created_at,
          updated_at: user.updated_at,
          bio: user.bio,
          phone_number: user.phone_number,
          profession: user.profession,
          profile_pic_url: `${baseURL}${user.profile_pic_url}`,
        });
        setUserPosts(posts);
        setUserArticles(articles);
      } catch (error) {
        console.error("Error fetching profile data: ", error);
      }
    };
    fetchData();
  }, [navigate]);

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
      if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser((prevUser) => ({
          ...prevUser,
          profile_pic_url: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phone_number", user.phone_number);
    formData.append("bio", user.bio);
    formData.append("profession", user.profession);
    if (user.profile_pic_url.startsWith("data:")) {
      const blob = await fetch(user.profile_pic_url).then((res) => res.blob());
      formData.append("profile_pic_url", blob, "profile_pic.png");
    }
    let token = localStorage.getItem("userdatatoken");
    try {
      await axios.post(`${baseURL}/api/user/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });
      setIsEditing(false);
      alert("Profile updated successfully!");
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
          <img
            src={user.profile_pic_url}
            alt="Profile"
            className="profile-pic"
          />
          <p className="username">{`${user.fname} ${user.lname}`}</p>
          <p>{user.email}</p>
        </div>
        {!isEditing && (
          <button className="edit-button" onClick={() => setIsEditing(true)}>
            Edit Profile
          </button>
        )}
      </div>

      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="fname">First name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={user.fname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={user.lname}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profile_pic_url">Profile Picture</label>
            <input
              type="file"
              id="profile_pic_url"
              name="profile_pic_url"
              onChange={handleImageChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={user.phone_number}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={user.bio}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={user.profession}
              onChange={handleChange}
            />
          </div>
          <div className="form-buttons">
            <button
              type="button"
              onClick={handleCancel}
              className="cancel-button"
            >
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="profile-details">
            <h2>General Information</h2>
            <p>
              <strong>Account Created:</strong>{" "}
              {new Date(user.created_at).toLocaleDateString()}
            </p>
            <p>
              <strong>Phone Number:</strong> {user.phone_number}
            </p>

            <h2>User Background</h2>
            <p>
              <strong>Bio:</strong> {user.bio || "No bio provided"}
            </p>
            <p>
              <strong>Profession:</strong> {user.profession || "Unspecified"}
            </p>
          </div>

          {/* Tabs for Posts and Articles */}
          <div className="profile-tabs">
            <button
              className={`tab-button ${activeTab === "posts" ? "active" : ""}`}
              onClick={() => setActiveTab("posts")}
            >
              Posts
            </button>
            <button
              className={`tab-button ${
                activeTab === "articles" ? "active" : ""
              }`}
              onClick={() => setActiveTab("articles")}
            >
              Articles
            </button>
          </div>

          {/* Display posts or articles based on the active tab */}
          <div className="tab-content">
            {activeTab === "posts" && (
              <div className="posts-section">
                {userPosts.length > 0 ? (
                  userPosts.map((post) => (
                    <div key={post._id} className="post-item">
                      {post.imageUrl && (
                        <img
                          src={`${baseURL}${post.imageUrl}`}
                          alt="Post"
                          className="post-image"
                        />
                      )}
                      <p>{post.content}</p>
                      <p>
                        <strong>Likes:</strong> {post.likes.length}
                      </p>
                      <p>
                        <strong>Comments:</strong> {post.comments.length}
                      </p>
                    </div>
                  ))
                ) : (
                  <p>No posts available.</p>
                )}
              </div>
            )}
            {activeTab === "articles" && (
              <div className="articles-section">
                {userArticles.length > 0 ? (
                  userArticles.map((article) => (
                    <div key={article._id} className="article-item">
                      {article.imageUrl && (
                        <img
                          src={`${baseURL}${article.imageUrl}`}
                          alt="Article"
                          className="article-image"
                        />
                      )}
                      <h3>{article.heading}</h3>
                      <p>{article.content}</p>
                      <p>
                        <strong>Author:</strong> {article.author}
                      </p>
                    
                    </div>
                  ))
                ) : (
                  <p>No articles available.</p>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
