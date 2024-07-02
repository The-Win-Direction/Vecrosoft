import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import './Post.css';
const baseURL="https://vecrosoft-server.onrender.com"
const Post = ({ post ,user}) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [like, setLike] = useState(post.likes.includes(user));
  const [commentsVisible, setCommentsVisible] = useState(false);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');

  
  const toggleComments = () => {
    setCommentsVisible(!commentsVisible);
  };

  const handleLike = async () => {
    const token = localStorage.getItem("userdatatoken");
    try {
      const response = await axios.post(
        `https://vecrosoft-server.onrender.com/api/posts/${post._id}/like`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      
      setLikes(response.data.likes);
      setLike(!like);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userdatatoken");

    try {
      const response = await axios.post(
        `https://vecrosoft-server.onrender.com/api/posts/${post._id}/comment`,
        { content: newComment },
        {
          headers: {
            authorization: token,
          },
        }
      );
      setComments(response.data.comments);
      setNewComment('');
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={`${baseURL}${post.user_id.profile_pic_url}`} alt={`${post.user_id.fname}'s profile`} className="profile-pic" />
        <span className="username">{post.user_id.fname+" "+post.user_id.lname}</span>
      </div>
      <p className="caption"> {post.content}</p>
      <img src={`${baseURL}${post.imageUrl}`} alt="Post" className="post-image " />
      <div className="post-info">
        <button className={`like-button ${like ? 'liked' : ''}`} onClick={handleLike}>
          {like ? '❤️' : '♡'} {likes}
        </button>
        <button className="comment-button" onClick={toggleComments}>
          {commentsVisible ? 'Hide Comments' : 'Show Comments'} ({comments.length})
        </button>
      </div>
      {commentsVisible && (
        <div className="comments">
          {comments.map((comment, index) => (
            <div key={index} className="comment">

        <img src={`${baseURL}${comment.user_id.profile_pic_url}`} alt={`${comment.user_id.fname}'s profile`} className="comment-profile-pic" />
              <span className="comment-username">{comment.user_id.fname} {comment.user_id.lname}:</span>
              <span className="comment-content">{comment.content}</span>
            </div>
          ))}
          <form onSubmit={handleCommentSubmit}>
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
            />
            <button type="submit">Comment</button>
          </form>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    likes: PropTypes.array.isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        user_id: PropTypes.object.isRequired,
        content: PropTypes.string.isRequired
      })
    ).isRequired,
    username: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
