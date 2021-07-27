const mongoose = require('mongoose');

const variants = ['light', 'dark'];

const ThemeSchema = new mongoose.Schema({
  variant: { type: String, enum: variants, required: true }
});

module.exports = mongoose.model('Theme', ThemeSchema);