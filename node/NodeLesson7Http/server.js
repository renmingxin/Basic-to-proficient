var http = require('http');
var url = require('url');
var fs = require('fs');
var globalConf = require('./config')

http.createServer((request,response)=>{
    let pathName = url.parse(request.url).pathname;//路径名
    let params = url.parse(request.url,true).query;//第二个参数传true 转换为object
    let isStatic = isStaticRequest(pathName)
    if(isStatic){//请求的静态的文件
        try {
            let fsData = fs.readFileSync(globalConf.page_path + pathName);
            response.writeHead(200);//状态码
            response.write(fsData);
            response.end();
        } catch (error) {
            response.writeHead(404);//状态码
            response.write('<html><body><h1>404 NOT FOUND</h1></body></html>');
            response.end();
        }
    }else{//请求的是动态的数据

    }
}).listen(globalConf.port)

//判断是否请求的是静态资源   用后缀来判断
function isStaticRequest(pathName){
    for (let i = 0; i < globalConf.static_file_type.length; i++) {
        let temp = globalConf.static_file_type[i];
        if(pathName.indexOf(temp) == (pathName.length - temp.length)){//判断后缀名在末尾
            return true
        }
    }
}