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

// Connect to the Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/recipes";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./cookbook/build/index.html"));
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



