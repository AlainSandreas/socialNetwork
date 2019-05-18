exports.getPosts = (req, res) => {
  res.status(200).json({
    posts: [
      { title: 'Hello World!' },
      { title: 'Second post' }
    ]
  })
};