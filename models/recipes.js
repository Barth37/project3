const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  Name: { type: String, required: true },
  Author: { type: String, required: true },
  Ingredients: { type: String, required: true },
  Instructions: { type: String, required: true },
  nutritionInformation: { type: String, required: false },
});

const Recipe = mongoose.model("Recipes", recipeSchema);

module.exports = Recipe;
