exports.postValidator = (req, res, next) => {
  // Check title
  req.check('title', 'title is required').not().isEmpty();
  req.check('title', 'title must be between 4 and 150 characters').isLength(
    { min: 4, max: 150 });

  // Check body
  req.check('body', 'body is required').not().isEmpty();
  req.check('body', 'body must be between 4 and 2000 characters').isLength({ min: 4, max: 2000 });

  // Check errors
  const errors = req.validationErrors();
  if(errors) {
    const Errors = errors.map((error) => error.msg);
    return res.status(400).json({ errors: Errors });
  }

  // Move on to next middleware
  next();
};