const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/explore', (req, res) => {
    res.render('explore');
});
module.exports = router;