const fs = require('fs');
const http = require('http');
const path = require('path');

//创建服务器实例对象
const server = http.createServer();

server.on('request', (req, res) => {
    //映射磁盘地址
    let fpath = path.join(__dirname, '/clock', req.url);//浏览器不需要输入/clock
    if (req.url === '/') fpath = path.join(__dirname, '/clock/index.html');
    //设置默认响应
    let content = '<h1>404 Not Found.</h1>';
    //设置乱码处理
    // res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //读取文件
    fs.readFile(fpath, 'utf-8', (err, data) => {
        if (err) return res.end(content);
        res.end(data);
    })
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})