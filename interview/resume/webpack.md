# webpack部分
1. 谈谈你对webpack的看法
答：webpack是一个模块打包工具，可以使用它管理项目中的模块依赖，并编译输出模块所需的静态文件。它可以很好地管理、打包开发中所用到的HTML,CSS,JavaScript和静态文件（图片，字体）等，让开发更高效。对于不同类型的依赖，webpack有对应的模块加载器，而且会分析模块间的依赖关系，最后合。

2. webpack的基本功能和工作原理？
答：
    + 代码转换：TypeScript 编译成 JavaScript、SCSS 编译成 CSS 等等
    + 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等
    + 代码分割：提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
    + 模块合并：在采用模块化的项目有很多模块和文件，需要构建功能把模块分类合并成一个文件
    + 自动刷新：监听本地源代码的变化，自动构建，刷新浏览器
    + 代码校验：在代码被提交到仓库前需要检测代码是否符合规范，以及单元测试是否通过
    + 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统。

2. webpack构建过程
    + 从entry里配置的module开始递归解析entry依赖的所有module
    + 每找到一个module，就会根据配置的loader去找对应的转换规则
    + 对module进行转换后，再解析出当前module依赖的module
    + 这些模块会以entry为单位分组，一个entry和其所有依赖的module被分到一个组Chunk
    + 最后webpack会把所有Chunk转换成文件输出
    + 在整个流程中webpack会在恰当的时机执行plugin里定义的逻辑

3. webpack打包原理
将所有依赖打包成一个bundle.js，通过代码分割成单元片段按需加载

4. 什么是webpack，与gulp,grunt有什么区别
答：
+ webpack是一个模块打包工具，可以递归地打包项目中的所有模块，最终生成几个打包后的文件。
+ 区别：webpack支持代码分割，模块化（AMD,CommonJ,ES2015），全局分析

5. 什么是entry,output?
+ ntry 入口，告诉webpack要使用哪个模块作为构建项目的起点，默认为./src/index.js
+ output 出口，告诉webpack在哪里输出它打包好的代码以及如何命名，默认为./dist

6. 什么loader，plugins？
答：
+ loader是用来告诉webpack如何转换某一类型的文件，并且引入到打包出的文件中。
+ plugins(插件)作用更大，可以打包优化，资源管理和注入环境变量


7. 使用过webpack里面哪些plugin和loader
    + loader
        1. babel-loader: 将ES6+转移成ES5-
        2. css-loader,style-loader：解析css文件，能够解释@import url()等
        3. file-loader：直接输出文件，把构建后的文件路径返回，可以处理很多类型的文件
        4. url-loader：打包图片
    + plugins
        1. html-webpack-plugin：压缩html
        ```js
            const HtmlWebpackPlugin = require('html-webpack-plugin')
                module.exports = {
                //...
                plugins: [
                    new HtmlWebpackPlugin({
                    filename: 'index.html', // 配置输出文件名和路径
                    template: './public/index.html', // 配置要被编译的html文件
                    hash: true,
                    // 压缩 => production 模式使用
                    minify: {
                        removeAttributeQuotes: true, //删除双引号
                        collapseWhitespace: true //折叠 html 为一行
                    }
                    })
                ]
            }
        ```
        2. clean-webpack-plugin： 打包器清理源目录文件，在webpack打包器清理dist目录
        ```js
            npm install clean-webpack-plugin -D
            // 修改webpack.config.js
            const cleanWebpackPlugin=require('clean-webpack-plugin')
            module.exports = {
                plugins: [new cleanWebpackPlugin(['dist'])]
            }
        ```

8. 优化打包的速度
答：
    1. 减少文件搜索范围 比如通过别名 loader 的 test，include & exclude
    2. Webpack4 默认压缩并行
    3. Happypack 并发调用
    4. babel 也可以缓存编译
