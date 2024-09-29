import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from "../../Components/Post/Post";
import "./Home.css";
import SidebarDekstop from '../../Components/SidebarDesktop/SidebarDesktop';
import { useNavigate } from 'react-router-dom';
const baseURL = "http://localhost:4000";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPosts = async () => {
      const token = localStorage.getItem('userdatatoken');
      
      if (!token) {
        navigate("/sign-in");
        return;
      }

      try {
        const response = await axios.get(`${baseURL}/api/get-posts`, {
          headers: {
            'Authorization': token,
          },
        });
       
        setUser(response.data.userId);
        setPosts(response.data.posts);
      } catch (error) {
        setError('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [navigate]);

  const handleDelete = (postId) => {
    setPosts(posts.filter(post => post._id !== postId));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home">
      <div className="sidebar-container">
        <SidebarDekstop />
      </div>
      <div className="home-content">
      
        {posts.map((post) => (
          <Post key={post._id} post={post} user={user} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default Home;
