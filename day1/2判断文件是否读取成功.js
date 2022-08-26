const fs = require('fs');
fs.readFile('./files/1.txt', 'utf8', function (err, data) {
    if (err) return console.log('读取失败\n' + err.message);
    console.log('读取文件成功！\n' + data);
})