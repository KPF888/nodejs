## 安装
```
npm install kkk-tools
```

## 导入
```js
const kkk=require('kkk-tools');
``` 

## 格式化时间
```js
//调用dateFormat对时间进行格式化
console.log(kkk.dateFormat(new Date()));
```

## html转义
```js
//调用htmlEscape对html非法字符进行转义
const htmlEscapeStr = kkk.htmlEscape('<h2>"我最帅了<&nbsp;>"</h2>');
console.log('转义后:' + htmlEscapeStr);
```

## html还原
```js
//先进行转义，然后再通过htmlUnEscape还原html
const htmlEscapeStr = kkk.htmlEscape('<h2>"我最帅了<&nbsp;>"</h2>');
console.log('转义前:' + kkk.htmlUnEscape(htmlEscapeStr));
```

## 开源协议
ISC