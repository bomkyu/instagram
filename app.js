const express = require('express');
const app = express();

const fs = require('fs');       //하위폴더인 sub_page를 가져오기 위한 변수
const path = require('path');   //하위폴더인 sub_page를 가져오기 위한 변수

app.use(express.static('lib')); // 상위 폴더의 정적 파일 디렉토리 등록
app.use(express.static('sub_page/lib')); // sub_page/lib 폴더를 정적 파일의 루트 경로로 설정

app.set('view engine', 'ejs'); // 뷰 엔진으로 EJS를 사용할 것을 설정

// 라우트
app.get('/', (req, res) => {
    // EJS 렌더링
    res.render(__dirname + '/index.ejs');
});

app.get('/register', (req, res) => {
    // EJS 렌더링
    res.render(__dirname + '/register.ejs');
});



// sub_page 폴더에 있는 파일 목록 가져오기
const subPageFiles = fs.readdirSync(path.join(__dirname, 'sub_page'));

// 가져온 파일 목록으로 라우터 등록하기
subPageFiles.forEach(file => {
    // 파일 확장자가 .ejs인 경우에만 등록
    if (path.extname(file) === '.ejs') {
        const name = path.basename(file, '.ejs');
        app.get(`/sub_page/${name}`, (req, res) => {
            res.render(path.join(__dirname, 'sub_page', file));
        });
    }
});

// 서버 실행
app.listen(3030, () => {
    console.log('Server started on port 3030');
});