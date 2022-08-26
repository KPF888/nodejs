//导入express第三方包
const express = require('express');

//创建服务器实例
const app = express();

//监听客户端的get 和 post 请求,并响应内容
app.get('/user', (req, res) => {
    //调用res.send方法响应内容
    res.send({ name: '张三', pwd: '123' });
})

app.post('/user', (req, res) => {
    //响应
    res.send('post请求成功');
})

app.get('/', (req, res) => {
    // 打印查询的参数 req.query会自动把传递的参数转换成对象 静态参数
    //req.query默认是空对象
    console.log(req.query);
    // 响应查询的参数
    res.send(req.query);
})

//通过url动态匹配参数
app.get('/user/:ids:name', (req, res) => {
    //打印req.params 默认是一个空对象
    //req.params在客户端不填写参数名，安全性可能更高
    console.log(req.params);
    //响应动态参数
    res.send(req.params);
})


//启动服务器
app.listen(80, () => {
    console.log('服务器启动成功 http://127.0.0.1:80');
})