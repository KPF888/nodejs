const express = require('express');
const router = express.Router();

//挂载路由
//挂载get接口
router.get('/get', (req, res) => {
    //获取查询字符串
    let query = req.query;
    //返回数据
    res.send({
        status: 0,
        msg: 'get请求成功',
        data: query
    })
})
//挂载post接口
router.post('/post', (req, res) => {
    //返回数据
    res.send({
        status: 0,
        msg: 'post请求成功',
        data: req.body//获取的是urlencoded格式的数据
    })
})

//定义delete接口
router.delete('/delete', (req, res) => {
    res.send({
        status: 0,
        msg: 'delete请求成功',
    })
})

module.exports = router;