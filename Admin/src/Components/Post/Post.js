import React from "react";
import "./Post.css";

const Post = ({ post, onDelete }) => {
  return (
    <div className="post-card">
      <div className="post-header">
        <img
          src={
            post.user_id.profile_pic_url
              ? `http://localhost:4000${post.user_id.profile_pic_url}`
              : "/default-profile.png"
          }
          alt={`${post.user_id.fname} ${post.user_id.lname}`}
          className="user-profile-pic"
        />
        <h3>
          {post.user_id.fname} {post.user_id.lname}
        </h3>
      </div>

      <p>{post.content}</p>

      {post.imageUrl && (
        <img
          src={`http://localhost:4000${post.imageUrl}`}
          alt="Post"
          className="post-image"
        />
      )}

      <div className="likes-section">
        <p>
          {post.likes.length} {post.likes.length === 1 ? "like" : "likes"}
        </p>
        <div className="liked-by">
          {post.likes.map((like) => (
            <span key={like._id} className="liked-user">
              <img
                src={
                  like.profile_pic_url
                    ? `http://localhost:4000${like.profile_pic_url}`
                    : "/default-profile.png"
                }
                alt={`${like.fname} ${like.lname}`}
                className="liked-user-profile-pic"
              />
              <span>
                {like.fname} {like.lname}
              </span>
            </span>
          ))}
        </div>
      </div>

      <div className="comments-section">
        <h4>Comments</h4>
        {post.comments && post.comments.length > 0 ? (
          post.comments.map((comment) => (
            <div key={comment._id} className="comment">
              <p>
                <strong>
                  {comment.user_id.fname} {comment.user_id.lname}:{" "}
                </strong>
                {comment.content}
              </p>
              <p className="comment-date">
                {new Date(comment.created_at).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p>No comments on this post.</p>
        )}
      </div>

      <div className="post-actions">
        <button className="delete-button" onClick={() => onDelete(post._id)}>
          Delete Post
        </button>
      </div>
    </div>
  );
};

export default Post;
