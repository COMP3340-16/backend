const Recipe = require('./models/recipe.model');
const UserService = require('../users/user.service');
const { NotFoundException } = require('../../lib/errors/errors');

const RecipeService = {};

RecipeService.find = async function find({ type, limit, page }) {
  const recipes = await Recipe.find({ type }).populate('user').skip(limit * page).limit(limit);
  return recipes;
}

RecipeService.findForUser = async function findForUser({ userId }) {
  const recipes = await Recipe.find({ user: userId }).populate('user');
  return recipes;
}

RecipeService.findById = async function findById(recipeId) {
  const recipe = await Recipe.findById(recipeId).populate('user');
  if (!recipe) throw new NotFoundException();
  return recipe;
}

RecipeService.create = async function create(newRecipe) {
  const recipe = new Recipe(newRecipe);
  return await recipe.save();
}

RecipeService.update = async function update(recipeUpdate) {
  const updatedRecipe = await Recipe.findByIdAndUpdate(recipeUpdate._id, { $set: recipeUpdate });
  return updatedRecipe;
}

/**
 * Verify recipe is owned by user
 */
RecipeService.isOwner = async function isOwner(recipeId, userId) {
  const recipe = await Recipe.find({ _id: recipeId, user: userId });
  if (recipe || await UserService.isAdmin(userId)) {
    return true;
  }
  return false;
}

module.exports = RecipeService;
