//导入fs模块操作文件
const fs = require('fs');

//调用readfile方法读取文件
// 参数1：读取文件的相对路径
// 参数2：指定编码方式，默认为UTF-8
// 参数3：回调函数，返回读取失败和成功的结果 err dataStr
fs.readFile('./files/1.txt', 'UTF-8', function (err, dataStr) {
    //打印失败结果
    //如果读取成功则 err的值为null
    //如果读取失败则 err的值为错误对象 dataStr的值为undefined
    console.log(err);
    console.log('-----------');

    //打印成功结果
    console.log(dataStr);
})