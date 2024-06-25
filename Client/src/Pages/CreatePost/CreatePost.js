import React, { useState } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";
import "./CreatePost.css";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  // const { userId } = useParams();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if selected file is an image
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
    formData.append("caption", caption);
    formData.append("image", image);

    try {
      let token = localStorage.getItem("userdatatoken");
      console.log(token);
      const response = await axios.post(
        "http://localhost:4000/api/create-post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      );
      console.log("Post created:", response.data);
      setImage(null);
      setImagePreview(null);
      setCaption("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Caption:</label>
          <input
            type="text"
            placeholder="Enter caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {imagePreview && (
            <img src={imagePreview} alt="Selected" className="image-preview" />
          )}
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
