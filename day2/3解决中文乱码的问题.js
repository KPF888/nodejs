const http = require('http');

const web = http.createServer();

web.on('request', (req, res) => {
    console.log('someone visit this web server\n');
    var str = `你访问的地址是${req.url}\r\n你访问的方式是${req.method}`;
    //调用res.setHeader方法设置Content-Type 解决中文乱码
    res.setHeader('Content-Type', 'text/html; charset=UTF-8')
    res.end(str);
})

web.listen(80, () => {
    console.log('服务启动，端口80，地址http://127.0.0.1');
})