const express = require('express');

const app = express();

//不通过app.use()定义的中间件称为局部中间件
//局部中间件只在被调用时生效 只在调用函数的内部生效
const mw = (req, res, next) => {
    console.log('调用了第一个局部中间件');
    next();
}
const mw2 = (req, res, next) => {
    console.log('调用了第二个局部中间件');
    next();
}

app.get('/', mw, mw2, function (req, res) {
    res.send('Home page');
})
app.get('/user', function (req, res) {
    res.send('User page');
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})
