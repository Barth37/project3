const express = require('express');
const mongoose = require('mongoose');
var mongojs = require("mongojs");
//var logger = require("morgan");
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const PORT = process.env.PORT || 3000;


// Use morgan logger for logging requests
//app.use(logger("dev"));
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('cookbook/build'));
}

// Add db routes 
console.log('the route api is next');
app.use('/api', apiRoutes);

//Connect to the Mongo Recipes DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipes";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

// Use mongojs to hook the database to the db variable
//var db = mongojs(MONGODB_URI, collections);

// This makes sure that any errors are logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// 1. At the root path, send a simple hello world message to the browser
app.get("/", function(req, res) {
  res.send("Hello world");
});

// Route to post our form submission to mongoDB via mongoose
app.post("/submit", function(req, res) {

  // Create a new user using req.body
  var user = new User(req.body);
  user.setName();
  user.setEmail();
  user.setPassword();
  user.lastUpdatedDate();

  db.user.create(user)
    .then(function(dbUser) {
      // If saved successfully, send the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

// Find user based on unique email
app.get("/user/email", function(req, res) {
  // Query: In our database, go to the user collection, then "find" user by email
  db.user.find({ email }, function(err, found) {
    // Log any errors if the server encounters one
    if (err) {
      console.log(err);
    }
    // Otherwise, send the result of this query to the browser
    else {
      res.json(found);
    }
  });
});

// Update user by an id
app.put("/update/:id", function(req, res) {
  // When searching by an id, the id needs to be passed in
  // as (mongojs.ObjectId(IdYouWantToFind))

  // Update the user that matches the object id
  db.user.update(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    {
      // Set the name, email, password sent in the req body
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        date: Date.now()
      }
    },
    function(error, edited) {
      // Log any errors from mongojs
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

// Delete user from the DB
app.delete("/delete/:id", function(req, res) {
  // Remove a user using the objectID
  db.user.remove(
    {
      _id: mongojs.ObjectID(req.params.id)
    },
    function(error, removed) {
      // Log any errors from mongojs
      if (error) {
        console.log(error);
        res.send(error);
      }
      else {
        // Otherwise, send the mongojs response to the browser
        // This will fire off the success function of the ajax request
        console.log(removed);
        res.send(removed);
      }
    }
  );
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});