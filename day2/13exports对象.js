//exports 与 module.exports指向的是同一个对象
console.log(exports === module.exports);



//1.案例
// module.exports.username = 'ls';

// exports.username = 'zs';
//输出为zs

//2.案例
// module.exports.username = 'ls';//这种赋值语句不更改指向，只改变栈中的内存区域的值

// exports = {//exports指向了另一个新对象
//     age: 50
// }
//输出为ls

//3.案例
// module.exports.username = 'zs';
// exports.age = 20;
//输出结果为{ username: 'zs', age: 20 }


//4.案例
exports = {//改变exports指向
    username: 'zs',
    age: 20
}
module.exports = exports;//module.exports指向到exports指向的对象，两个指向对象一致
module.exports.sex = '男';//给指向的对象添加属性sex:'男'
//输出结果{ username: 'zs', age: 20, sex: '男' }

//结论：暴露的对象永远是module.exports指向的那个对象
//注意：当给exports或者module.exports赋值对象时，都是指向新的对象，而挂载方法或者属性则是修改当前对象