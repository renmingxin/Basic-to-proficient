let net = require('net');//网络层和运输层  TCP/IP协议
let fs  = require('fs');
let globalConf = require('./conf')
console.log(globalConf)
let server = net.createServer();
server
.listen(globalConf.port,globalConf.ip)
.on('listening',()=>{
    console.log("服务器已经启动")
})
.on('connection',scoket=>{
    console.log("有新的客户端连接");
    scoket.on('data',data=>{
        let url = data.toString().split('\r\n')[0].split(" ")[1];
        try {
            let dataFile = fs.readFileSync(globalConf["basePath"] + url);
            console.log(dataFile)
            scoket.write("HTTP/1.1 200OK\r\n\r\n");
            scoket.write(dataFile);
        } catch (error) {
            scoket.write("HTTP/1.1 400NotFound\r\n\r\n" + "<html><body>404</body></html>");
        }
        scoket.end();
    })
})
