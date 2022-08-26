const db = require('../db/index');
const bcrypt = require('bcryptjs');

//获取用户信息
exports.userinfo = (req, res) => {
    //定义查询语句
    const selectSql = 'select * from ev_users where id=?;';
    db.query(selectSql, req.auth.id, (err, results) => {
        //执行sql语句失败
        if (err) return res.cc(err);
        //数据库操作失败
        if (results.length !== 1) return res.cc('获取用户信息失败');
        //将用户密码置空
        results[0].password = null;
        //返回用户信息
        res.send({
            status: 0,
            msg: '获取用户信息成功',
            data: results[0]
        })
    })
}

//更新用户信息
exports.updateUserInfo = (req, res) => {
    //定义sql语句
    const sql = 'update ev_users set ? where id=?';
    db.query(sql, [req.body, req.body.id], (err, results) => {
        //sql查询失败
        if (err) return res.cc(err);
        //数据库操作失败
        if (results.affectedRows !== 1) return res.cc('更新用户信息失败');
        res.cc('更新用户信息成功', 0);
    })
}

//重置密码
exports.updatePassword = (req, res) => {
    //查询
    const sql = 'select password from ev_users where id=?';
    db.query(sql, req.body.id, (err, results) => {
        if (err) return res.cc(err);
        //判断用户是否存在
        if (!results[0].id)
            return res.cc('用户不存在');
        //判断旧密码是否正确
        if (!bcrypt.compareSync(req.body.oldPwd, results[0].password))
            return res.cc('旧密码错误');
        //如果新旧密码相同那么验证规则会报错，所以不用写
        //修改旧密码
        //加密密码
        req.body.newPwd = bcrypt.hashSync(req.body.newPwd, 8);
        const sql = 'update ev_users set password=? where id=?';
        db.query(sql, [req.body.newPwd, req.body.id], (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1)
                return res.cc('更新密码失败！');
            res.cc('更新密码成功!', 0);
        })
    })
}

//更新头像
exports.updateAvatar = (req, res) => {
    //更新头像
    const sql = 'update ev_users set user_pic=? where id=?';
    db.query(sql, [req.body.avatar, req.body.id], (err, results) => {
        //如果查询失败
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc('更新头像失败');
        res.cc('更新头像成功', 0);
    })
}

