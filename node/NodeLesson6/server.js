var net  = require("net");
var fs  = require("fs"); //fileSystem 文件系统



var server = net.createServer();//创建一个server
server.listen(12306,"127.0.0.1");
server.on("listening",function(){
    console.log("服务已启动")
})

server.on("connection",socket=>{
    socket.on('data',data=>{
        var url = data.toString().split('\r\n')[0].split(' ')[1];
        try {
            //读文件 *同步读取文件（读取就卡着 读取完毕才进入下一阶段） 异步读取文件（读取时候可以进行后续操作）
            var fsData = fs.readFileSync(__dirname + url)
            socket.write('HTTP/1.1 200OK\r\n\r\n');
            socket.write(fsData)
        } catch (error) {
            socket.write('HTTP/2.1 404NOTFOUND\r\n\r\n<html><body><h1>404NOT FOUND</h1></body></html>');
        }
        socket.end();
    })
})