var net  = require("net");

//创建server
var server = net.createServer();
//监听端口
server.listen(12306,"127.0.0.1")
// console.log(server)

server.on('listening',function (){
    //只能在回调函数里面调用address方法
    // console.log(server.address())//{ address: '127.0.0.1', family: 'IPv4', port: 12306 }
    console.log("服务已启动")
})

//客服端client去请求的时候会触发
server.on('connection',function(socket){
    console.log("有新的连接:"+socket);
    socket.on('data',function(data){
        console.log(data.toString())
        socket.write("服务端发送：hello，客户端")
    })
    .on('close',function(){
        console.log('客户端已关闭')
        server.close();
    })
})
server.on('close',function(){
    console.log("服务器已关闭")
})