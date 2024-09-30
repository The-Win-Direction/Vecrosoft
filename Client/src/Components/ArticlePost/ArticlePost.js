import React from "react";
import PropTypes from "prop-types";
import "./ArticlePost.css";
import { useNavigate } from "react-router-dom";

const baseURL = "https://vecrosoft-depl.onrender.com";
// const baseURL = "http://localhost:4000";
const ArticlePost = ({ article, user, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/article/${article._id}`, { state: { article, user } });
  };

  const handleDelete = () => {
    onDelete(article._id);
  };

  return (
    <div className="article-post">
      <button className="delete-button" onClick={handleDelete}>✖</button>
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
  onDelete: PropTypes.func.isRequired,
};

export default ArticlePost;
