
import React, { useState } from 'react';

const PostForm = ({ onCreatePost }) => {
  const [post, setPost] = useState({
    imageUrl: '',
    paragraph: '',
    caption: '',
    username: '',
    profilePic: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreatePost(post);
    setPost({
      imageUrl: '',
      paragraph: '',
      caption: '',
      username: '',
      profilePic: ''
    });
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="imageUrl"
        placeholder="Image URL"
        value={post.imageUrl}
        onChange={handleChange}
        required
      />
      <textarea
        name="paragraph"
        placeholder="Paragraph"
        value={post.paragraph}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="caption"
        placeholder="Caption"
        value={post.caption}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={post.username}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="profilePic"
        placeholder="Profile Picture URL"
        value={post.profilePic}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
