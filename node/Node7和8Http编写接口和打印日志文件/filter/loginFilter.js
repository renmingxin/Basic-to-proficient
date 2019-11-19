let url = require('url');

function loginFilter(request, response) {
    let params = url.parse(request.url,true).query;//第二个参数传true 转换为object ?name=rmx&age=20 -> {name:'rmx',age:'20'}
    if (params === '/login.html' || params === '/login'){
        return true;
    }
    //浏览器处理
    response.writeHead(302,{'location':'/login.html'});
    response.end();
    return false;
}
module.exports = loginFilter;