const express = require('express');
const router = express.Router();
const db = require('../server'); //db연결
const bodyParser = require('body-parser');//form태그 내용을 받아오기 위한것

// 사용자 생성
router.get('/register', (req, res) => {
    res.render('../register.ejs');
});

router.post('/',(req,res) => {
    //db.query(`INSERT INTO`)
});

module.exports = router;