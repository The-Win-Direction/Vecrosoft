import React from 'react';
import PropTypes from 'prop-types';
import './ArticlePost.css';

const ArticlePost = ({ title, author, publishedDate, content, imageUrl }) => {
  return (
    <div className="article-post">
      <h2 className="article-title">{title}</h2>
      <p className="article-author"><strong>By: </strong>{author}</p>
      <p className="article-date"><strong>Published On: </strong>{publishedDate}</p>
      {imageUrl ? (
        <div className="article-content-with-image">
          <img src={imageUrl} alt="Article" className="article-image" />
          <p className="article-content">{content}</p>
        </div>
      ) : (
        <p className="article-content">{content}</p>
      )}
    </div>
  );
};

ArticlePost.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
};

export default ArticlePost;
