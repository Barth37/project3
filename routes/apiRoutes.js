const axios = require('axios');
const router = require('express').Router();
const recipeController = require('../controllers/recipeController');
const userController = require('../controllers/userController');
var db = require('../models');

// find all recipes based on keyword from third party api
router.get('/recipes/:ingredient', (req, res) => {
  console.log('apiRoutes is being reached');
  const ingredient = req.params.ingredient;
  var url = `https://api.edamam.com/search?q=${ingredient}&app_id=8b888a07&app_key=a9b6565744d4ce9f78b6d6fcd6448d54`;
  axios
    .get(url)
    .then(data => {
      res.send(data);
    })
    .catch(err => res.status(422).json(err));
  // .then(({ data: { results } }) => res.json(results))
  // .catch(err => res.status(422).json(err));
});

//find all recipes in database
router.get('/v1/recipes/', (req, res) => {
  recipeController.findAll();
  console.log("Find all recipes is working");
});

//find all recipes based on keyword in database
router.get('/v1/recipes/:ingredient', (req, res) => {
  recipeController.findAll();
  console.log("Find recipe by ingredient is working");
});

//find one recipe based on keyword in database
router.get('/v1/recipes/:id', (req, res) => {
  var id = req.params.id;
  recipeController.findById();
  console.log("Find recipe by id is working");
});

//save recipe
router.put('/v1/recipes', (req, res) => {
  recipeController.create();
  console.log("Create recipe is working");
});

//delete recipe
router.delete('/v1/recipes/:id', (req, res) => {
  recipeController.remove();
  console.log("Delete recipe is working");
});

//create and save user
router.post('/v1/user', (req, res) => {
  userController.create();
  console.log("Create user is working");
});

// find one user
router.get('/v1/user/:id', (req, res) => {
  var id = req.params.id;
  userController.findById();
  console.log("Find user by id is working");
});
//update user info
router.put('/v1/user/:id', (req, res) => {
  var id = req.params.id;
  userController.update();
  console.log("Update user by id is working");
});

//delete user
router.delete('/v1/user/:id', (req, res) => {
  var id = req.params.id;
  userController.remove();
  console.log("Delete user by id is working");
});

module.exports = router;