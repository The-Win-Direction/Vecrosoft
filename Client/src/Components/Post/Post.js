import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [like, setLike] = useState(false);
  const [commentsVisible, setCommentsVisible] = useState(false);

  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  const increaseLikes = () => {
    if (!like) {
      setLikes(likes + 1);
      setLike(!like);
    } else {
      setLikes(likes - 1);
      setLike(!like);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={post.profilePic} alt={`${post.username}'s profile`} className="profile-pic" />
        <span className="username">{post.username}</span>
      </div>
      <p className="caption"> {post.caption}</p>
      <img src={post.imageUrl} alt="Post" className="post-image " />
      <div className="post-info">
        <button className={`like-button ${like ? 'liked' : ''}`} onClick={increaseLikes}>
          {like ? '❤️' : '♡'} {likes}
        </button>
        <button className="comment-button" onClick={toggleComments}>
          {commentsVisible ? 'Hide Comments' : 'Show Comments'} ({post.comments.length})
        </button>
      </div>
      {commentsVisible && (
        <div className="comments">
          {post.comments.map((comment, index) => (
            <div key={index} className="comment">
              <span className="comment-username">{comment.username}:</span>
              <span className="comment-content">{comment.content}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string.isRequired,
    paragraph: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      })
    ).isRequired,
    username: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
