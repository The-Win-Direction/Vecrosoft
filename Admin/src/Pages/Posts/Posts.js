import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../../Components/Post/Post';
import './Posts.css'; 

const baseURL = "http://localhost:4000";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      let token = localStorage.getItem("admintoken");
      if (!token) {
        return; 
      }
      try {
        const response = await axios.get(`${baseURL}/api/admin/posts`, {
          headers: { Authorization: token }
        });

        console.log('Fetched posts:', response.data); 
        setPosts(response.data.posts); 
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const handleDeletePost = async (postId) => {
    let token = localStorage.getItem("admintoken");
    if (!token) return;
    try {
      await axios.delete(`${baseURL}/api/admin/posts/${postId}`, {
        headers: { Authorization: token }
      });
      setPosts(posts.filter(post => post._id !== postId));  
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="posts-container">
      <h1>All Posts</h1>
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post._id} post={post} onDelete={handleDeletePost} />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Posts;
