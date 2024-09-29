import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FullArticle.css';

const baseURL = "http://localhost:4000";

const FullArticle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};

  if (!article) {
    return <div>Article not found</div>;
  }

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('admintoken'); 
      if (!token) {
        navigate("/sign-in");
        return;
      }

      await axios.delete(`${baseURL}/api/admin/articles/${article._id}`, {
        headers: {
          'Authorization': token,
        },
      });

      alert('Article deleted successfully');
      navigate('/articles'); 
    } catch (error) {
      console.error('Error deleting article:', error);
      alert('Failed to delete the article');
    }
  };

  return (
    <div className="full-article">
      <Link to="/articles" className="back-button">Back to Articles</Link>
      <h1>{article.heading}</h1>
      <p><strong>Author:</strong> {article.author}</p>
      <p><strong>Published Date:</strong> {new Date(article.createdDate).toLocaleDateString()}</p>
      <img src={`${baseURL}${article.imageUrl}`} alt={article.heading} className="article-image" />
      <pre>{article.content}</pre>

        <button onClick={handleDelete} className="delete-article-button">Delete Article</button>
      
    </div>
  );
};

export default FullArticle;
