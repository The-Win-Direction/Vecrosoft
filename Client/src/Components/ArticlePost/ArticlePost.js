import React from 'react';
import PropTypes from 'prop-types';
import './ArticlePost.css';
import { Link } from 'react-router-dom';

const ArticlePost = ({ article }) => {
  return (
    <div className="article-post">
      <img src={article.imageUrl} alt={article.topic} className="article-image" />
      <div className="article-details">
        <h3>{article.topic}</h3>
        <p><strong>Author:</strong> {article.author}</p>
        <p><strong>Published Date:</strong> {article.date}</p>
        <Link to={`/article/${article.id}`} className="read-article-button">Read Article</Link>
      </div>
    </div>
  ); 
};
 
ArticlePost.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    topic: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticlePost;
