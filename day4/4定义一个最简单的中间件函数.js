const express = require('express');

const app = express();

// //定义中间件函数
// const mw = function (req, res, next) {
//     console.log('这是一个最简单的中间件函数');
//     //必须调用next把待处理程序提交到下一个中间件
//     next();
// }

// //将mw注册为全局生效的中间件
// app.use(mw);



//简化中间件的定义
app.use((req, res, next) => {
    console.log('这是简化版中间件定义方式');
    next();//next()函数必须写,否则请求会卡住，无法走向下一个中间件或者路由
})


app.get('/user', (req, res) => {
    res.send('user page');
})

app.get('/', (req, res) => {
    res.send('home page');
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})