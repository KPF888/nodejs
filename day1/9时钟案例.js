const fs = require('fs');
const { resolve } = require('path');

const path = require('path');

//匹配<style></style>标签 与 <script></script>标签
const regStyle = /<style>[\s\S]*<\/style>/;
const regScript = /(<script>)[\s\S]*(<\/script>)/;

//调用fs.readfile()读取文件
fs.readFile(path.join(__dirname, './素材/index.html'), 'utf-8', (err, data) => {
    //如果读取失败
    if (err) return console.log('文件读取失败' + err.message);
    //读取成功 调用三个方法分别拆分js，css，html
    resolveCss(data);
    resolveJs(data);
    resolveHtml(data);
})

//定义处理css样式的函数
function resolveCss(html) {
    //正则匹配style内容
    const r1 = regStyle.exec(html);
    //替换掉内容中的style标签
    var res = r1[0].replace('<style>', '').replace('</style>', '');
    //将结果写入到clock下的index.css文件中
    fs.writeFile(path.join(__dirname, '/colok/index.css'), res, 'utf-8', (err) => {
        if (err) return console.log('写入css文件失败' + err.message);
        console.log('写入css文件成功');
    })
}

//定义处理js样式的函数
function resolveJs(html) {
    //正则匹配内容
    var r1 = regScript.exec(html);
    //替换标签
    var res = r1[0].replace(r1[1], '').replace(r1[2], '');

    //写入文件
    fs.writeFile(path.join(__dirname, './colok/index.js'), res, 'utf-8', (err) => {
        if (err) return console.log('js写入失败' + err.message);
        console.log('js写入成功！');
    })
}

//定义html替换外联标签函数
function resolveHtml(html) {
    //将字符串调用replace方法把内嵌的style和script标签替换为外联的标签
    var res = html.replace(regStyle, '<link rel="stylesheet" href="../colok/index.css"/>').replace(regScript, '<script src="../colok/index.js" type="text/javascript"></script>');
    //写入文件
    fs.writeFile(path.join(__dirname, './素材/index.html'), res, 'utf-8', (err) => {
        if (err) return console.log('html文件写入失败' + err.message);
        console.log('html文件写入成功');
    })
}
