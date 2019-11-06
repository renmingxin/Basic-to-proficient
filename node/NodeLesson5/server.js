let net = require("net");//TCP

let server = net.createServer();
server
.listen(12306,"127.0.0.1")
.on('listening',()=>{
    console.log("服务已启动")
})
.on('connection', socket => {
    console.log("有新的连接")
    socket.on("data", data => {
        //http请求
        console.log(data.toString())//http请求头
        let request = data.toString().split("\r\n");
        //url
        let urlParams = request[0].split(" ")[1];
        console.log(urlParams) 
        //返回一个http响应
        socket.write(
            "HTTP 200OK\r\nContent-type:text/html\r\nServer:RMX/1.1\r\n\r\n<html><body>hello client</body></html>"
        )
        socket.end();
    })
    
})