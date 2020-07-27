# websocket部分

1. 什么是websocket？
答：websocket是HTML5的一个新协议，它允许服务端主动向客户端传递信息，实现浏览器和客户端双工通信。

2. WebSocket 的属性？   
    + Socket.readyState
        + 0 - 表示连接尚未建立。
        + 1 - 表示连接已建立，可以进行通信。
        + 2 - 表示连接正在进行关闭。
        + 3 - 表示连接已经关闭或者连接不能打开。

    + Socket.bufferedAmount：只读属性 bufferedAmount 已被 send() 放入正在队列中等待传输，但是还没有发出的 UTF-8 文本字节数。

3. WebSocket 事件
    1. open 回调： 连接建立时触发
    2. message 回调: 客户端接收服务端数据时触发
    3. error 回调: 通信发生错误时触发
    4. close 回调：连接建立时触发

4. 具体实现？
    + 客户端(js)：
        ```js
            function WebSocketTest()
                {
                    if ("WebSocket" in window)
                    {
                    alert("您的浏览器支持 WebSocket!");
                    // 打开一个 web socket
                    var ws = new WebSocket("ws://localhost:9998/echo");
                    ws.onopen = function()
                    {
                        // Web Socket 已连接上，使用 send() 方法发送数据
                        ws.send("发送数据");
                        alert("数据发送中...");
                    };
                    ws.onmessage = function (evt) 
                    { 
                        var received_msg = evt.data;
                        alert("数据已接收...");
                    };
                    ws.onclose = function()
                    { 
                        // 关闭 websocket
                        alert("连接已关闭..."); 
                    };
                    }
                    else
                    {
                    // 浏览器不支持 WebSocket
                    alert("您的浏览器不支持 WebSocket!");
                    }
                }
        ```