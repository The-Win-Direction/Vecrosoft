import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreateArticle.css";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CreateArticle = () => {
  const [heading, setHeading] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(selectedFile);
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImage(null);
      setImagePreview(null);
      alert("Please select a valid image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("heading", heading);
    formData.append("author", author);
    formData.append("content", content);
    formData.append("image", image);

    try {
      let token = localStorage.getItem("userdatatoken");
      console.log(token);
      const response = await axios.post(
        "http://localhost:4000/api/create-article",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      console.log("Article created:", response.data);
      setHeading("");
      setAuthor("");
      setContent("");
      setImage(null);
      setImagePreview(null);

      toast.success("Article created successfully!");
      setTimeout(() => {
        navigate("/article");
      }, 1000); // Redirect after 1 seconds

    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleCancel = () => {
    setHeading("");
    setAuthor("");
    setContent("");
    setImage(null);
    setImagePreview(null);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Create Article</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            placeholder="Enter heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input
            type="text"
            placeholder="Enter author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Content:</label>
          <textarea
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Selected" className="image-preview" />
          )}
        </div>
        <div className="button-group">
          <button type="submit">Create</button>
          <button type="button" onClick={handleCancel} className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateArticle;
