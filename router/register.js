const express = require('express');
const router = express.Router();
const db = require('../server'); //db연결
const bodyParser = require('body-parser');//form태그 내용을 받아오기 위한것

router.use(bodyParser.urlencoded({ extended: true })); //url 기준으로 body내용을 언코딩
router.use(bodyParser.json()); //언코딩된 데이터를 json 변환

// 사용자 생성
router.get('/register', (req, res) => {
    res.render('../register.ejs');
});

router.post('/sign_up',(req,res) => {
    //db.query(`INSERT INTO`)
    const id = req.body.user_id;
    const name = req.body.user_name;
    const nickname = req.body.user_nickname;
    const pw = req.body.user_pw;

    db.query('SELECT user_id, user_nickname from tb_user', function(error, results, fields){
        if(error) throw error;
        results.forEach(key => {
            if(key.user_id == id){
                res.json({ success: false, message : 'error1' });
                return
            }else if(key.user_nickname == nickname){
                res.json({ success: false, message : 'error2'} );
                return
            }else{
                console.log('마 데이터 들어왔다! 아잉교!');
                db.query(`INSERT INTO tb_user(
                        user_id,
                        user_password,
                        user_name,
                        user_nickname,
                        date_time
                        )VALUES(
                            '${id}',
                            '${pw}',
                            '${name}',
                            '${nickname}',
                            now()
                        )`,function(error, result,fields){
                            if(error) throw error;
                            res.json({success : true, message:'앙 기뭘링~'});
                        });
            }
        })
    });
        
});

module.exports = router;