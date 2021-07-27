const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ["breakfast", "lunch", "dinner"], required: true },
  ingredients: [{ type: String, required: true }],
  instructions: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

RecipeSchema.pre('find', function () {
  this.populate('user');
});

RecipeSchema.post('save', function (doc, next) {
  doc.populate('user').execPopulate().then(function () {
    next();
  });
});

module.exports = mongoose.model('Recipe', RecipeSchema);