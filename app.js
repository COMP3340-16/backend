const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./router');
const auth = require('./lib/passport/auth.passport');
const { fallback } = require('./lib/errors/fallback');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

auth.wire(app);
router.wire(app);

app.use(fallback);

module.exports = app;