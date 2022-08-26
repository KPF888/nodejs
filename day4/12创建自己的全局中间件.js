const express = require('express');
const app = express();
const qs = require('querystring');
const port = 80;



//定义解析表单数据的全局中间件
app.use((req, res, next) => {
    //定义字符串用来存储data的数据
    let dataStr = '';
    //监听req的data事件
    req.on('data', function (chunk) {
        //拼接字符串，字符串中就是存放的数据
        dataStr += chunk;
    })
    //监听req的end事件
    req.on('end', function () {
        const body = qs.parse(dataStr);
        //挂载到req上
        req.body = body;
        next();
    })
})

app.post('/', (req, res) => {
    res.send(req.body);
});


app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:${port}`));
