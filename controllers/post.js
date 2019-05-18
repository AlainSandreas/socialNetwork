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
  
  post.save((err, result) => {
    if(err) {
      return res.status(400).json({ error: err })
    }
    res.status(200).json({ post: result });
  });
}