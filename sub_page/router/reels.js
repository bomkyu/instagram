const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/reels', (req, res) => {
    res.render('reels');
});
module.exports = router;