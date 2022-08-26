//默认情况下自定义模块的module.exports={}

//向module.exports中挂载一个属性和一个方法
module.exports.username = 'zs';

module.exports.sayHello = () => {
    console.log('hello');
}

//私有成员外界无法访问必须添加到module.exports中
const age = '20';
module.exports.age = age;


//让module.exports指向一个新的对象 旧对象不再生效
module.exports = {
    nickName: '小黑',
    age: '20'
}