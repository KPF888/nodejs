const querystring = require('querystring');
const bodyParser = (req, res, next) => {
    //定义字符串用来存储data的数据
    let dataStr = '';
    //监听req的data事件
    req.on('data', function (chunk) {
        //拼接字符串，字符串中就是存放的数据
        dataStr += chunk;
    })
    //监听req的end事件
    req.on('end', function () {
        const body = querystring.parse(dataStr);
        //挂载到req上
        req.body = body;
        next();
    })
}

module.exports = bodyParser;