import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./UserProfile.css";

const baseURL = "http://localhost:4000";

const UserProfile = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      let token = localStorage.getItem("admintoken");
      if (!token) {
        navigate("/sign-in");
        return;
      }
      try {
        const response = await axios.get(`${baseURL}/api/admin/users/${userId}`, {
          headers: {
            'Authorization': token
          }
        });
        setUser(response.data.user);
        setPosts(response.data.posts);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    fetchUserData();
  }, [navigate, userId]);

  const handleDeletePost = async (postId) => {
    let token = localStorage.getItem("admintoken");
    if (!token) return;

    try {
      await axios.delete(`${baseURL}/api/admin/posts/${postId}`, {
        headers: {
          'Authorization': token
        }
      });
      setPosts(posts.filter(post => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post: ", error);
    }
  };

  const handleDeleteArticle = async (articleId) => {
    let token = localStorage.getItem("admintoken");
    if (!token) return;

    try {
      await axios.delete(`${baseURL}/api/admin/articles/${articleId}`, {
        headers: {
          'Authorization': token
        }
      });
      setArticles(articles.filter(article => article._id !== articleId));
    } catch (error) {
      console.error("Error deleting article: ", error);
    }
  };

  return (
    <div className="user-profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <img src={`${baseURL}${user.profile_pic_url}`} alt="Profile" className="profile-pic" />
        <p><strong>Name:</strong> {user.fname} {user.lname}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Bio:</strong> {user.bio || 'No bio provided'}</p>
        <p><strong>Profession:</strong> {user.profession || 'Unspecified'}</p>
        <p><strong>Phone Number:</strong> {user.phone_number}</p>
      </div>
      
      <h2>Posts</h2>
      <div className="posts-section">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post._id} className="post">
              <p>{post.content}</p>
              {post.imageUrl && <img src={`${baseURL}${post.imageUrl}`} alt="Post" className="post-image" />}
              <button className="delete-button" onClick={() => handleDeletePost(post._id)}>Delete Post</button>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>

      <h2>Articles</h2>
      <div className="articles-section">
        {articles.length > 0 ? (
          articles.map(article => (
            <div key={article._id} className="article">
              {article.imageUrl && <img src={`${baseURL}${article.imageUrl}`} alt="Article" className="article-image" />}
              <h3>{article.heading}</h3>
              <p><strong>Author:</strong> {article.author}</p>
              <p>{article.content}</p>
              <button className="delete-button" onClick={() => handleDeleteArticle(article._id)}>Delete Article</button>
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
