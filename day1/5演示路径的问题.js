//导入fs文件操作库
const fs = require('fs');

//动态路径会以执行node命令时所在的目录拼接除路径
//解决方法：直接写绝对路径 但还是移植性差不易于维护
// fs.readFile('D:\\前端开发\\nodejs\\第一天\\files\\成绩-ok.txt', 'utf-8', function (err, data) {
//     if (err) return console.log('读取错误' + err.message);
//     console.log(data);
// })


//最优解决方案
//__dirname 表示当前文件所在目录
fs.readFile(__dirname + '/files/2.txt', 'utf-8', function (err, data) {
    if (err) return console.log('读取错误' + err.message);
    console.log(data);
})