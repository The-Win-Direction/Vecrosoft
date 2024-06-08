import React from 'react';
import PropTypes from 'prop-types';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="post-header">
        <img src={post.profilePic} alt={`${post.username}'s profile`} className="profile-pic" />
        <span>{post.username}</span>
      </div>
      <img src={post.imageUrl} alt="Post" className="post-image" />
      <p>{post.paragraph}</p>
      <p><strong>Caption:</strong> {post.caption}</p>
      <div className="post-info">
        <span>{post.likes} likes</span>
        <span>{post.comments.length} comments</span>
      </div>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">
            <span className="comment-username">{comment.username}:</span>
            <span className="comment-content">{comment.content}</span>
          </div>
        ))}
      </div>
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
    ),
    username: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
