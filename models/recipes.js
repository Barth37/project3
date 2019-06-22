const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  recipeName: { type: String, required: true },
  recipeAuthor: { type: String, required: true },
  recipeIngredients: { type: String, required: true },
  cookingDirections: { type: String, required: true },
  nutritionInformation: { type: String, required: false },
});

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;
