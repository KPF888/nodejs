//定义转义html字符的函数
function htmlEscape(htmlStr) {
    return htmlStr.replace(/<|>|"|&/g, (str) => {
        switch (str) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '"':
                return '&quot;';
            case '&':
                return '&amp;';
        }
    })
}

//定义还原html字符的函数
function htmlUnEscape(htmlStr) {
    return htmlStr.replace(/&lt;|&gt;|&quot;|&amp;/g, (str) => {
        switch (str) {
            case '&lt;':
                return '<';
            case '&gt;':
                return '>';
            case '&quot;':
                return '"';
            case '&amp;':
                return '&';
        }
    })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}