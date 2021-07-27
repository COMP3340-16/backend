const ThemeService = require('./theme.service');

const ThemeController = {}

ThemeController.findOrCreate = async function findOrCreate() {
  let theme = await ThemeService.find();
  if (!theme) {
    theme = await ThemeService.create({ variant: "light" });
  }
  return theme;
}

ThemeController.set = async function set(variant) {
  return await ThemeService.update({ variant });
}

module.exports = ThemeController;