//导入数据库模块
const db = require('../db/index');
//导入加密包
const bcrypt = require('bcryptjs');
//导入token加密包
const jwt = require('jsonwebtoken');
//导入全局配置 主要是生成token的秘钥
const config = require('../config');

//用户注册
exports.reguser = (req, res) => {
    const userInfo = req.body;
    // 1. 检测表单数据是否合法
    // if (!userInfo.username || !userInfo.password) return res.send({
    //     status: 1,
    //     msg: '用户名或密码不合法'
    // });

    // 2. 检测用户名是否被占用 查询语句返回为数组
    const sqlStr = 'select * from ev_users where username=?;';
    db.query(sqlStr, userInfo.username, (err, results) => {
        //查询错误
        if (err) return res.send({
            status: 1,
            msg: err.message
        });
        //用户名重复
        if (results.length > 0) {
            return res.cc('用户名重复!');
        }
        // 3. 对密码进行加密处理 调用bcryptjs.hashSync(明文密码,随机盐的长度)对密码进行加密
        userInfo.password = bcrypt.hashSync(userInfo.password, 8);

        // 4. 插入新用户
        const insertSql = 'insert into ev_users set ?;';
        db.query(insertSql, { username: userInfo.username, password: userInfo.password }, (err, results) => {
            if (err) return res.send({
                status: 1,
                msg: err.message
            });
            //判断变动行数
            if (results.affectedRows !== 1) return res.send({
                status: 1,
                msg: '注册失败，请稍后重试！'
            });
            res.send({
                status: 0,
                msg: '用户注册成功'
            });
        })
    })

}
//用户登录
exports.login = (req, res) => {
    //获取表单数据
    let userinfo = req.body;
    //查询数据
    let selectSql = 'select * from ev_users where username=?;';
    db.query(selectSql, userinfo.username, (err, results) => {
        //如果错误
        if (err) return res.cc(err);
        //如果查询不到
        if (results.length === 0) return res.cc('请先注册！');
        //验证密码 bcrypt.compareSync()如果相同则返回真
        if (!bcrypt.compareSync(userinfo.password, results[0].password))
            return res.cc('密码错误');
        //在服务器端生成token
        const tokenStr = jwt.sign({ id: results[0].id, username: results[0].username }, config.tokenSecretKey, { expiresIn: config.expiresIn });
        //将token发送给客户端
        res.send({
            status: 0,
            msg: '登录成功!',
            token: 'Bearer ' + tokenStr
        });
    })
}