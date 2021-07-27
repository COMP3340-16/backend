const passport = require('passport');
const UserRouter = require('./api/users/user.router');
const AuthRouter = require('./api/auth/auth.router');
const RecipeRouter = require('./api/recipes/recipe.router');
const ThemeRouter = require('./api/theme/theme.router');

const routes = {
  private: {
  },
  public: {
    '/api/users': UserRouter,
    '/api/recipes': RecipeRouter,
    '/api/theme': ThemeRouter,
    '/auth': AuthRouter,
  }
}

exports.wire = function wire(app) {
  for (const [key, value] of Object.entries(routes.public)) {
    app.use(key, value);
  }

  app.use(passport.authenticate('jwt'));
  for (const [key, value] of Object.entries(routes.private)) {
    app.use(key, value);
  }
}