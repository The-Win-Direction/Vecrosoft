import React from "react";
import PropTypes from "prop-types";
import "./ArticlePost.css";
import { useNavigate } from "react-router-dom";

const baseURL = "https://vecrosoft-server.onrender.com";

const ArticlePost = ({ article, user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article._id}`, { state: { article, user } });
  };

  return (
    <div className="article-post">
      <img
        src={`${baseURL}${article.imageUrl}`}
        alt={article.heading}
        className="article-image"
      />
      <div className="article-details">
        <h3>{article.heading}</h3>
        <p>
          <strong>Author:</strong> {article.author}
        </p>
        <p>
          <strong>Published Date:</strong> {new Date(article.createdDate).toLocaleDateString()}
        </p>
        <button onClick={handleClick} className="read-article-button">
          Read Article
        </button>
      </div>
    </div>
  ); 
};

ArticlePost.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdDate: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.string.isRequired,
};

export default ArticlePost;
