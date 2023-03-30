const express = require('express');
const router = express.Router();
const db = require('../../server');
const bodyParser = require('body-parser');

router.get('/profile', (req, res) => {
    const s_name = req.session.user.name;
    res.render('profile',{username : s_name});
});
module.exports = router;