//这是包的入口文件
const dateFormat = require('./src/dateFormat');
const htmlEscape = require('./src/htmlEscape');

//向外暴露格式化时间方法
module.exports = {
    ...dateFormat,//展开所有属性和方法 es6写法
    ...htmlEscape//展开所有属性和方法
}



