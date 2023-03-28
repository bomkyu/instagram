const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/profile', (req, res) => {
    res.render('profile');
});
module.exports = router;