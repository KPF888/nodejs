const express = require('express');

const app = express();



//认为制造错误
app.get('/', (req, res) => {
    throw new Error('服务器内部发生未知错误');
    res.send('Home page.');
})


//定义错误级别全局中间件  只能定义在所有路由后面
app.use((err, req, res, next) => {
    console.log(err.message);
    res.send(err.message);
})

app.listen(80, () => {
    console.log('http://127.0.0.1');
})

