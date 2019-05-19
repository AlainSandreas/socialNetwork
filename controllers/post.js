const Post = require('../models/Post');

exports.getPosts = (req, res) => {
  const posts = Post.find().select('-__v')
    .then((posts) => res.status(200).json({ post: posts }))
    .catch(err => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(req.body);
  
  post.save().then(result => {
    res.status(200).json({ post: result });
  });
};