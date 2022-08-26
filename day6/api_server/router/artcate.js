//这是文章分类路由模块
const express = require('express');
const router = express.Router();
const routerHandler = require('../router_handler/artcate');
const expressJoi = require('@escook/express-joi');
const schema = require('../schema/user');

//获取所有文章分类列表
router.get('/cates', routerHandler.getArtCate);

//新建文章分类
router.post('/addcates', expressJoi(schema.addArtCateSchema), routerHandler.addArtCate);

//通过id删除文章分类
router.get('/deletecate/:id', expressJoi(schema.deleteCateSchema), routerHandler.deleteCate);

//获取文章分类数据
router.get('/cates/:id', expressJoi(schema.deleteCateSchema), routerHandler.getCate);

//更新文章分类
router.post('/updatecate', expressJoi(schema.updateCate), routerHandler.updateCate);


module.exports = router;