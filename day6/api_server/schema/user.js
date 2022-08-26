//导入定义验证规则的包
const joi = require('joi');
//string()字符串
//alphanum() a-z，A-Z，0-9
//min()最小值
//max()最大值
//required()必填项
//pattern()写正则表达式匹配
//not()取反
//ref()内容完全相同
//concat()规则拼接

//注意：token中的属性也要加入验证规则，否则获取不到
//这个规则既是过滤规则也是放行规则

//定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(8).required();
const password = joi.string().pattern(/^[\S]{6,12}$/).required();
//定义邮箱昵称和id验证规则
const id = joi.number().integer().min(1).required();
const email = joi.string().email().required();
const nickname = joi.string().required();

//定义并暴露验证规则对象
exports.regLoginSchema = {
    body: {
        username,
        password
    }
}

//定义更新用户信息的验证规则
exports.updateUserInfoSchema = {
    body: {
        id,
        email,
        nickname
    }
}

//定义重置密码验证规则
exports.updatePwd = {
    body: {
        id,
        oldPwd: password,
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

//定义更换头像规则
exports.updateAvatar = {
    body: {
        id,
        avatar: joi.string().dataUri().required()
    }
}

//定义增加文章规则
exports.addArtCateSchema = {
    body: {
        name: joi.string().required(),
        alias: joi.string().alphanum().required()
    }
}

//通过动态参数params id删除文章的规则
exports.deleteCateSchema = {
    params: {
        id: id
    }
}

//通过body.id更新文章分类数据规则
exports.updateCate = {
    body: {
        Id: id,
        name: joi.string().required(),
        alias: joi.string().alphanum().required()
    }
}