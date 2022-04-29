const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const wordRoutes = require('./api/routes/words');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://remaleino:remaleino@cluster0.syy5n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use('/words', wordRoutes);

module.exports = app;