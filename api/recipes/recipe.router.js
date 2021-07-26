const express = require('express');
const router = express.Router();

const RecipeController = require('./recipe.controller');

router.get('/:recipeId', async function (req, res, next) {
  try {
    let { recipeId } = req.params;
    let recipe = await RecipeController.findById(recipeId);
    return res.json(recipe);
  } catch (error) { next(error); }
});

/**
 * Get array of recipes
 */
router.get('/', async function (req, res, next) {
  try {
    let recipes = await RecipeController.find(req.query);
    return res.json(recipes);
  } catch (error) { next(error); }
});

/**
 * Get recipes belonging to user
 */
router.get('/user/:userId', async function (req, res, next) {
  try {
    let recipes = await RecipeController.findForUser(req.params);
    console.log(recipes);
    return res.json(recipes);
  } catch (error) { next(error); }
});

/**
 * Create a new recipe
 */
router.post('/', async function (req, res, next) {
  try {
    let recipe = await RecipeController.create(req.body);
    return res.json(recipe);
  } catch (error) { next(error); }
});

/**
 * Update an existing recipe
 */
router.put('/', async function (req, res, next) {
  try {
    let recipe = await RecipeController.update(req.body);
    return res.json(recipe);
  } catch (error) { next(error); }
});

module.exports = router;