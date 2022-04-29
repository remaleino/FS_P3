const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Word = require('../models/word');

//Hae kaikki tietokannan arvojoukot
router.get('/', (req, res, next) => {
    Word.find().exec().then(doc => {
        console.log(doc);
        if (doc.length >= 0) {
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: 'The entries found in the database'
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    });
});
//Lisätään uusi arvojoukko tietokantaan.
router.post('/', (req, res, next) => {
    const word = new Word({
        _id: new mongoose.Types.ObjectId(),
        word: req.body.word,
        pos: req.body.pos
    });
    word.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'Could add a new POST',
        createdWord: word
    });
});
//Etsitään id:llä arvojoukko tietokannasta.
router.get('/:wordId', (req, res, next) => {
    const id = req.params.wordId
    Word.findById(id).exec().then(doc => {
        if (doc) {
            console.log('Found in the database', doc);
            res.status(200).json(doc);
        } else {
            res.status(404).json({
                message: 'The ID not found in the database'
            });
        }
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});
//Muokataan id:llä arvojoukkon arvoja.
router.patch('/:wordID', (req, res, next) => {
    const id = req.params.wordID;
    const ops = {};
    for (const o of req.body) {
        ops[o.propName] = o.value;
    }
    Word.updateOne({ _id: id }, { $set: ops }).exec().then(result => {
        console.log(result);
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});
//Poistetaan id:llä arvojoukko tietokannasta.
router.delete('/:wordID', (req, res, next) => {
    const id = req.params.wordID;
    Word.remove({ _id: id }).exec().then(result => {
        res.status(200).json(result);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
    });
});
module.exports = router;