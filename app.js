const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session'); //세션사용

//로그인 회원가입 라우터
const index_routes = require('./router/index.js'); //index 라우터 선언
const register_routes = require('./router/register.js'); //register 라우터 선언
//서브페이지 라우터들
const main_routes = require('./sub_page/router/main.js'); //main 라우터 선언
const explore_routes = require('./sub_page/router/explore.js'); //explore 라우터 선언
const message_routes = require('./sub_page/router/message.js'); //message 라우터 선언
const profile_routes = require('./sub_page/router/profile.js'); //profile 라우터 선언
const reels_routes = require('./sub_page/router/reels.js'); //reels 라우터 선언

app.set('view engine', 'ejs'); // 뷰 엔진으로 EJS를 사용할 것을 설정
app.set('views', path.join(__dirname, 'sub_page')); //req.render 기본 구조가 /views 폴더 기준인데 나는 sub_page기 때문에 views폴더가 아닌 sub_page폴더로 지정해주는것.
app.use(express.static('lib')); // index, register 정적파일.
app.use(express.static('sub_page/lib')); // sub_page/lib 폴더를 정적 파일의 루트 경로로 설정

//메인페이지
app.use('/', index_routes);
app.use('/', register_routes);

//서브페이지
app.use('/sub_page', main_routes);
app.use('/sub_page', explore_routes);
app.use('/sub_page', message_routes);
app.use('/sub_page', profile_routes);
app.use('/sub_page', reels_routes);

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

// 서버 실행
app.listen(3030, () => {
    console.log('Server started on port 3030');
});