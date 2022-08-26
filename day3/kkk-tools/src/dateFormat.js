//定义格式化时间的函数
function dateFormat(dateStr) {
    let date = new Date(dateStr);
    const YY = date.getFullYear();
    const MM = date.getMonth() + 1;
    const DD = date.getDate();

    const hh = padZero(date.getHours());
    const mm = padZero(date.getMinutes());
    const ss = padZero(date.getSeconds());
    return `${YY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
}

//定义补零函数
function padZero(n) {
    return n > 9 ? n : '0' + n;
}

module.exports = {
    dateFormat
}