const Theme = require('./models/Theme.model');

/**
 * Only one theme document is created and maintained
 */
const ThemeService = {};

ThemeService.find = async function find() {
  return await Theme.findOne();
}

ThemeService.create = async function create(t) {
  const count = await Theme.count();
  if (count != 0) throw new Error("There can only be one Theme document");
  const theme = new Theme(t);
  return await theme.save();
}

ThemeService.update = async function update(t) {
  const theme = await ThemeService.find();
  if (!theme) {
    return await ThemeService.create(t);
  } else {
    theme.variant = t.variant;
    return await theme.save();
  }
}

module.exports = ThemeService;