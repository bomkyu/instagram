const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/main', (req, res) => {
    res.render('main');
});
module.exports = router;