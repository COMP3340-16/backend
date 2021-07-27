const UserRouter = require('./api/users/user.router');
const AuthRouter = require('./api/auth/auth.router');
const RecipeRouter = require('./api/recipes/recipe.router');
const ThemeRouter = require('./api/theme/theme.router');

exports.wire = function wire(app) {
  app.use('/api/users', UserRouter);
  app.use('/api/recipes', RecipeRouter);
  app.use('/api/theme', ThemeRouter);
  app.use('/auth', AuthRouter);
}