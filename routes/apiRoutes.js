const axios = require("axios");
const router = require("express").Router();
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");
var db = require("../models");

//user gets recipes from API - not authenticated
router.get("/recipes", (req, res) => {
  axios
  .get("https://api.edamam.com/search?q=' + ingredient + '&app_id=8b888a07&app_key=a9b6565744d4ce9f78b6d6fcd6448d54&limit=10", { params: req.query })
  .then(({ data: { results } }) => res.json(results))
  .catch(err => res.status(422).json(err));
});

router.route("/recipes")
  .get(recipeController.findAll)
  .get(recipeController.findById)
  .post(recipeController.create)
  .delete(recipeController.remove);


router.get("/user", (req, res) => {
  axios
    .get("user", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
  });
  
router.route("/user")
  .post(userController.create)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;