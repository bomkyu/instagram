const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // 뷰 엔진으로 EJS를 사용할 것을 설정

// 라우트
app.get('/', (req, res) => {
    // EJS 렌더링
    res.render('index');
});

// 서버 실행
app.listen(3030, () => {
    console.log('Server started on port 3030');
});
