# JS部分

## 1.bind、call、apply的区别？
答：
+ 相同点：改变this指向。
+ 不同点：传参列表不同，call是多个参数，apply而是第二个参数是一个数组。bind也有多个参数。call和apply会立即执行而 bind 不会立即执行，他可以被赋值给一个变量等待下次执行。

## 2.如何手动封装一个bind、call、apply函数？
答：href:./js/2.2.手动封装bind、call、apply函数.html;
```javaScript
    //1.实现bind函数的封装
    Function.prototype.myBind = function (context) {
        if (typeof this !== 'function') {
            throw new TypeError('Error');
        }
        let _this = this;
        let args = [...arguments].slice(1);//去掉第一个参数 也就是 context参数
        // 返回一个函数
        return function F() {
            //因为他返回了一个函数，我们可以 new F(),所以需要判断
            if (this instanceof F) {
                return new _this(...args, ...arguments)
            }
            return _this.apply(context, args.concat(...arguments));
        }
    }
```

```javaScript
    //2.实现call函数的封装
    Function.prototype.myCall = function (context) {
        var context = context || window
        // 给 context 添加一个属性
        // getValue.call(a, 'yck', '24') => a.fn = getValue
        context.fn = this
        // 将 context 后面的参数取出来
        var args = [...arguments].slice(1)
        // getValue.call(a, 'yck', '24') => a.fn('yck', '24')
        var result = context.fn(...args)
        // 删除 fn
        delete context.fn
        return result
    }
```

```javaScript
    //3.实现apply函数的封装
    Function.prototype.myApply = function (context) {
        var context = context || window
        context.fn = this
        var result
        // 需要判断是否存储第二个参数
        // 如果存在，就将第二个参数展开
        if (arguments[1]) {
            result = context.fn(...arguments[1])
        } else {
            result = context.fn()
        }

        delete context.fn
        return result
    }
```

## 3.function(){} 与 ()=>{} 的区别是什么？
答：
1. 使用function(){}定义的函数，this的指向随着调用环境的变化而变化，而箭头函数中的this指向是固定不变的，一直指向定义的函数环境。
2. function(){}是可以定义构造函数的，而箭头函数是不行的。
3. 由于js的内存机制，function的级别最高，而用箭头函数定义函数的时候，需要var(let const定义的时候更不必说)关键词，而var所定义的变量不能得到变量提升，故箭头函数一定要定义于调用之前！
+ href:./js/3.html;

## 4.new运算符到底做了什么？
+ 答：new就是个语法糖
1. 创建一个空对象 obj = {};
2. 链接到原型   obj.__proto__ = Person.prototype;
3. 绑定this值   将构造函数的作用域赋值给新对象 （也就是this指向新对象）  
4. 返回新对象 Person.call(obj)
+ herf:./js/4.手动封装一个new运算符.html

## 5.JS变量提升
答：
1. 创建AO对象（Activation Object）：（执行期上下文）;
2. 找形参和变量声明，将变量和形参名作为A0属性名，值为undefined,比如有var a,var b,AO里面的key值就是a和b
3. 将实参值和形参统一
4. 在函数体里面找函数声明，值赋予函数体,表达式不能提升比如var a = function (){},函数可以提升,比如：function a(){};
+ herf:"@/成哥js课dome/预编译.html"

## 6.说一说原型链
答：
1. 每一个函数都有 __prototype__ 属性
2. 每个对象都有 __proto__
3. Object 是所有对象的爸爸，所有对象都可以通过 __proto__ 找到它
4. Function 是所有函数的爸爸，所有函数都可以通过 __proto__ 找到它
5. Function.prototype 和 Object.prototype 是两个特殊的对象，他们由引擎来创建
6. 除了以上两个特殊对象，其他对象都是通过构造器 new 出来的
7. 函数的 __prototype__ 是一个对象，也就是原型
8. 对象的 __proto__ 指向原型， __proto__ 将对象和原型连接起来组成了原型链

## 7.怎么判断对象类型？
答：
1. 基本数据类型用typeof判断
2. 可以通过 Object.prototype.toString.call(xx)。这样我们就可以获得类似 [object Type] 的字符串。(重点：Object是js中所有其他数据类型的父类。意思是所有的数据类型都继承了Object,,但是无论是string还是array都是会重写这个tostring方法,而且Object.prototype.toString.你要理解这代码的意思。prototype从英文就说了是“原型”的意思。就是说你这个Object.prototype.toString调用的是object的原型（也就是父类）的tostring方法);
3. instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype
+ herf:./js/7.怎么判断对象类型.html

## 8.javaScript有多少种类型？基本数据类型和引用数据类型的区别是什么？
答：
1. 基本数据类型：String、Number、Boolean、Symbol、undefined、null（六种）
2. 引用数据类型：Function Object Array(未知可能有很多种比如Date、RegExp)
+ 区别:
1. 基本数据类型（存放在栈中）：基本数据类型是指存放在栈中的简单数据段，数据大小确定，内存空间大小可以分配，他们是直接按值存放的，所以可以直接按值访问的。
2. 引用数据类型(存放在堆中)
   1. 引用数据类型（存放在堆内存中的对象，每个空间大小不一样，要根据情况进行特定的配置）：引用类型是存放在堆内存中的对象，变量是是保存在栈内存中的一个指针（保存的是堆内存中的引用地址），这个指针指向堆内存。
   2. 引用类型数据在栈内存中保存的实际上是对象在堆内存中的引用地址。通过这个引用地址可以快速查找到保存在堆内存中的对象。
+ herf:'https://www.cnblogs.com/c2016c/articles/9328725.html'

## 9.箭头函数的特点？
答：
1. 箭头函数其实是没有 this 的，这个函数中的this只取决于离他最近的的第一个不是箭头函数的函数的 this。

## 10.this的指向？
+ herf:https://www.cnblogs.com/pssp/p/5216085.html

## 11.谈一谈async、await ？
+ 什么是Async/Await?
  1. async/await是写异步代码的新方式，以前的方法有回调函数和Promise。
  2. async/await是基于Promise实现的，它不能用于普通的回调函数。
  3. async/await与Promise一样，是非阻塞的。 
  4. async/await使得异步代码看起来像同步代码，这正是它的魔力所在。
+ href：./js/11.async、await 优缺点.html

## 12.generator 原理
答：从以上代码可以发现，加上 * 的函数执行后拥有了 next 函数，也就是说函数执行后返回了一个对象。每次调用 next 函数可以继续执行被暂停的代码。
+ href：./js/12.generator原理.html

## 13.手动封装一个promise
+ href：'@/EmploymentClass/Es6-Promise'

## 14.== 与 === 有什么区别？
答：==会经历类型转换去匹配==对面比如 '123' == 123 true，而===是值与类型都进行匹配都正确才返回true。

## 15.javascript(浏览器)垃圾回收，以及怎么优化？
答：
+ 回收机制：
   1. 标记清除
   2. 引用计数。
+ 优化：
   1. 不再使用的值和对象可以赋值为null。 obj = null
   2. 对象object优化 可以进行逐个删除 delete obj[key]
   3. 数组array优化 讲length赋值为0  arr.length = 0
   4. 方法function优化
+ href:https://www.cnblogs.com/zhwl/p/4664604.html

## 16.谈一谈js闭包？
答：
+ __简单的回答__
  1. 能够读取其他函数内部变量的函数。
  2. 函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

+ __稍微完整的回答：__
  在js中变量的作用域属于函数作用域，在函数执行完后，作用域会被清理，内存会随之被回收，但是由于闭包函数式简历在函数内部的子函数，由于其可访问上级作用域，即使，上级函数执行完，作用域也不会随之销毁，这时的子函数(也就是闭包)，便拥有了访问上级作用域中变量的权限，即使上级函数执行完毕后作用域内的值也不会被销毁。

+ __闭包解决了什么问题__
   1. 可以读取函数内部的变量
   2. 让这些变量的值始终保持在内存中。不会再函数调用后被清除。

+ __闭包的缺点__
   1. 由于闭包会使得函数中的变量都被保存到内存中，滥用闭包很容易造成内存消耗过大，导致网页性能问题。解决方法是在推出函数之前，将不再使用的变量全部删除。
   2. 闭包可以使得函数内部的值可以在函数外部进行修改。所以，如果你把父函数当做对象(object)使用，把闭包当做他的公共方法(public Method)，把内部变量当作它的私有属性(private value),这时一定要小心，不要随便改变父函数内部变量的值。
+ href：'@/成哥js课demo/闭包.html'

## 17.基本数据类型和引⽤类型在存储上的差别?
答：前者存储在栈上，后者存储在堆上，基本数据类型的变量存放的是基本类型数据的实际值；而引用数据类型的变量保存对它的引用，即指针。

## 18.浏览器 Eventloop 和 Node 中的有什么区别?
+ href：'./js/浏览器 Eventloop 和 Node 中的有什么区别.html'
+ url:https://juejin.im/post/5ba34e54e51d450e5162789b#heading-22

## 19.深拷贝的方法？
答：
+ JSON.parse(JSON.stringify(object));
   + 弊端：
     1.会忽略 undefined 
     2.会忽略 symbol 
     3.不能序列化函数 
     4.不能解决循环引用的对象 
+ href：'@/EmploymentClass/第九章网络技术提升(1)/09-01网络技术提升之面试题.html'

## 20.什么是事件代理？
答：
+ 如果一个节点中的子节点是动态生成的，那么子节点需要注册事件的话应该注册在父节点上，事件代理的方式相对于直接给目标注册事件来说，有以下优点：

      1.节省内存
      2.不需要给子节点注销事件
+ href:'./js/20.什么是事件代理.html'


## 21.防抖是什么？节流是什么?怎么处理？
答：在滚动事件中需要做个复杂计算或者实现一个按钮的防二次点击操作。这些需求都可以通过函数防抖动来实现。尤其是第一个需求，如果在频繁的事件回调中做复杂计算，很有可能导致页面卡顿，不如将多次计算合并为一次计算，只在一个精确点做操作。在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用debounce（防抖）和throttle（节流）的方式来减少调用频率，同时又不影响实际效果。 
+ 归纳总结：
  1. 函数防抖：将几次操作合并为一此操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay(延迟)时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。
  2. 函数节流：使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。

+ 区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
+ href:'./js/21.防抖是什么？节流是什么?怎么处理？.html'

## 22.JS函数柯里化(Currying)？
+ 函数柯里化，就是将一个接受多个参数的函数转化为接受单一参数的函数的技术。
+ herf：'./js/22.JS函数柯里化.html'

## 23.怎么理解async和await？
答：一句话，async 函数就是 Generator 函数的语法糖。一比较就会发现，async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成 await，仅此而已。

1. async 告诉程序这是一个异步，awiat 会暂停执行async中的代码，等待await 表达式后面的结果，跳过async 函数，继续执行后面代码
2. async 函数会返回一个Promise 对象，那么当 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值；当 async 函数抛出异常时，Promise 的 reject 方法也会传递这个异常值
3. await  操作符用于等待一个Promise 对象，并且返回 Promise 对象的处理结果（成功把resolve 函数参数作为await 表达式的值），如果等待的不是 Promise 对象，则用 Promise.resolve(xx) 转化
+ herf:'https://www.cnblogs.com/CandyManPing/p/9384104.html'
## 24.null undefined NaN的区别是什么？
答：未定义的值和定义未赋值的数据类型是undefined，null是一种特殊的object，NaN是一种特殊的number

# ES6+部分
## 1.ES6是什么，为什么要学习它，不学习ES6会怎么样?
答：ES6是新一代的JS语言标准，对分JS语言核心内容做了升级优化，规范了JS使用标准，新增了JS原生方法，使得JS使用更加规范，更加优雅，更适合大型应用的开发。学习ES6是成为专业前端正规军的必经之路。

## 2. ES5、ES6和ES2015有什么区别?
答：ES2015特指在2015年发布的新一代JS语言标准，ES6泛指下一代JS语言标准，包含ES2015、ES2016、ES2017、ES2018等。现阶段在绝大部分场景下，ES2015默认等同ES6。ES5泛指上一代语言标准。ES2015可以理解为ES5和ES6的时间分界线。

## 3.babel是什么，有什么作用?
答：babel是一个 ES6 转码器，可以将 ES6 代码转为 ES5 代码，以便兼容那些还没支持ES6的平台。

## 4.let有什么用，有了var为什么还要用let？
答：
在ES6之前，声明变量只能用var，var方式声明变量其实是很不合理的，准确的说，是因为ES5里面没有块级作用域是很不合理的，甚至可以说是一个语言层面的bug(这也是很多c++、java开发人员看不懂，也瞧不起JS语言的劣势之一)。没有块级作用域回来带很多难以理解的问题，比如for循环var变量泄露，变量覆盖等问题。let 声明的变量拥有自己的块级作用域，且修复了var声明变量带来的变量提升问题。

## 5.举一些ES6对String字符串类型做的常用升级优化?
1. ES6新增了字符串模板，在拼接大段字符串时，用反斜杠(`)取代以往的字符串相加的形式，能保留所有空格和换行，使得字符串拼接看起来更加直观，更加优雅。
2. ES6在String原型上新增了includes()方法，用于取代传统的只能用indexOf查找包含字符的方法(indexOf返回-1表示没查到不如includes方法返回false更明确，语义更清晰), 此外还新增了startsWith(), endsWith(), padStart(),padEnd(),repeat()等方法，可方便的用于查找，补全字符串。

## 6.举一些ES6对Array数组类型做的常用升级优化?
1. 数组解构赋值。ES6可以直接以let [a,b,c] = [1,2,3]形式进行变量赋值，在声明较多变量时，不用再写很多let(var),且映射关系清晰，且支持赋默认值。
2. 扩展运算符。ES6新增的扩展运算符(...)(重要),可以轻松的实现数组和松散序列的相互转化，可以取代arguments对象和apply方法，轻松获取未知参数个数情况下的参数集合。（尤其是在ES5中，arguments并不是一个真正的数组，而是一个类数组的对象，但是扩展运算符的逆运算却可以返回一个真正的数组）。扩展运算符还可以轻松方便的实现数组的复制和解构赋值（let a = [2,3,4]; let b = [...a]）。
3. ES6在Array原型上新增了find()方法，用于取代传统的只能用indexOf查找包含数组项目的方法,且修复了indexOf查找不到NaN的bug([NaN].indexOf(NaN) === -1).此外还新增了copyWithin(), includes(), fill(),flat()等方法，可方便的用于字符串的查找，补全,转换等。

## 7.举一些ES6对Number数字类型做的常用升级优化?
1. ES6在Number原型上新增了isFinite(), isNaN()方法，用来取代传统的全局isFinite(), isNaN()方法检测数值是否有限、是否是NaN。ES5的isFinite(), isNaN()方法都会先将非数值类型的参数转化为Number类型再做判断，这其实是不合理的，最造成isNaN('NaN') === true的奇怪行为--'NaN'是一个字符串，但是isNaN却说这就是NaN。而Number.isFinite()和Number.isNaN()则不会有此类问题(Number.isNaN('NaN') === false)。（isFinite()同上）
2. ES6在Math对象上新增了Math.cbrt()，trunc()，hypot()等等较多的科学计数法运算方法，可以更加全面的进行立方根、求和立方根等等科学计算。

## 8.举一些ES6对Object类型做的常用升级优化?(重要)
1. 对象属性变量式声明。ES6可以直接以变量形式声明对象属性或者方法，。比传统的键值对形式声明更加简洁，更加方便，语义更加清晰。
```js
let [apple, orange] = ['red appe', 'yellow orange'];
let myFruits = {apple, orange};    
// let myFruits = {apple: 'red appe', orange: 'yellow orange'};
```
2. 尤其在对象解构赋值(见优化部分b.)或者模块输出变量时，这种写法的好处体现的最为明显.
```js
let {keys, values, entries} = Object;
let MyOwnMethods = {keys, values, entries}; 
// let MyOwnMethods = {keys: keys, values: values, entries: entries}

```
3. 可以看到属性变量式声明属性看起来更加简洁明了。方法也可以采用简洁写法：
```js
let es5Fun = {
    method: function(){}
}; 
let es6Fun = {
    method(){}
}
```
4. 对象的解构赋值。 ES6对象也可以像数组解构赋值那样，进行变量的解构赋值：
```js
let {apple, orange} = {apple: 'red appe', orange: 'yellow orange'};

```
5. 对象的扩展运算符(...)。 ES6对象的扩展运算符和数组扩展运算符用法本质上差别不大，毕竟数组也就是特殊的对象。对象的扩展运算符一个最常用也最好用的用处就在于可以轻松的取出一个目标对象内部全部或者部分的可遍历属性，从而进行对象的合并和分解。
```js
let {apple, orange, ...otherFruits} = {apple: 'red apple', orange: 'yellow orange', grape: 'purple grape', peach: 'sweet peach'}; 
// otherFruits  {grape: 'purple grape', peach: 'sweet peach'}
// 注意: 对象的扩展运算符用在解构赋值时，扩展运算符只能用在最有一个参数(otherFruits后面不能再跟其他参数)
let moreFruits = {watermelon: 'nice watermelon'};
let allFruits = {apple, orange, ...otherFruits, ...moreFruits};
}
```
6. super 关键字。ES6在Class类里新增了类似this的关键字super。同this总是指向当前函数所在的对象不同，super关键字总是指向当前函数所在对象的原型对象。

7. ES6在Object原型上新增了is()方法，做两个目标对象的相等比较，用来完善'==='方法。'==='方法中NaN === NaN //false其实是不合理的，Object.is修复了这个小bug。(Object.is(NaN, NaN) // true)

8. ES6在Object原型上新增了assign()方法，用于对象新增属性或者多个对象合并。
```js
    const target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    Object.assign(target, source1, source2);
    target // {a:1, b:2, c:3}
    //assign合并的对象target只能合并source1、source2中的自身属性，并不会合并source1、source2中的继承属性，也不会合并不可枚举的属性，且无法正确复制get和set属性（会直接执行get/set函数，取return的值）。
```
9.   ES6在Object原型上新增了getPrototypeOf()和setPrototypeOf()方法，用来获取或设置当前对象的prototype对象。这个方法存在的意义在于，ES5中获取设置prototype对像是通过__proto__属性来实现的，然而__proto__属性并不是ES规范中的明文规定的属性，只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了，再非浏览器环境中并不一定就可以使用，所以为了稳妥起见，获取或设置当前对象的prototype对象时，都应该采用ES6新增的标准用法。

10. ES6在Object原型上还新增了Object.keys()，Object.values()，Object.entries()方法，用来获取对象的所有键、所有值和所有键值对数组。

## 9.举一些ES6对Function函数类型做的常用升级优化?(重要)
1. 箭头函数(核心)。箭头函数是ES6核心的升级项之一，箭头函数里没有自己的this,这改变了以往JS函数中最让人难以理解的this运行机制。主要优化点:
    1. __箭头函数内的this指向的是函数定义时所在的对象，而不是函数执行时所在的对象__。ES5函数里的this总是指向函数执行时所在的对象，这使得在很多情况下this的指向变得很难理解，尤其是非严格模式情况下，this有时候会指向全局对象，这甚至也可以归结为语言层面的bug之一。ES6的箭头函数优化了这一点，它的内部没有自己的this,这也就导致了this总是指向上一层的this，如果上一层还是箭头函数，则继续向上指，直到指向到有自己this的函数为止，并作为自己的this。
    2.  箭头函数不能用作构造函数，因为它没有自己的this，无法实例化。
    3.  也是因为箭头函数没有自己的this,所以箭头函数 内也不存在arguments对象。（可以用扩展运算符代替)
2. 函数默认赋值。ES6之前，函数的形参是无法给默认值得，只能在函数内部通过变通方法实现。ES6以更简洁更明确的方式进行函数默认赋值。
```js
function es6Fuc (x, y = 'default') {
    console.log(x, y);
}
es6Fuc(4) // 4, default
```
3. ES6新增了双冒号运算符，用来取代以往的bind，call,和apply。(浏览器暂不支持，Babel已经支持转码)
```js
foo::bar;
// 等同于
bar.bind(foo);

foo::bar(...arguments);
// 等同于
bar.apply(foo, arguments);

```

## 10.Symbol是什么，有什么作用？
答：
Symbol是ES6引入的第七种原始数据类型（说法不准确，应该是第七种数据类型，Object不是原始数据类型之一，已更正），所有Symbol()生成的值都是独一无二的，可以从根本上解决对象属性太多导致属性名冲突覆盖的问题。对象中Symbol()属性不能被for...in遍历，但是也不是私有属性。

## 11.Set是什么，有什么作用？
答： Set是ES6引入的一种类似Array的新的数据结构，Set实例的成员类似于数组item成员，区别是Set实例的成员都是唯一，不重复的。这个特性可以轻松地实现数组去重。
```js
    let arr = [2,3,4,2,2,3];
    let set = new Set([arr]);
    console.log(Array.from(set));
```

## 12.Map是什么，有什么作用？
答：Map是ES6引入的一种类似Object的新的数据结构，Map可以理解为是Object的超集，打破了以传统键值对形式定义对象，对象的key不再局限于字符串，也可以是Object和Array、function。可以更加全面的描述对象的属性。

## 13.Proxy是什么，有什么作用？
答：Proxy是ES6新增的一个构造函数，可以理解为JS语言的一个代理，用来改变JS默认的一些语言行为，包括拦截默认的get/set等底层方法（VUE3.0将用此方法重写），使得JS的使用自由度更高，可以最大限度的满足开发者的需求。比如通过拦截对象的get/set方法，可以轻松地定制自己想要的key或者value。下面的例子可以看到，随便定义一个myOwnObj的key,都可以变成自己想要的函数。
```js
function createMyOwnObj() {
	//想把所有的key都变成函数，或者Promise,或者anything
	return new Proxy({}, {
		get(target, propKey, receiver) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					let randomBoolean = Math.random() > 0.5;
					let Message;
					if (randomBoolean) {
						Message = `你的${propKey}运气不错，成功了`;
						resolve(Message);
					} else {
						Message = `你的${propKey}运气不行，失败了`;
						reject(Message);
					}
				}, 1000);
			});
		}
	});
}

let myOwnObj = createMyOwnObj();

myOwnObj.hahaha.then(result => {
	console.log(result) //你的hahaha运气不错，成功了
}).catch(error => {
	console.log(error) //你的hahaha运气不行，失败了
})

myOwnObj.wuwuwu.then(result => {
	console.log(result) //你的wuwuwu运气不错，成功了
}).catch(error => {
	console.log(error) //你的wuwuwu运气不行，失败了
})
```

## 14.Reflect是什么，有什么作用？
答：
Reflect是ES6引入的一个新的对象，他的主要作用有两点，一是将原生的一些零散分布在Object、Function或者全局函数里的方法(如apply、delete、get、set等等)，统一整合到Reflect上，这样可以更加方便更加统一的管理一些原生API。其次就是因为Proxy可以改写默认的原生API，如果一旦原生API别改写可能就找不到了，所以Reflect也可以起到备份原生API的作用，使得即使原生API被改写了之后，也可以在被改写之后的API用上默认的API。

## 15.Promise是什么，有什么作用？
答：
Promise是ES6引入的一个新的对象，他的主要作用是用来解决JS异步机制里，回调机制产生的“回调地狱”。它并不是什么突破性的API，只是封装了异步回调形式，使得异步回调可以写的更加优雅，可读性更高，而且可以链式调用。

## 16.Iterator是什么，有什么作用？(重要)
答：
Iterator是ES6中一个很重要概念，它并不是对象，也不是任何一种数据类型。因为ES6新增了Set、Map类型，他们和Array、Object类型很像，Array、Object都是可以遍历的，但是Set、Map都不能用for循环遍历，解决这个问题有两种方案，一种是为Set、Map单独新增一个用来遍历的API，另一种是为Set、Map、Array、Object新增一个统一的遍历API，显然，第二种更好，ES6也就顺其自然的需要一种设计标准，来统一所有可遍历类型的遍历方式。Iterator正是这样一种标准。或者说是一种规范理念。

就好像JavaScript是ECMAScript标准的一种具体实现一样，Iterator标准的具体实现是Iterator遍历器。Iterator标准规定，所有部署了key值为[Symbol.iterator]，且[Symbol.iterator]的value是标准的Iterator接口函数(标准的Iterator接口函数: 该函数必须返回一个对象，且对象中包含next方法，且执行next()能返回包含value/done属性的Iterator对象)的对象，都称之为可遍历对象，next()后返回的Iterator对象也就是Iterator遍历器。
```js
//obj就是可遍历的，因为它遵循了Iterator标准，且包含[Symbol.iterator]方法，方法函数也符合标准的Iterator接口规范。
//obj.[Symbol.iterator]() 就是Iterator遍历器
let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};
```
ES6给Set、Map、Array、String都加上了[Symbol.iterator]方法，且[Symbol.iterator]方法函数也符合标准的Iterator接口规范，所以Set、Map、Array、String默认都是可以遍历的。
```js
//Array
let array = ['red', 'green', 'blue'];
array[Symbol.iterator]() //Iterator遍历器
array[Symbol.iterator]().next() //{value: "red", done: false}

//String
let string = '1122334455';
string[Symbol.iterator]() //Iterator遍历器
string[Symbol.iterator]().next() //{value: "1", done: false}

//set
let set = new Set(['red', 'green', 'blue']);
set[Symbol.iterator]() //Iterator遍历器
set[Symbol.iterator]().next() //{value: "red", done: false}

//Map
let map = new Map();
let obj= {map: 'map'};
map.set(obj, 'mapValue');
map[Symbol.iterator]().next()  {value: Array(2), done: false}
```

## 17. for...in 和for...of有什么区别？
答：
+ 如果看到问题十六，那么就很好回答。问题十六提到了ES6统一了遍历标准，制定了可遍历对象，那么用什么方法去遍历呢？答案就是用for...of。ES6规定，有所部署了载了Iterator接口的对象(可遍历对象)都可以通过for...of去遍历（不去定义Iterator方法本身是无法遍历的），而for..in仅仅可以遍历对象。

+ 这也就意味着，数组也可以用for...of遍历，这极大地方便了数组的取值，且避免了很多程序用for..in去遍历数组的恶习。

+ 上面提到的扩展运算符本质上也就是for..of循环的一种实现。

## 18.Generator函数是什么，有什么作用？
答：
+ 如果说JavaScript是ECMAScript标准的一种具体实现、Iterator遍历器是Iterator的具体实现，那么Generator函数可以说是Iterator接口的具体实现方式。
+ 执行Generator函数会返回一个遍历器对象，每一次Generator函数里面的yield都相当一次遍历器对象的next()方法，并且可以通过next(value)方法传入自定义的value,来改变Generator函数的行为。
+ Generator函数可以通过配合Thunk 函数更轻松更优雅的实现异步编程和控制流管理。

## 19.async函数是什么，有什么作用？
答：async函数可以理解为内置自动执行器的Generator函数语法糖，它配合ES6的Promise近乎完美的实现了异步编程解决方案。

## 20.Class、extends是什么，有什么作用？

答：
1. ES6 的class可以看作只是一个ES5生成实例对象的构造函数的语法糖。它参考了java语言，定义了一个类的概念，让对象原型写法更加清晰，对象实例化更像是一种面向对象编程。Class类可以通过extends实现继承。它和ES5构造函数的不同点：
+ 类的内部定义的所有方法，都是不可枚举的。
```js
///ES5
function ES5Fun (x, y) {
this.x = x;
this.y = y;
}
ES5Fun.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}
var p = new ES5Fun(1, 3);
p.toString();
Object.keys(ES5Fun.prototype); //['toString']

//ES6
class ES6Fun {
constructor (x, y) {
    this.x = x;
    this.y = y;
}
toString () {
    return '(' + this.x + ', ' + this.y + ')';
}
}

Object.keys(ES6Fun.prototype); //[]

```
2. ES6的class类必须用new命令操作，而ES5的构造函数不用new也可以执行。
3. ES6的class类不存在变量提升，必须先定义class之后才能实例化，不像ES5中可以将构造函数写在实例化之后。
4. ES5 的继承，实质是先创造子类的实例对象this，然后再将父类的方法添加到this上面。ES6 的继承机制完全不同，实质是先将父类实例对象的属性和方法，加到this上面（所以必须先调用super方法），然后再用子类的构造函数修改this。

## 21.module、export、import是什么，有什么作用？
答：
+ module、export、import是ES6用来统一前端模块化方案的设计思路和实现方案。export、import的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的AMD/CMD、requireJS、seaJS、commondJS等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，JS也能更加能实现大型的应用程序开发。
+ import引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。
+ import引入export导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。

## 21.日常前端代码开发中，有哪些值得用ES6去改进的编程优化或者规范？
答：
1. 常用箭头函数来取代var self = this;的做法。
2. 常用let取代var命令。
3. 常用数组/对象的结构赋值来命名变量，结构更清晰，语义更明确，可读性更好。
4. 在长字符串多变量组合场合，用模板字符串来取代字符串累加，能取得更好地效果和阅读体验。
5. 用Class类取代传统的构造函数，来生成实例化对象。
6. 在大型应用开发中，要保持module模块化开发思维，分清模块之间的关系，常用import、export方法。
