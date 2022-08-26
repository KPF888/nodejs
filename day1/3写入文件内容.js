//1.导入fs模块
const fs = require('fs');

//调用 fs.writeFile()方法
// 参数1：写入文件的相对路径
// 参数2：写入的内容
// 参数3：写入内容的编码方式 默认utf-8
// 参数3：回调函数，返回写入的结果 err  
fs.writeFile('./files/2.txt', data = '我是一个大帅比', 'utf8', function (err) {
    //如果文件写入成功 err为null
    //如果写入失败则err的值为一个错误对象
    if (err) return console.log('写入失败' + err.message);
    console.log('写入文件成功！\n写入内容为：' + data);
})
