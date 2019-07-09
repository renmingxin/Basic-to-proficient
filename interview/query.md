#JS部分
>1.bind、call、apply的区别？
答：
相同点：改变this指向。
不同点：传参列表不同，call是多个参数，apply而是第二个参数是一个数组。bind也有多个参数。call和apply会立即执行而 bind 不会立即执行，他可以被赋值给一个变量等待下次执行。
>2.如何手动封装一个bind、call、apply函数？
答：href:./js/2.2.手动封装bind、call、apply函数.html;
>3.function(){} 与 ()=>{} 的区别是什么？
答：
1.使用function(){}定义的函数，this的指向随着调用环境的变化而变化，而箭头函数中的this指向是固定不变的，一直指向定义的函数环境。
2.function(){}是可以定义构造函数的，而箭头函数是不行的。
3.由于js的内存机制，function的级别最高，而用箭头函数定义函数的时候，需要var(let const定义的时候更不必说)关键词，而var所定义的变量不能得到变量提升，故箭头函数一定要定义于调用之前！
href:./js/3.html;
>4.new运算符到底做了什么？
function Person () {}
答：new就是个语法糖
1.创建一个空对象 obj = {};
2.链接到原型   obj.__proto__ = Person.prototype;
3.绑定this值   将构造函数的作用域赋值给新对象 （也就是this指向新对象）  
4.返回新对象 Person.call(obj)
herf:./js/4.手动封装一个new运算符.html
>5.JS变量提升
答：
1.创建AO对象（Activation Object）：（执行期上下文）;
2.找形参和变量声明，将变量和形参名作为A0属性名，值为undefined,比如有var a,var b,AO里面的key值就是a和b
3.将实参值和形参统一
4.在函数体里面找函数声明，值赋予函数体,表达式不能提升比如var a = function (){},函数可以提升,比如：function a(){};
herf:"@/成哥js课dome/预编译.html"
>6.说一说原型链
答：
1.每一个函数都有prototype属性
2.每个对象都有 __proto__
3.Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
4.Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
5.Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
6.除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
7.函数的 prototype 是一个对象，也就是原型
8.对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链
>7.怎么判断对象类型？
答：
1.基本数据类型用typeof判断
2.可以通过 Object.prototype.toString.call(xx)。这样我们就可以获得类似 [object Type] 的字符串。(重点：Object是js中所有其他数据类型的父类。意思是所有的数据类型都继承了Object,,但是无论是string还是array都是会重写这个tostring方法,而且Object.prototype.toString.你要理解这代码的意思。prototype从英文就说了是“原型”的意思。就是说你这个Object.prototype.toString调用的是object的原型（也就是父类）的tostring方法);
3.instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype
herf:./js/7.怎么判断对象类型.html
>8.javaScript有多少种类型？
答：
1.基本数据类型：String、Number、Boolean、Symbol、undefined、null（六种）
2.引用数据类型：Function Object Array(未知可能有很多种比如Date、RegExp)
>9.箭头函数的特点？
答：
1.箭头函数其实是没有 this 的，这个函数中的this只取决于离他最近的的第一个不是箭头函数的函数的 this。
>10.this的指向？
herf:https://www.cnblogs.com/pssp/p/5216085.html
>11.async、await 优缺点
答：async 和 await 相比直接使用 Promise 来说，优势在于处理 then 的调用链，能够更清晰准确的写出代码。缺点在于滥用 await 可能会导致性能问题，因为 await 会阻塞代码，也许之后的异步代码并不依赖于前者，但仍然需要等待前者完成，导致代码失去了并发性。
href：./js/11.async、await 优缺点.html
>12.generator 原理
答：从以上代码可以发现，加上 * 的函数执行后拥有了 next 函数，也就是说函数执行后返回了一个对象。每次调用 next 函数可以继续执行被暂停的代码。
href：./js/12.generator原理.html
>13.手动封装一个promise
href：'@/EmploymentClass/Es6-Promise'
>14.== 与 === 有什么区别？
答：==会经历类型转换去匹配==对面比如 '123' == 123 true，而===是值与类型都进行匹配都正确才返回true。
>15.javascript(浏览器)垃圾回收，以及怎么优化？
答：
回收机制：1.标记清除、2.引用计数。
优化：
1.不再使用的值和对象可以赋值为null。 obj = null
2.对象object优化 可以进行逐个删除 delete obj[key]
3.数组array优化 讲length赋值为0  arr.length = 0
4.方法function优化
href:https://www.cnblogs.com/zhwl/p/4664604.html
>16.谈一谈js闭包？
答：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。
href：'@/成哥js课demo/闭包.html'
>17.基本数据类型和引⽤类型在存储上的差别?
答：前者存储在栈上，后者存储在堆上，基本数据类型的变量存放的是基本类型数据的实际值；而引用数据类型的变量保存对它的引用，即指针。
>18.浏览器 Eventloop 和 Node 中的有什么区别?
href：'./js/浏览器 Eventloop 和 Node 中的有什么区别.html'
url:https://juejin.im/post/5ba34e54e51d450e5162789b#heading-22
>19.深拷贝的方法？
答：JSON.parse(JSON.stringify(object));《弊端：1.会忽略 undefined 2.会忽略 symbol 3.不能序列化函数 4.不能解决循环引用的对象 》
href：'@/EmploymentClass/第九章网络技术提升(1)/09-01网络技术提升之面试题.html'
>20.什么是事件代理？
答：如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上
事件代理的方式相对于直接给目标注册事件来说，有以下优点：
1.节省内存
2.不需要给子节点注销事件
href:'./js/20.什么是事件代理.html'
#Vue部分



#webpack部分




#Html、Css部分



#网络知识


#浏览器知识
>1.cookie和localSrorage、session、indexDB 的区别?
特性            cookie                                    localStorage             sessionStorage           indexDB
数据生命周期     一般由服务器生成，可以设置过期时间           除非被清理，否则一直存在   页面关闭就清理             除非被清理，否则一直存在
数据存储大小     4K                                        5M                       5M                       无限
与服务端通信     每次都会携带在 header 中，对于请求性能影响   不参与                    不参与                    不参与
>2.怎么判断页面是否加载完成？
window.onload = function(){}
答：Load 事件触发代表页面中的 DOM，CSS，JS，图片已经全部加载完毕。
>3.如何解决跨域?
因为浏览器出于安全考虑，有同源策略。也就是说，如果协议、域名或者端口有一个不同就是跨域，Ajax 请求会失败。
答：1.JSONP  2.CORS    3.document.domain   4.postMessage
href：./browser/3.如何解决跨域.js
>4.讲一讲浏览器缓存？（比较复杂，重点）
答：缓存对于前端性能优化来说是个很重要的点，良好的缓存策略可以降低资源的重复加载提高网页的整体加载速度。
通常浏览器缓存策略分为两种：强缓存和协商缓存。
href：百度
>5.讲一讲重绘（Repaint）和回流（Reflow）？
