var net  = require("net");

//socket === 通信管道
var socket = net.connect(12306,"127.0.0.1");
// socket.setTimeout(2000);
// socket.on('timeout',function(){
//     console.log("连接超时")
//     socket.end();
// })
socket.on('connect',function(){
    console.log("已连接到服务器")
    console.log(socket.remoteAddress);//远程的地址127.0.0.1
    console.log(socket.remotePort);//远程的端口12306
    console.log(socket.localAddress);//本地的地址
    console.log(socket.localPort);//本地的端口
})

socket.on('data',function(data){
    console.log(data.toString());
    socket.end();
})
socket.on('close',function(){
    console.log("socket连接已关闭")
})

socket.write("客户端发送：你好服务端");