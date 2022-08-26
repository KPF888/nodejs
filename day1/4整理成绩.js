//1.导入fs库
const { ifError } = require('assert');
const fs = require('fs');
const internal = require('stream');

//2.读取文件成绩.txt
fs.readFile('./素材/成绩.txt', 'utf-8', function (err, data) {
    if (err) return console.log('读取失败' + err.message);

    //先以空格为分隔符转为数组然后遍历替换等于号为冒号
    //遍历隔行写入到成绩-ok.txt文件
    const oldArr = data.split(' ');

    const newArr = [];
    // for (var i = 0; i < oldArr.length; i++) {
    //     newArr.push(oldArr[i].replace('=', ':'));
    // }
    //新写法
    oldArr.forEach(item => {
        newArr.push(item.replace('=', ':'));
    })

    var res = newArr.join('\r\n');
    //写入文件到成绩-ok
    fs.writeFile('./files/成绩-ok.txt', res, 'utf-8', function (err) {
        if (err) return console.log('文件写入错误' + err.message);
        console.log('写入文件成功！');
    })
})