const http = require('http');

const webserver = http.createServer();

webserver.on('request', (req, res) => {
    //设置默认返回404 NOT FOUND
    let content = '<h1>404 NOT FOUND</h1>';
    //判断url是什么
    var url = req.url;
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>';
    } else if (url === '/about.html') {
        content = '<h1>详情页</h1>';
    }
    //防止乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //返回内容
    res.end(content);
})

webserver.listen(80, () => {
    console.log('服务器启动成功 http://127.0.0.1');
})