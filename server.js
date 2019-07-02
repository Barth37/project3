const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3000;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("cookbook/build"));
}

// Add routes, both API and view
app.use("/api", apiRoutes);
//app.use("/api/recipes", require("../routes/recipeRoutes"));
//app.use("/api/user", require("../routes/userRoutes"));
// app.get("/", (req, res) => {
//   res.send("Recipe found!");
// });

// Connect to the Mongo Recipes DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipes";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

// // Connect to the Mongo User DB
// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/user";
// mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./cookbook/build/index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



