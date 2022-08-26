const express = require('express');

const app = express();

//只有请求方式和请求url都相同才会匹配成功
//前面匹配成功后就不会继续往后匹配
//挂载路由
app.get('/', (req, res) => {
    console.log('get路由匹配成功');
    res.send('get路由匹配成功');
})

app.post('/', (req, res) => {
    console.log('post路由匹配成功');
    res.send('post路由匹配成功')
})

app.listen(80, () => {
    console.log('app service running at http://127.0.0.1:80');
})