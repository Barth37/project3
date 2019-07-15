const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/apiRoutes2');
const app = express();
const PORT = process.env.PORT || 3045;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cookbook/build'));
}

// Add routes, both API and view
console.log('the route api is next');
app.use('/api', apiRoutes);

//Connect to the Mongo Recipes DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipes";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});