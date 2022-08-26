//定义格式化时间函数
function dateFormat(date) {
    const time = new Date(date);
    const y = time.getFullYear();
    const m = time.getMonth();
    const d = time.getDate();

    const hh = time.getHours();
    const mm = time.getMinutes();
    const ss = time.getSeconds();
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
}

//定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

// 暴露函数
module.exports = {
    dateFormat
}