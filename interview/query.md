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
#Vue部分



#webpack部分




#UI部分