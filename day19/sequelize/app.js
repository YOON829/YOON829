const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

const { sequelize } = require('./models');

const app = express();
app.set('port', process.env.PORT || 3001);
app.set('view engine', 'html');

// Nunjucks 설정
nunjucks.configure('views', {
    express: app,
    watch: true,
});

// 데이터베이스 연결
sequelize.sync({ force: false })
    .then(() => {
        console.log(`데이터베이스 연결 성공`);
    })
    .catch((err) => {
        console.error(err);
    });

// 미들웨어 설정
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 404 핸들러
app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

// 에러 핸들러
app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

// 서버 시작
app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 대기 중`);
});
