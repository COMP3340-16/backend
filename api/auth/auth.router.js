const express = require('express');
const router = express.Router();
const passport = require('passport');

const AuthController = require('./auth.controller');

/**
 * Login
 */
router.post('/login', passport.authenticate('local'), async function (req, res, next) {
  try {
    const access_token = await AuthController.generateAccessToken(req.user);
    return res.json(access_token);
  } catch (error) { next(error); }
});

/**
 * Register a new user
 */
router.post('/register', async function (req, res, next) {
  try {
    const user = await AuthController.registerUser(req.body);
    return res.json(user);
  } catch (error) { next(error); }
});

module.exports = router;