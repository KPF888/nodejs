const express = require('express');

const app = express();


//简化中间件的定义
app.use((req, res, next) => {
    //给req挂载一个访问时间的属性
    const visitTime = new Date();
    req.visitTime = visitTime;//中间件中的req与res与后面的中间件和路由全部共享
    next();//next()函数必须写,否则请求会卡住，无法走向下一个中间件或者路由
})


app.get('/user', (req, res) => {
    res.send(req.visitTime);
})

app.get('/', (req, res) => {
    res.send(req.visitTime);
})

app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})