const RecipeService = require('./recipe.service');
const CreateRecipeDto = require('./dtos/create-recipe.dto');
const UpdateRecipeDto = require('./dtos/update-recipe.dto');
const GetRecipesDto = require('./dtos/get-recipes.dto');
const RecipesForUserDto = require('./dtos/recipes-for-user.dto');
const { UnauthorizedException } = require('../../lib/errors/errors');

const RecipeController = {};

RecipeController.find = async function find(query) {
  const getRecipesDto = GetRecipesDto.validate(query);
  return await RecipeService.find(getRecipesDto);
}

RecipeController.findForUser = async function findForUser(params) {
  const recipesForUserDto = RecipesForUserDto.validate(params);
  return await RecipeService.findForUser(recipesForUserDto);
}

RecipeController.findById = async function findById(recipeId) {
  return await RecipeService.findById(recipeId);
}

RecipeController.create = async function create(newRecipe) {
  const createRecipeDto = CreateRecipeDto.validate(newRecipe);
  return await RecipeService.create(createRecipeDto);
}

/**
 * 
 * @param {Object} recipeUpdate The updates to be posted
 * @param {*} issuer ObjectId of issuing user
 * @returns 
 */
RecipeController.update = async function update(recipeUpdate, issuer) {
  const updateRecipeDto = UpdateRecipeDto.validate(recipeUpdate);

  if (!RecipeService.isOwner(recipeUpdate._id, issuer)) {
    throw new UnauthorizedException();
  }

  return await RecipeService.update(updateRecipeDto);
}

module.exports = RecipeController;