const Time = require('./15dateFormat');

const time = new Date();//得到当前时间
console.log(Time.dateFormat(time));//调用自定义模块格式化时间