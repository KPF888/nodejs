const http = require('http');

const web = http.createServer();

//req是请求对象，包含了客户端相关的信息
web.on('request', (req, res) => {
    console.log('有人访问了服务器');
    // //req.url是客户端请求的url地址
    // console.log('请求地址为：' + req.url);
    // //req.method 是客户端请求的类型
    // console.log('请求类型为：' + req.method);
    //req.url 是从端口号后面开始算
    //es6新增模板字符串写法
    const str = `请求地址为:${req.url}\n请求类型为:${req.method}`;
    console.log(str);
    //调用res.end() 方法向客户端响应内容
    res.end(str);
});

//开启服务器
web.listen('80', () => {
    console.log('服务器启动成功，端口：80,地址http://127.0.0.1');
})