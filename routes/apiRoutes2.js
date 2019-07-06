const axios = require("axios");
const router = require("express").Router();
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");
var db = require("../models");

//user gets recipes from API - not authenticated
router.get("/recipes", (req, res) => {
    var url = "https://api.edamam.com/search?q=${ingredient}&app_id=8b888a07&app_key=a9b6565744d4ce9f78b6d6fcd6448d54&limit=10"
  axios
  .get(url, { params: req.query })
  .then(({ data: { results } }) => res.json(results))
  .catch(err => res.status(422).json(err));
});

//find all recipes
router.get("/recipes", (req, res) => {
    recipeController.findAll()
  });

//find one recipe
router.get("/recipes/:id", (req, res) => {
    var id = req.params.id
    recipeController.findById()
  });

//save recipe
router.put("/recipes", (req, res) => {
    recipeController.create()
  });

//delete recipe
router.delete("/recipes/:id", (req, res) => {
    recipeController.remove()
  });

//create and save user
router.post("/user", (req, res) => {
    userController.create()
});

// find one user
router.get("/user/:id", (req, res) => {
    var id = req.params.id
    userController.findById()
});
//update user info
router.put("/user/:id", (req, res) => {
    var id = req.params.id
    userController.update()
});

//delete user
router.delete("/user/:id", (req,res) => {
    var id = req.params.id
    userController.remove()
});

module.exports = router;
