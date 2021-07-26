const dotenv = require('dotenv');
dotenv.config();
const MongooseModule = require('../../lib/mongoose/mongoose.module');
MongooseModule.connect(process.env.DB_URI, {}, () => {
  console.log('starting load..');
  load_data();
});

const load_data = () => {
  const data = require('./recipes.json');
  const Recipe = require('../../api/recipes/models/recipe.model');

  const flat_data = [...data["Breakfast"], ...data["Lunch"], ...data["Dinner"]]
    .map((recipe) => ({ ...recipe, type: recipe.type.toLowerCase() }));
  const recipes = flat_data.map((recipe) => new Recipe(recipe));

  Promise.all(
    recipes.map((recipe) => recipe
      .save()
      .then((saved) => {
        console.log(saved.title);
      }))
  ).then(() => {
    console.log('done.');
    process.exit(0);
  });
}