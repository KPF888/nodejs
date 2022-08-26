const express = require('express');
const app = express();
const bodyParser = require('body-parser');//导入表单处理中间件

//注册全局表单处理中间件
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', function (req, res) {
    console.log(req.body);
    res.send('ok');
})

app.listen(80, function () {
    console.log('http://127.0.0.1');
})