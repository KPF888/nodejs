const express = require('express');
const router = express.Router();
const routerHandler = require('../router_handler/userinfo');
//导入验证数据中间件
const expressJoi = require('@escook/express-joi');
//导入验证规则
const { updateUserInfoSchema, updatePwd, updateAvatar } = require('../schema/user');

//获取个人信息路由
router.get('/userinfo', routerHandler.userinfo);

//更新用户信息的路由
router.post('/userinfo', expressJoi(updateUserInfoSchema), routerHandler.updateUserInfo);

//重置密码
router.post('/updatepwd', expressJoi(updatePwd), routerHandler.updatePassword);

//更新头像
router.post('/update/avatar', expressJoi(updateAvatar), routerHandler.updateAvatar);

module.exports = router;