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
    const { user_id, user_pw } = req.body;
    if( !user_id || !user_pw ){
        return res.send('<script>alert("아이디 혹은 패스워드를 입력해 주세요."); location.href="/";</script>');
    }else{
        db.query('SELECT * FROM tb_user', function(error, results, fields){
            if(error) throw error;
            results.forEach(key => {
                if(key.user_id != user_id || key.user_password != user_pw){
                    return res.send(`<script>alert("아이디 혹은 패스워드가 다릅니다."); location.href="/";</script>`);
                }else if(key.user_id == user_id && key.user_password == user_pw){
                    req.session.user = { id: key.user_id, name : key.user_nickname };
                    return res.redirect('/sub_page/main'); // redirect to the desired page
                }
            });
        });
    }
});

module.exports = router;