const path = require("path");

//定义文件路径
const fpath = '/a/b/c/index.html';

//定义存放文件名常量
const fullName = path.basename(fpath);

//第二个参数可以去掉扩展名
const withoutExtName = path.basename(fpath, '.html');
console.log(fullName + '  ' + withoutExtName);