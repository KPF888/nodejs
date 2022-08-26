const path = require('path');

//定义文件存放路径
const fpath = '/a/b/c/index.html';

const fext = path.extname(fpath);

console.log(fext);