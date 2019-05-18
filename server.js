const express = require('express');
const morgan = require('morgan');

const app = express();
const getPosts = require('./routes/post');

// Bring in routes
const postRoutes = require('./routes/post');

// Middleware to log the request and time for request
app.use(morgan("dev"));

// First route
app.use('/', postRoutes); // postRoutes to middleware to controllers

const port = 5000;
app.listen(port, () => { 
  console.log('Listening on port ' + port);
 });