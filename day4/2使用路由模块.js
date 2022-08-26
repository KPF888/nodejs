const express = require('express');

const app = express();

//导入路由模块
const router = require('./3router.js');

//注册router路由
app.use('/api', router);
//给路由添加前缀
//app.use()的作用就是注册全局中间件

app.listen(80, () => {
    console.log('running at http://127.0.0.1:80');
})