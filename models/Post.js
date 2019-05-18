const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema ({
  title : {
    type: String,
    required: "Title is required",
    minlength: 4,
    maxlength: 150
  },
  body : {
    type: String,
    required: "Title is required",
    minlength: 4,
    maxlength: 2000
  },
});

module.exports = Post = mongoose.model('Post', PostSchema);