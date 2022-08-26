//文章分类路由函数
const db = require('../db/index');

exports.getArtCate = (req, res) => {
    //定义sql语句
    let sql = 'select * from ev_article_cate where is_delete=0 order by id asc';
    db.query(sql, (err, results) => {
        if (err) return res.cc(err);
        if (results.length === 0)
            return res.cc('无文章');
        res.send({
            status: 0,
            msg: '获取文章分类列表成功',
            data: results
        })
    })
}

exports.addArtCate = (req, res) => {
    //查询是否有该文章类目
    const sql = 'select name,alias from ev_article_cate where name=? or alias=?';
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        //查询失败
        if (err) return res.cc(err);
        //如果书类目重复
        if (results.length !== 0) {
            let name = req.body.name;
            let alias = req.body.alias;
            let dbName = results[0].name;
            let dbAlias = results[0].alias;
            if (results.length == 2) return res.cc('分类名与分类别名被占用');
            if (results.length == 1) {
                if (name === dbName && alias !== dbAlias)
                    return res.cc('分类名被占用');
                if (name !== dbName && alias === dbAlias)
                    return res.cc('分类别名被占用');
                if (name === dbName && alias === dbAlias)
                    return res.cc('分类名与分类别名被占用');
            }
        }
        //定义sql语句
        const sql = 'insert into ev_article_cate set ?';
        db.query(sql, req.body, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1)
                return res.cc('新增文章类目失败');
            res.cc('新增文章分类成功', 0);
        })
    })
}

//删除文章
exports.deleteCate = (req, res) => {
    const id = req.params.id;
    //判断文章是否已经删除
    const sql = 'select is_delete from ev_article_cate where id=?';
    db.query(sql, id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length === 0) return res.cc('没有该文章!');
        if (results[0].is_delete) return res.cc('该文章已经删除!');
        //更新is_delete
        let sql = 'update ev_article_cate set is_delete=1 where id=?';
        db.query(sql, id, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc('删除文章失败');
            res.cc('删除文章成功', 0);
        })
    })
}

//获取文章分类数据
exports.getCate = (req, res) => {
    const sql = 'select * from ev_article_cate where id=?';
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            msg: '获取' + results[0].name + '分类信息成功',
            data: results[0]
        })
    })
}

//更新文章分类的接口
exports.updateCate = (req, res) => {
    //定义sql语句
    let updateCate = {
        name: req.body.name,
        alias: req.body.alias
    }
    //判断是否重名
    let sql = 'select name,alias from ev_article_cate where id<>? and (name=? or alias=?)';
    db.query(sql, [req.body.Id, updateCate.name, updateCate.alias], (err, results) => {
        if (err) return res.cc('更新数据错误');
        if (results.length !== 0) {
            let name = req.body.name;
            let alias = req.body.alias;
            let dbName = results[0].name;
            let dbAlias = results[0].alias;
            if (results.length == 2) return res.cc('分类名与分类别名被占用');
            if (results.length == 1) {
                if (name === dbName && alias !== dbAlias)
                    return res.cc('分类名被占用');
                if (name !== dbName && alias === dbAlias)
                    return res.cc('分类别名被占用');
                if (name === dbName && alias === dbAlias)
                    return res.cc('分类名与分类别名被占用');
            }
        };
        let sql = 'update ev_article_cate set ? where id=?';
        db.query(sql, [updateCate, req.body.Id], (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败');
            res.cc('更新文章分类成功', 0);
        })
    })
}
