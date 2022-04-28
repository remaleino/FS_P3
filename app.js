const express = require('express');
const app = express();
const wordRoutes = require('./api/routes/words');

app.use('/words', wordRoutes);

module.exports = app;