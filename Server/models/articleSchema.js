const mongoose = require('mongoose');

const articleCommentSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

const articleSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  comments: [articleCommentSchema],
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

articleSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;
