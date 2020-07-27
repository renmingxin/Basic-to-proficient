# react
1. vue和react的区别？
答： 如果要说细一点的话 vue是框架具有侵入性，必须按照vue规定的去写 react是一个库只是帮你构建页面的。 
    1. React是单向数据流，Vue双向数据绑定（更好进行表单验证）。
    2. props Vue可变（但是会发出警告），React不可变
    3. 判断是否需要更新React可以通过钩子函数判断，Vue使用依赖追踪，修改了什么菜渲染什么
    4. React 16版本以后 有些钩子函数会执行多次
    5. React需要使用JSX，需要Babel编译。Vue虽然可以使用模板，但是也可以通过直接编写render函数不需要编译就能运行。
    6. React的思路是all in js（万物都可js），通过js生成html所以设计了jsx，可以用js来操作css。Vue则是把html，css，js写到一个文件中，用各自处理的方式。html提供了模板引擎来处理。
    7. React的组件是es6类的写法。Vue是生命式的写法，通过传入各种options，api和参数都很多。所以React更容易和TS结合，而Vue稍微复杂。

2. 什么是 React?
答：React是一个简单的javascript UI库，用于构建高效、快速的用户界面。它是一个轻量级库，因此很受欢迎。它遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效。它使用虚拟DOM来有效地操作DOM。它遵循从高阶组件到低阶组件的单向数据流。

3. 什么是 JSX?
答：JS的扩展语法,把JS转换为HTML，模板语言。

4. 元素的渲染？
答：
    + 想要将一个 React 元素渲染到根 DOM 节点中，只需把它们一起传入 ReactDOM.render()：
        ```js
            const element = <h1>Hello, world</h1>;
            ReactDOM.render(element, document.getElementById('root'));
        ```

5. react如何赋值？
答：
    + 在构造函数constructor 里面this.state进行赋值初始化
    + 用this.setState({})进行视图更新

6. react列表渲染？
答：
    + map函数加key

7. react生命周期？
答：
    1. constructor 构造函数用来初始化
    2. componentWillMount 组件挂载前
    3. render
    4. componentDidMount 组件挂载后
    5. shouldComponentUpdate 组件更新
    6. componentWillUpdate
    7. render
    8. componentDidUpdate
    9. componentWillUnmount


# react-router

1. 怎么使用？
答：安装install react-router-dom 
```js
    import { BrowserRouter, Route, Link } from "react-router-dom";
```
    BrowserRouter:history模式
    reute：hash模式

2. 路由匹配
答：
    + 使用
     ```js
        import { Route, Switch } from "react-router-dom";
     ```
    + 路由匹配是通过将<Route>组件的path属性与当前的location的pathname进行比较来完成的。当一个<Route>匹配了，它所对应的组件内容将被渲染出来。
    不匹配，则渲染null。如果一个<Route>没有path属性，他的组件对应内容将一直被渲染出来。

    ```html
        // 当 location = { pathname: '/about' }
        <Route path='/about' component={About}/> // 路径匹配成功，渲染 <About/>组件
        <Route path='/contact' component={Contact}/> // 路径不匹配，渲染 null
        <Route component={Always}/> // 该组件没有path属性，其对应的<Always/>组件会一直渲染
    ```
    + 我们可以在组件树的任何位置放置<Route>组件。但是更常见的情况是将几个<Route>写在一起。<Switch>组件可以用来将多个<Route>“包裹”在一起。
    ```html
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </Switch>

            <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* 如果上面的Route的路径都没有匹配上，则 <NoMatch>被渲染，我们可以在此组件中返回404 */}
            <Route component={NoMatch} />
        </Switch>
    ```
    + 具体实现
        + component：在使用<Route>时，如果我们想渲染的内容已经有对应的组件，则可以直接使用
            ```html
                <Route path="/user/:username" component={User} />;
                function User({ match }) {
                    return <h1>Hello {match.params.username}!</h1>;
                }
            ```
        + render：render方法直接使用一个内联函数来渲染内容。
            ```html
                <Route path="/home" render={() => <div>Home</div>}/>
            ```

# redux（vuex）
1.他是什么？
答：
    + redux是react全家桶的一员，它试图为 React 应用提供「可预测化的状态管理」机制。
    + Redux是将整个应用状态存储到到一个地方，称为store
    + 里面保存一棵状态树(state tree)
    + 组件可以派发(dispatch)行为(action)给store,而不是直接通知其它组件
    + 其它组件可以通过订阅store中的状态(state)来刷新自己的视图
    + 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


# HOOK
1. 他是什么？
答：
    + HOOK专门用于增强函数组件的功能（无状态组件），使之理论上可以成为类组件的替代品。
    + 本质是一个函数（命名上总是以use开头）