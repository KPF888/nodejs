const moment = require('moment');

//得到现在的时间
const time = new Date('2018-2-10');
console.log(moment(time).format('YYYY-MM-DD HH:mm:ss'));
