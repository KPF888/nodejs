const express = require('express');
const app = express();
const port = 3007;
const cors = require('cors');


//此处插入中间件和路由
//跨域中间件
app.use(cors());
//配置解析表单数据中间件 只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false }));


//一定要在路由之前封装res.cc()函数
app.use((req, res, next) => {
    //status默认为1，表示失败
    //err可能是一个错误对象也可能是 自定义字符串
    res.cc = function (err, status = 1) {
        res.send({
            status,
            msg: err instanceof Error ? err.message : err
        })
    }
    next();
})


//导入路由之前配置解析token的中间件
//导入token解密中间件
const { expressjwt: expressJwt } = require('express-jwt');
const config = require('./config');
app.use(expressJwt({
    secret: config.tokenSecretKey,
    algorithms: ["HS256"]
}).unless({ path: [/^\/api/] }));



//导入user路由模块
const userRouter = require('./router/user');
app.use('/api', userRouter);

//在需要权限的路由之前定义全局中间件，将req.auth.id挂载到req.body.id上
//如果不挂载直接使用会报错
app.use((req, res, next) => {
    req.body.id = req.auth.id;
    next();
})
//导入userinfo路由模块
const userInfoRouter = require('./router/userinfo');
app.use('/my', userInfoRouter);
//导入artcate文章路由模块
const artCateRouter = require('./router/artcate');
app.use('/my/articel', artCateRouter);


//在路由之后定义错误级别中间件
const joi = require('joi');
app.use((err, req, res, next) => {
    //捕获验证错误
    if (err instanceof joi.ValidationError)
        return res.cc(err);
    //捕获token错误 身份认证失败
    if (err.name === 'UnauthorizedError')
        return res.cc('身份认证失败！');

    return res.cc(err);
})


app.listen(port, () => { console.log(`App running at http://127.0.0.1:${port}`); });