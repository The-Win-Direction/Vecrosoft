import React from "react";
import PropTypes from "prop-types";
import "./ArticlePost.css";
import { useNavigate } from "react-router-dom";

const baseURL = "https://vecrosoft-depl.onrender.com";
// const baseURL = "http://localhost:4000";

const ArticlePost = ({ article, onDelete }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/articles/${article._id}`, { state: { article } });
  };

  const handleDelete = () => {
    onDelete(article._id);
  };

  return (
    <div className="admin-article-post">
      <img
        src={`${baseURL}${article.imageUrl}`}
        alt={article.heading}
        className="article-image"
      />
      <div className="article-details">
        <h3>{article.heading}</h3>
        <p><strong>Author:</strong> {article.author}</p>
        <p><strong>Published Date:</strong> {new Date(article.createdDate).toLocaleDateString()}</p>

        <div className="button-group">
          <button onClick={handleClick} className="read-article-button">
            View Article
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete Article
          </button>
        </div>
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
  onDelete: PropTypes.func.isRequired,
};

export default ArticlePost;
