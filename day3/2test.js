const kkk = require('./kkk-tools');

console.dir(kkk);

console.log(kkk.dateFormat(new Date()));

const htmlEscapeStr = kkk.htmlEscape('<h2>"我最帅了<&nbsp;>"</h2>');
console.log('转义后:' + htmlEscapeStr);
console.log('转义前:' + kkk.htmlUnEscape(htmlEscapeStr));


