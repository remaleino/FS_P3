const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Could load words!'
    });
});
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Could loadddd words!'
    });
});
router.get('/:wordID', (req, res, next) => {
    const id = req.params.wordID;
    if (id == 'special') {
        res.status(200).json({
            message: 'this is a special id',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'Ypu åassed an ID'
        });
    }
});
router.patch('/:wordID', (req, res, next) => {
    res.status(200).json({
        message: 'Ypu updatet an ID'
    });
});
router.delete('/:wordID', (req, res, next) => {
    res.status(200).json({
        message: 'Ypu deleted'
    });
});
module.exports = router;