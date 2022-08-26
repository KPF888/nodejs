//这是路由模块
// 1.导入服务器
const express = require('express');

//实例化路由对象
const router = express.Router();

//向router上挂载具体的路由规则
router.get('/user/list', (req, res) => {
    res.send('GET user list success.');
});

router.post('/user/add', (req, res) => {
    res.send('Add user success by method post.');
});


//暴露router路由对象
module.exports = router;