const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/main', (req, res) => {
    const s_name = req.session.user.name;
    res.render('main',{username : s_name});
});
module.exports = router;