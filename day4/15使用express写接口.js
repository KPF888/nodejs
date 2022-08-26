const express = require('express');
const app = express();
const cors = require('cors');
//引入路由模块
const router = require('./16apiRouter');

//注册处理请求体中间件
app.use(express.urlencoded({ extended: false }));

//JSONP路由必须在cors之前
app.get('/api/jsonp', (req, res) => {
    // 1.得到函数的名字
    const funName = req.query.callback;
    // 2.定义要发送的数据
    const data = {
        name: 'zs',
        age: 20
    };
    // 3.拼接函数调用的字符串
    const resStr = `${funName}(${JSON.stringify(data)})`;
    // 4.发送给客户端
    res.send(resStr);
})

//一定要在路由模块之前配置cors中间件 解决跨域问题
app.use(cors());

//注册路由模块
app.use('/api', router);

app.listen(80, function () {
    console.log('App server running at http://127.0.0.1:80');
})