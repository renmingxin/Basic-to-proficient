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
>8.javaScript有多少种类型？基本数据类型和引用数据类型的区别是什么？
答：
1.基本数据类型：String、Number、Boolean、Symbol、undefined、null（六种）
2.引用数据类型：Function Object Array(未知可能有很多种比如Date、RegExp)
区别:
1. 基本数据类型（存放在栈中）：基本数据类型是指存放在栈中的简单数据段，数据大小确定，内存空间大小可以分配，他们是直接按值存放的，所以可以直接按值访问的。
2. 
  (1)引用数据类型（存放在堆内存中的对象，每个空间大小不一样，要根据情况进行特定的配置）:引用类型是存放在堆内存中的对象，变量是是保存在栈内存中的一个指针（保存的是堆内存中的引用地址），这个指针指向堆内存。
  (2)引用类型数据在栈内存中保存的实际上是对象在堆内存中的引用地址。通过这个引用地址可以快速查找到保存在堆内存中的对象。
herf:'https://www.cnblogs.com/c2016c/articles/9328725.html'
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
答：
__简单的回答__
1. 能够读取其他函数内部变量的函数。
2. 函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

__稍微完整的回答：__
在js中变量的作用域属于函数作用域，在函数执行完后，作用域会被清理，内存会随之被回收，但是由于闭包函数式简历在函数内部的子函数，由于其可访问上级作用域，即使，上级函数执行完，作用域也不会随之销毁，这时的子函数(也就是闭包)，便拥有了访问上级作用域中变量的权限，即使上级函数执行完毕后作用域内的值也不会被销毁。

__闭包解决了什么问题__
1. 可以读取函数内部的变量
2. 让这些变量的值始终保持在内存中。不会再函数调用后被清除。

__闭包的缺点__
1. 由于闭包会使得函数中的变量都被保存到内存中，滥用闭包很容易造成内存消耗过大，导致网页性能问题。解决方法是在推出函数之前，将不再使用的变量全部删除。
2. 闭包可以使得函数内部的值可以在函数外部进行修改。所以，如果你把父函数当做对象(object)使用，把闭包当做他的公共方法(public Method)，把内部变量当作它的私有属性(private value),这时一定要小心，不要随便改变父函数内部变量的值。


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
>21.防抖是什么？节流是什么?怎么处理？
答：在滚动事件中需要做个复杂计算或者实现一个按钮的防二次点击操作。这些需求都可以通过函数防抖动来实现。尤其是第一个需求，如果在频繁的事件回调中做复杂计算，很有可能导致页面卡顿，不如将多次计算合并为一次计算，只在一个精确点做操作。在进行窗口的resize、scroll，输入框内容校验等操作时，如果事件处理函数调用的频率无限制，会加重浏览器的负担，导致用户体验非常糟糕。此时我们可以采用debounce（防抖）和throttle（节流）的方式来减少调用频率，同时又不影响实际效果。 
归纳总结：
函数防抖：将几次操作合并为一此操作进行。原理是维护一个计时器，规定在delay时间后触发函数，但是在delay(延迟)时间内再次触发的话，就会取消之前的计时器而重新设置。这样一来，只有最后一次操作能被触发。
函数节流：使得一定时间内只触发一次函数。原理是通过判断是否到达一定时间来触发函数。
区别： 函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
href:'./js/21.防抖是什么？节流是什么?怎么处理？.html'
>22.JS函数柯里化(Currying)？
函数柯里化，就是将一个接受多个参数的函数转化为接受单一参数的函数的技术。
herf：'./js/22.JS函数柯里化.html'
>怎么理解async和await？
答：一句话，async 函数就是 Generator 函数的语法糖。一比较就会发现，async 函数就是将 Generator 函数的星号（*）替换成 async，将 yield 替换成 await，仅此而已。
herf:'https://www.jb51.net/article/140002.htm'

#移动端
>1.移动端300ms延迟由来及解决方案？
答：
由来：300 毫秒延迟的主要原因是解决双击缩放(double tap to zoom)。双击缩放，顾名思义，即用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。 那么这和 300 毫秒延迟有什么联系呢？ 假定这么一个场景。用户在 iOS Safari 里边点击了一个链接。由于用户可以进行双击缩放或者双击滚动的操作，当用户一次点击屏幕之后，浏览器并不能立刻判断用户是确实要打开这个链接，还是想要进行双击操作。因此，iOS Safari 就等待 300 毫秒，以判断用户是否再次点击了屏幕。 鉴于iPhone的成功，其他移动浏览器都复制了 iPhone Safari 浏览器的多数约定，包括双击缩放，几乎现在所有的移动端浏览器都有这个功能。
解决：
1.添加viewpoint meta标签
<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
2.FastClick
git：https://github.com/ftlabs/fastclick
移动端事件触发顺序：在移动端，手指点击一个元素，会经过：touchstart --> touchmove -> touchend -->click。
fastclick.js的原理是：FastClick的实现原理是在检测到touchend事件的时候，会通过DOM自定义事件立即出发模拟一个click事件，并把浏览器在300ms之后真正的click事件阻止掉。




#Vue部分
>1.Vue的 nextTick 原理
答:
1.nextTick 可以让我们在下次 DOM 更新循环结束之后执行延迟回调，用于获得更新后的 DOM。
2.在created()钩子函数执行的时候DOM 其实并未进行任何渲染，而此时进行DOM操作无异于徒劳，所以此处一定要将DOM操作的js代码放进Vue.nextTick()的回调函数中。与之对应的就是mounted()钩子函数，因为该钩子函数执行时所有的DOM挂载和渲染都已完成，此时在该钩子函数中进行任何DOM操作都不会有问题 。
href：'./vue/1.Vue的 nextTick 原理.html'
>2.Vue的生命周期？
答：
1.创建前(beforeCreate)：实例初始化之后，this指向创建的实例，不能访问到data、computed、watch、methods上的方法和数据。
2.创建后(create)：实例创建完成，可访问data、computed、watch、methods上的方法和数据、未挂载到DOM上、不能访问到$el属性、$ref属性内容为空数组。
3.挂载前(beforeMount)：在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数，beforeMount 就是在挂载前执行的，然后开始创建 VDOM 并替换成真实 DOM，最后执行。
4.挂载后(mounted)：实例挂载到DOM上，此时可以通过DOM API获取到DOM节点，$ref属性可以访问。
5.更新前(beforeUpdate)：响应式数据更新时调用，发生在虚拟DOM打补丁之前。
6.更新后(updated)：虚拟DOM重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作
7.销毁前(beforeDestroy)：实例销毁之前调用。这一步，实例仍然完全可用，this仍能获取到实例。
8.销毁后(destoryed)：实例销毁后调用，调用后，vue实例指示的所有东西会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。
<-注意->：
created阶段的ajax请求与mounted请求的区别：前者页面视图未出现，如果请求信息过多，页面会长时间处于白屏状态。

<-单个组件的生命周期->：
1.初始化组件时，仅执行了beforeCreate/Created/beforeMount/mounted四个钩子函数
2.当改变data中定义的变量（响应式变量）时，会执行beforeUpdate/updated钩子函数
3.当切换组件（当前组件未缓存）时，会执行beforeDestory/destroyed钩子函数
4.初始化和销毁时的生命钩子函数均只会执行一次，beforeUpdate/updated可多次执行

href：'./vue/2.vue的生命周期.html'
>3.v-model的原理？
答：官方文档中对v-model的描写仅仅是一个语法糖。
1.先靠v-bind：绑定响应式数据
2.触发v-on：input事件
href：'./vue/3.v-model的原理.html'
>4.watch和computed的区别和运用的场景
答：
1.前端是计算属性，依赖其他属性计算值。并且computer的值有缓存，只有当计算值变化才变化触发渲染。后者监听值的变化就会执行回调。
2.computer就是简单的计算一下，适用于渲染页面。watch适合做一些复杂的业务逻辑。
3.前者有依赖两个watcher，computer watcher 和渲染watcher。判断计算出的值变化后渲染watcher派发更新触发渲染。
业务差异：
1.computed是计算一个新的属性，并将该属性挂载到vm（Vue实例）上，而watch是监听已经存在且已挂载到vm上的数据，所以用watch同样可以监听computed计算属性的变化（其它还有data、props）
2.computed本质是一个惰性求值的观察者，具有缓存性，只有当依赖变化后，第一次访问 computed 属性，才会计算新的值，而watch则是当数据发生变化便会调用执行函数
3.从使用场景上说，computed适用一个数据被多个数据影响，而watch适用一个数据影响多个数据；
>5.Vue的响应系统核心？
答：
1.observe:遍历data中的属性，使用 Object.defineProperty 的get/set方法对其进行数据劫持
2.dep：每个属性拥有自己的消息订阅器dep，用于存放所有订阅了该属性的观察者对象
3.watcher：观察者（对象），通过dep实现对响应属性的监听，监听到结果后，主动触发自己的回调进行响应
>6.Vue父子之间的通信？
答：
1. 使用v-model实现父传子，子传父。因为v-model默认解析成:value和:input
2. 父传子：
    1.通过props
    2.通过$children 访问子组件数组，注意该数组乱序
    3.对于多级父传子，可以使用v-bind={$attrs},通过对象的方式筛选出父组件中传入子组件不需要的props
    4.$listens包含了父作用域中的(不含 .native修饰器的) v-on 事件监听器
2. 子传父
    1.父组件传递函数给子组件，子组件通过$emit触发
    2.修改父组件的props
    3.通过$parent访问父组件
    4..sync
3. 兄弟(平行)组件
    1.EventBus
4. Vuex 解决一切
>7.路由原理？
答：
前端路由实现起来其实很简单，本质就是监听 URL 的变化，然后匹配路由规则，显示相应的页面，并且无须刷新。目前单页面使用的路由就只有两种实现方式
1.hash模式
2.history模式

hash模式：www.test.com/#/ 就是 Hash URL，当 # 后面的哈希值发生变化时，不会向服务器请求数据，可以通过 hashchange 事件来监听到 URL 的变化，从而进行跳转页面。

History模式:是 HTML5 新推出的功能，比之 Hash URL 更加美观
>8.自我封装一个vue-router？

>9.Vue数据劫持？
答：
href:'@/EmploymentClass/数据双向绑定/数据劫持.html'

>10.什么是MVC？什么是MVVM？
答：
href:'@/深入vue源码/重写getter，setter源码实现MVVM原理/index.html'
 __MVC的定义__：是Model-View-Controller的简写。即模型-视图-控制器。M和V指的意思跟MVVM中的M和V的意思一样。C即是Controller指的是页面业务逻辑。使用MVC的目的就是将M和V的代码分离。MVC是单向通信。也就是View跟Model，必须通过Controller来承上启下。

 __MVVM的定义__:是Mode-View-ViewModel的简写。即模型-视图-视图模型。【视图模型】是MVVM模式的核心，它是链接view和model的桥梁。它有两个方向：一是将【模型】转化成【视图】，即将后端传递的数据转化成所看到的页面。实现的方式是：实属绑定。而是将【视图】转化成【模型】,即将所看到的页面转化为后端的数据。实现的方式是：DOM事件监听。这两个方向都实现的，我们称之为数据双向绑定。总结：在MVVM的框架下视图和模型是不能直接通信的。它们通过ViewModel来通信，ViewModel通常要实现一个observer观察者，当数据发生变化，ViewModel能够监听到数据的变化，然后通知到对应的视图走自动更新，而当用户操作视图，ViewModel也能监听到视图的变化，然后通知数据做改动，这实际上实现了数据的双向绑定。并且MVVM中的View和ViewModel可以互相通信。

 __MVVM总结__：
 在JQuery时期，如果需要刷新UI时，需要先取到的DOM再更新UI，这样数据和业务的逻辑就和页面有强耦合。
 在MVVM中，UI是通过数据驱动的，数据一旦改变就会相应的刷新对应的UI，UI如果改变，也会改变对应的数据。这种方式就可以在业务处理中只关心数据的流转，而无需直接和页面打交道。ViewModel只关心数据和业务的处理，不关心View如何处理数据，在这种情况下，View和Model都可以独立出来，任何一方改变了也不一定需要改变另一方，并且可以将一些可服用的逻辑放在一个ViewModel中，让多个View复用这个ViewModel。

 在MVVM中，最核心的业就是数据双向绑定，例如Angluar的脏数据监测，Vue中的数据劫持。
 1. 脏数据检测：当触发了指定事件后会进入脏数据检测，这时会调用$digest循环遍历所有的数据观察者，判断当前值是否和先前的值有区别，如果检测到变化的话，会调用$watch函数，然后再次调用$digest循环直到发现没有变化。循环至少为2次，至多为10次。
 脏数据检测虽然存在低效的问题，但是不关心数据是通过什么方式改变的，都可以完成任务，但是这在Vue中的双向绑定是存在问题的。并且脏数据检测可以实现批量检测出更新的值，再去统一更新UI，大大减少了操作DOM的次数。所以低效也是相对的，这就仁者见仁智者见智了。

 2. 数据劫持：Vue内部使用了Object.definePropery()来实现双向绑定，通过这个函数可以监听到set和get的事件。href:'@/EmploymentClass/数据双向绑定/数据劫持.html'  url：‘https://juejin.im/post/5ba34e54e51d450e5162789b#heading-68’
 
 >11.Proxy与Object.defineProperty对比

 Object.defineProperty 虽然已经能够实现双向绑定了，但是他还是有缺陷的。
 1. 只能对属性进行数据劫持，所以需要深度遍历整个对象。
 2. 对于数组不能监听到数据的变化。
 3. 数组的方法也是在原型上二次添加进去的

 反观Proxy就没以上的问题，原生支持监听数组的变化，并且可以直接对整个对象进行拦截，所以Vue也将在下个大版本中使用Proxy替换Object.defineProperty
>12.什么是虚拟DOM？为什么需要虚拟DOM？
答:不需要数据双向绑定修改后刷新所有的dom，修改哪里就只干涉那一小部分。





 

#Webpack部分
>1.优化打包速度
1.减少文件搜索范围
    比如通过别名
    loader 的 test，include & exclude
2.Webpack4 默认压缩并行
3.Happypack 并发调用
4.babel 也可以缓存编译



#Html部分
>1.history模式和hash模式的区别？
答：
1. hash模式背后的原理是onhashchange事件。可以用window.location.hash进行设置和读取。监听                         window.addEventListener('hashchange',function(){})
2. history api可以分为两大部分：切换和修改：
    切换的话包括back(前进)、forward(后退)、go(跳转)
    修改历史状态包括了 pushState(增加),  replaceState(更改)
不同：
1.刷新页面时产生的效果不同。用hash刷新还是当前页面，用history模式如果从首页进入A页，在A页刷新，就会抛出404，这时候需要后端配合把所有的请求定位到指定到一个特定的html页面中。
2.hash本来是拿来做页面定位的，如果拿来做路由的话，原来的锚点功能就不能用了。其次，hash 的传参是基于 url 的，如果要传递复杂的数据，会有体积的限制，而 history 模式不仅可以在url里放参数，还可以将数据存放在一个特定的对象中。



#Css部分
>1.什么是BFC？
答：
href:'https://www.jianshu.com/p/0d713b32cd0d'



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
答：重绘和回流是渲染步骤中的一小节，但是这两个步骤对于性能影响很大。
重绘：是当节点需要更改外观而不会影响布局的，比如改变 color 就叫称为重绘
回流：是布局或者几何属性需要改变就称为回流
回流必定会发生重绘，重绘不一定会引发回流。回流所需的成本比重绘高的多，改变深层次的节点很可能导致父节点的一系列回流。

所以以下几个动作可能会导致性能问题：
1.改变 window 大小
2.改变字体
3.添加或删除样式
4.文字改变
5.定位或者浮动
6.盒模型

很多人不知道，重绘和回流其实和 Event loop 有关系:
1.当 Event loop 执行完 Microtasks 后，会判断 document 是否需要更新。因为浏览器是 60Hz 的刷新率，每 16ms 才会更新一次。
2.然后判断是否有 resize 或者 scroll ，有的话会去触发事件，所以 resize 和 scroll 事件也是至少 16ms 才会触发一次，并且自带节流功能。
3.判断是否触发了 media query
4.更新动画并且发送事件
5.判断是否有全屏操作事件
6.执行 requestAnimationFrame 回调
7.执行 IntersectionObserver 回调，该方法用于判断元素是否可见，可以用于懒加载上，但是兼容性不好
8.更新界面
9.以上就是一帧中可能会做的事情。如果在一帧中有空闲时间，就会去执行 requestIdleCallback 回调。

[·]减少重绘和回流
1.使用 translate 替代 top
2.使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）
3.把 DOM 离线后修改，比如：先把 DOM 给 display:none (有一次 Reflow)，然后你修改100次，然后再把它显示出来
4.不要把 DOM 结点的属性值放在一个循环里当成循环里的变量
for(let i = 0; i < 1000; i++) {
    // 获取 offsetTop 会导致回流，因为需要去获取正确的值
    console.log(document.querySelector('.test').style.offsetTop)
}
5.不要使用 table 布局，可能很小的一个小改动会造成整个 table 的重新布局
6.动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 （requestAnimationFrame）
7.CSS 选择符从右往左匹配查找，避免 DOM 深度过深
8.将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。
>6.除了避免回流还有什么值得优化的地方？(图片优化)
[1]图片优化？
答：对于一张 100 * 100 像素的图片来说，图像上有 10000 个像素点，如果每个像素的值是 RGBA 存储的话，那么也就是说每个像素有 4 个通道，每个通道 1 个字节（8 位 = 1个字节），所以该图片大小大概为 39KB（10000 * 1 * 4 / 1024）。
但是在实际项目中，一张图片可能并不需要使用那么多颜色去显示，我们可以通过减少每个像素的调色板来相应缩小图片的大小。
解决方法：
1.减少像素点
2.减少每个像素点能够显示的颜色

[2]图片加载优化
答：

1.不用图片。很多时候会使用到很多修饰类图片，其实这类修饰图片完全可以用 CSS 去代替。
2.对于移动端来说，屏幕宽度就那么点，完全没有必要去加载原图浪费带宽。一般图片都用 CDN 加载，可以计算出适配屏幕的宽度，然后去请求相应裁剪好的图片。
3.小图使用 base64 格式
4.将多个图标文件整合到一张图片中（雪碧图）
5.选择正确的图片格式：
    对于能够显示 WebP 格式的浏览器尽量使用 WebP 格式。因为 WebP 格式具有更好的图像数据压缩算法，能带来更小的图片体积，而且拥有肉眼识别无差异的图像质量，缺点就是兼容性并不好
    小图使用 PNG，其实对于大部分图标这类图片，完全可以使用 SVG 代替
    照片使用 JPEG
>7.除了避免回流还有什么值得优化的地方？(其他文件优化)
1.CSS 文件放在 head 中
2.服务端开启文件压缩功能
3.将 script 标签放在 body 底部，因为 JS 文件执行会阻塞渲染。当然也可以把 script 标签放在任意位置然后加上 defer ，表示该文件会并行下载，但是会放到 HTML 解析完成后顺序执行。对于没有任何依赖的 JS 文件可以加上 async ，表示加载和渲染后续文档元素的过程将和  JS 文件的加载与执行并行无序进行。
4.执行 JS 代码过长会卡住渲染，对于需要很多时间计算的代码可以考虑使用 Webworker。Webworker 可以让我们另开一个线程执行脚本而不影响渲染。

CDN：
静态资源尽量使用 CDN 加载，由于浏览器对于单个域名有并发请求上限，可以考虑使用多个 CDN 域名。对于 CDN 加载静态资源需要注意 CDN 域名要与主站不同，否则每次请求都会带上主站的 Cookie。


使用 Webpack 优化项目：
1.对于 Webpack4，打包项目使用 production 模式，这样会自动开启代码压缩
2.使用 ES6 模块来开启 tree shaking，这个技术可以移除没有使用的代码
3.优化图片，对于小图可以使用 base64 的方式写入文件中
4.按照路由拆分代码，实现按需加载
5.给打包出来的文件名添加哈希，实现浏览器缓存文件


webpackd优化打包速度
1.减少文件搜索范围
    比如通过别名
    loader 的 test，include & exclude
2.Webpack4 默认压缩并行
3.Happypack 并发调用
4.babel 也可以缓存编译

#高级部分
>1.Babel原理
本质就是编译器，当代码转为字符串生成 AST，对 AST 进行转变最后再生成新的代码
分为三步：
1.词法分析生成 Token，
2.语法分析生成 AST，遍历 AST，根据插件变换相应的节点，
3.最后把 AST 转换为代码
>2.如何实现一个插件
1.调用插件 apply 函数传入 compiler 对象
2.通过 compiler 对象监听事件
href:'./best/2.如何实现一个插件.html'






