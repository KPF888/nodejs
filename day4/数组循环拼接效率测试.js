var str = [];
var date1 = +new Date();
for (var i = 0; i < 100000; i++) {
    str.push('666');
}
var str2 = str.join('');
var date2 = +new Date();
console.log(date2 - date1);

//结论：字符串和数组拼接之间几乎无差别