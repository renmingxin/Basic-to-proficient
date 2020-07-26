# ajax部分
1. ajax是什么？
答：　可以在页面不刷新的情况下向服务器发送HTTP请求，并使用JavaScript处理返回的结果
2. ajax的使用
答：
1. 创建Ajax请求对象(XMLHttpRequest、ActiveXObject)
2. 绑定事件open（传输类型，接口,get为拼接url，是否异步）post为send(参数)
3. onreadystatechange（状态改变回调 ）
4. readyState === 4 status === 200 http状态
5. 拿到responseText数据体
```js
    function myAjax(type='GET',url,params,callback){
        let xmlHttp;
        xmlHttp = new XMLHttpRequest();
        //ActiveXObject 兼容ie6
        if(type === 'GET'){
            xmlHttp.open(type, url, true);
            xmlHttp.send(null);
        }else if(type === 'POST'){
            xmlHttp.open(type,url);
            xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xmlHttp.send(params)
        }
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200){
                callback(xmlHttp.responseText)
            }
        }
    }
```

3. http是什么？
答：超文本传输协议，服务器传输超文本到本地浏览器的传送协议，它是基于是一个基于TCP/IP通信协议来传递数据。


4. IOS有几层模型 HTTP、TCP、IP分别在第几层？
答：OSI的7层从上到下分别是 
7 应用层(TELNET，HTTP，FTP，NFS，SMTP) 
6 表示层 
5 会话层 
4 传输层 （TCP，UDP）
3 网络层 （IP)）
2 数据链路层 
1 物理层

5. 常见的HTTP状态码有哪些？
答：
    + 1xx：这个状态码是告诉客户端应该继续发送请求。
    + 2xx：这个是最常见的http状态码，表示服务器已经成功接受请求，并将返回客户端所请求的最终结果
    + 3xx：重定向，要完成请求，需要进一步操作。通常，这些状态码用来重定向
    + 304：表示服务器允许访问资源，但因发生请求未满足条件的情况。
    + 4xx：客服端错误
    + 404：表示在服务器上没有找到请求的资源
    + 5xx：服务器错误
    + 500：表示服务器端在执行请求时发生了错误
    + 503：服务器由于临时的服务器过载或者是维护，无法解决当前的请求。
6. 输入URL到页面加载的全过程？
答：
    1. 浏览器根据DNS服务器解析得到域名的IP地址(解析DNS，建立IP连接)
    2. 建立TCP连接(建立TCP链接,就是通常说的三次握手,首先是客户端向服务器发送请求是否可以建立链接,服务器返回同意后,客户端回馈服务器的响应,即完成3次通话。)
    3. 向这个IP的服务器发送HTTP请求(HTTP请求包括请求行:方法+地址+http版本，请求头Request headers，请求体Request body)
    4. 服务器收到,处理并返回HTTP请求(收到服务器端响应包括响应行：http版本+状态码+状态描述,响应头，响应体)
    5. 浏览器得到返回内容(浏览器解析数据解析DOM Tree-->解析CSS Tree-->DOM+CSS Tree布局绘制到屏幕,解析JS)
    6. 关闭TCP连接
    + 渲染过程:
        1. 根据HTML结构生成DOM树
        2. 根据CSS生成CSSOM
        3. 将DOM和CSSOM整合形成RenderTree
        4. 根据RenderTree开始渲染和展示
