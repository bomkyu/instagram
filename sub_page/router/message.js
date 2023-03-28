const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/message', (req, res) => {
    res.render('message');
});
module.exports = router;