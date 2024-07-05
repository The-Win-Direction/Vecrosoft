const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const articleSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  heading: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
  createdDate: { type: Date, default: Date.now },
  imageUrl: { type: String},
  comments: [commentSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

articleSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const articleDB = mongoose.model("articles", articleSchema);
module.exports = articleDB;
