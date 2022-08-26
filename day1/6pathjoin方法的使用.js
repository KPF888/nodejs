const path = require('path');
const fs = require('fs');

//注意../会抵消上一级路径
// console.log(path.join('/a', '/b/c', '../', '/d'));

fs.readFile(path.join(__dirname, '/files/2.txt'), 'utf-8', (err, data) => {
    if (err) return console.log(err.message);
    console.log(data);
})