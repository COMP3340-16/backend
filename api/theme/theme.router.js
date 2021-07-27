const express = require('express');
const passport = require('passport');
const router = express.Router();
const admin_guard = require('../../lib/guards/admin.guard');

const ThemeController = require('./theme.controller');

/**
 * Get current theme
 */
router.get('/', async function (req, res, next) {
  try {
    let theme = await ThemeController.findOrCreate();
    return res.json(theme.variant);
  } catch (error) { next(error); }
});

/**
 * Set current theme
 */
router.post('/', passport.authenticate('jwt'), admin_guard, async function (req, res, next) {
  try {
    const { variant } = req.query;
    let theme = await ThemeController.set(variant);
    return res.json(theme.variant);
  } catch (error) { next(error); }
});

module.exports = router;