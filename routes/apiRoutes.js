const axios = require("axios");
const router = require("express").Router();
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");
var db = require("../models");

//user gets recipes from API - not authenticated
router.get("/recipes", (req, res) => {
  axios
    .get("http://api.edamam.com/search", { params: req.query })
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
    .get("userdb", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));

  });
  
router.route("/user")
  .post(userController.create)
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
