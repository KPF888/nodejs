//导入mydql模块
const mysql = require('mysql');
//连接mysql数据库
const db = mysql.createPool({
    host: '127.0.0.1',//数据库ip地址
    user: 'root',//数据库用户名
    password: 'admin666',//数据库密码
    database: 'my_db_1'//指定要操作哪个数据库
})

//测试mysql模块能否正常工作
// db.query('select * from users where id=3;', (err, results) => {
//     //如果报错则打印报错信息
//     if (err) return console.log(err.message);
//     //否则打印查询结果
//     console.log(results);
// })

// const sqlStr = 'select * from users;';
// //如果执行的是select查询语句 则执行的结果是数组
// db.query(sqlStr, (err, results) => {
//     if (err) return console.log(err.message);
//     console.log(results);
// })



// //向users表中新增一条数据
// const user = {
//     username: 'ironman',
//     password: 'pikachu123'
// }
// //待执行的sql语句 ?代表占位符
// const sqlStr = 'insert into users (username,password) values (?,?);';
// //执行sql语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message);
//     //注意如果执行的是 insert into 则返回的是一个OkPacket对象 里面包含affectedRows属性，这个属性代表变化的行数,可以判断插入数据是否成功
//     if (results.affectedRows === 1) console.log('插入数据成功!');
// })



//用便捷方式插入数据
// const user = {
//     username: 'lookup',
//     password: 'pikachu456'
// }
// // 定义待执行的sql语句
// const sqlStr = 'insert into users set ?;';
// //执行sql语句
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('数据插入成功');
// })

//演示更新数据
// const user = {
//     id: 6,
//     username: 'aaa',
//     password: '000'
// }
// const sqlStr = 'update users set username=?,password=? where id=?;';
// //执行语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     //执行了update以后返回的也是一个对象
//     if (results.affectedRows === 1) console.log('数据更新成功');
// })

//更新数据的简便写法
// const user = {
//     id: 7,
//     username: 'bbb',
//     password: '111'
// }
// const sqlStr = 'update users set ? where id=?;';
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) console.log('便捷更新数据成功');
// })

//删除数据
// const sqlStr = 'delete from users where id=?;';
// //如果只有一个占位符，第二个参数的数组符号可以省略
// db.query(sqlStr, 7, (err, results) => {
//     if (err) return console.log(err.message);
//     //delete操作返回的也是一个对象
//     if (results.affectedRows === 1) console.log('数据删除成功');
// })

//标记删除 更新status为1 即表示删除
const sqlStr = 'update users set status=1 where id=?;';
db.query(sqlStr, 6, (err, results) => {
    if (err) return console.log(err.message);
    //delete操作返回的也是一个对象
    if (results.affectedRows === 1) console.log('数据删除成功');
})
