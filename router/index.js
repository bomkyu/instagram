const express = require('express');
const router = express.Router();
const db = require('../server'); //db연결
const session = require('express-session'); //세션사용
const bodyParser = require('body-parser');//form태그 내용을 받아오기 위한것

router.use(bodyParser.urlencoded({ extended: true })); //url 기준으로 body내용을 언코딩
router.use(bodyParser.json()); //언코딩된 데이터를 json 변환

router.use(session({
    secret: 'my-secret-key', // 세션 ID 암호화에 사용할 키
    resave: false,           // 세션을 항상 저장할지 여부
    saveUninitialized: true  // 초기화되지 않은 세션을 저장할지 여부
}));

// 사용자 생성
router.get('/', (req, res) => {
    
    res.render('../index.ejs');
});

router.post('/login', (req, res) => {
    /**/
    const id = req.body.user_id;
    const pw = req.body.user_pw;

    db.query('SELECT * FROM tb_user', function(error, results, fields){
        if(error) throw error;
        let found = false;

        results.forEach(key => {
            if(key.user_id == id && key.user_password == pw){
                req.session.user = { id: key.user_id, name : key.user_nickname }; //세션에 정보 저장.
                found = true;
                return res.json({ success: true, message: '로그인 성공!' });
                
            }
        });
        if (!found) {
            return res.json({ success: false, message: '로그인 실패 아이디 혹은 패스워드를 확인해 주세요.' });
        }
    });
    
});

module.exports = router;