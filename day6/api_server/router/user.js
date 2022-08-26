const express = require('express');
const router = express.Router();
const routerHandler = require('../router_handler/user');
//导入验证模块
const expressJoi = require('@escook/express-joi');
//导入验证规则
const { regLoginSchema } = require('../schema/user');

//用户注册
router.post('/reguser', expressJoi(regLoginSchema), routerHandler.reguser);

//用户登录
router.post('/login', expressJoi(regLoginSchema), routerHandler.login);

module.exports = router;