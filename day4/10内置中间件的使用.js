const express = require('express');

const app = express();


//配置全局解析中间件
app.use(express.json());
//配置解析urlencoded中间件
app.use(express.urlencoded({ extended: false }));

app.post('/', function (req, res) {
    //通过req.body接收请求体
    //不配置解析数据的中间件，默认返回undefined
    console.log(req.body);
    res.send(req.body);
})


app.post('/book', (req, res) => {
    //req.body 可以接收json 和 urlencoded两种格式
    console.log(req.body);
    res.send(req.body)
})



app.listen(80, () => {
    console.log('http://127.0.0.1:80');
})