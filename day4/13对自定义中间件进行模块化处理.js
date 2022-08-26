const express = require('express');
const app = express();
const qs = require('querystring');
//导入自定义的中间件bodyParser
const bodyParser = require('./14custom-body-parser');
const port = 80;



//定义解析表单数据的全局中间件
app.use(bodyParser);

app.post('/', (req, res) => {
    res.send(req.body);
});

//添加错误中间件
app.use((err, req, res, next) => {
    res.send(err.message);
})


app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:${port}`));
