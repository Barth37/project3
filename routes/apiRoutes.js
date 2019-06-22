const axios = require("axios");
const router = require("express").Router();
const recipeController = require("../controllers/recipeController");
const userController = require("../controllers/userController");

router.get("/recipes", (req, res) => {
  axios
    .get("http://www.edamamme.com/api/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

router.route("/recipes")
  .get(recipeController.findAll)
  .post(recipeController.create);

router.route("/recipes/:id")
  .get(recipeController.findById)
  .delete(recipeController.remove);

module.exports = router;
