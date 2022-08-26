// 1.导入http模块
const http = require('http');

// 2.创建web服务器实例对象
const web = http.createServer();

//3.为服务器绑定request事件，监听访问请求
web.on('request', (req, res) => {
    console.log('someone visit our server');
})
// 4.启动服务器
web.listen('80', (res) => {
    console.log('服务在80端口启动成功');
})