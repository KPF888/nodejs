const express = require('express');

const app = express();

//中间件的调用是按照定义的顺序调用的
//定义第一个中间件
app.use((req, res, next) => {
    console.log('调用了第一个中间件');
    next();
})
//定义第二个中间件
app.use((req, res, next) => {
    console.log('调用了第二个中间件');
    next();
})

//定义路由
app.get('/', (req, res) => {
    res.send('home page.');
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})