const Post = require('../models/Post');

exports.getPosts = (req, res) => {
  res.status(200).json({
    posts: [
      { title: 'Hello World!' },
      { title: 'Second post' }
    ]
  })
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  
  post.save().then(result => {
    res.status(200).json({ post: result });
  });
}