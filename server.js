const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();


mongoose.connect(process.env.MONGO_URI,
  { 
    useNewUrlParser: true 
  })
  .then(() =>  {console.log('MongoDB connected')})
  .catch((err) => {console.log(err.message)})

const app = express();

// Bring in routes
const postRoutes = require('./routes/post');

// Middleware to log the request and time for request
app.use(morgan("dev"));

// First route
app.use('/', postRoutes); // postRoutes to middleware to controllers

const port = process.env.PORT || 5000;
app.listen(port, () => { 
  console.log('Listening on port ' + port);
 });