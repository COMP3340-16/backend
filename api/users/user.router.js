const express = require('express');
const router = express.Router();

const UserController = require('./user.controller');
const admin_guard = require('../../lib/guards/admin.guard');

/**
 * Find a user by _id
 */
router.get('/:userId', async function (req, res, next) {
  try {
    let { userId } = req.params
    let user = await UserController.findById(userId);
    return res.json(user);
  } catch (error) { next(error); }
});

/**
 * Create a new user
 */
router.post('/', admin_guard, async function (req, res, next) {
  try {
    const user = await UserController.create(req.body);
    return res.json(user);
  } catch (error) { next(error); }
});

module.exports = router;