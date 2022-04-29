const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    word: String,
    pos: String
});

module.exports = mongoose.model('Word', wordSchema);