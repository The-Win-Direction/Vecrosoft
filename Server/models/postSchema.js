const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  content: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  imageUrl: { type: String},
  comments: [commentSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

postSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const postDB = mongoose.model("posts", postSchema);
module.exports = postDB;
