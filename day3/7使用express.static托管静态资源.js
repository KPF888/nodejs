const express = require('express');

const app = express();

//用express.static()方法提供静态资源
//先托管谁就现在谁的目录里查找
//前一个参数为挂载路径前缀 访问时必须写 /abc/index.html才能访问到第一个
app.use('/abc', express.static('./素材/files'));//前面不加abc则访问不到
app.use(express.static('./素材/clock'));//地址为网站根目录


app.listen(80, () => {
    console.log('服务器启动成功 http://127.0.0.1:80');
})