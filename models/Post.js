const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema ({
  title : {
    type: String,
    required: true
  },
  body : {
    type: String,
    required: true
  },
});

module.exports = Post = mongoose.model('Post', PostSchema);