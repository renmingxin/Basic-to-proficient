var path = require('path');
module.exports = {
    //入口文件
    // entry:'./src/main.js',
    entry:{
        main:'./src/main.js'
    },
    output:{
        // filename:'bundle.js',
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    //设置环境变量
    mode:'development', //无压缩(开发环境)
    // mode:'production'  //压缩后(变成一行)

    //为什么可以实时渲染页面:文件发生变化后，需要进行重新的构建，会通知devServer,
    //devServer让webpack构建出来的js文件里注入一个代理客户端，我们通过注入的代理客户端来控制我们的网页
    //必须要经过入口文件main.js
    devServer:{//开启服务器
        contentBase:'dist',//基础路径，打开服务器地址就能直接进入的路径
        port:9999 //更改端口号为localhost:9999
    },

    //解析器(html,css,js,img等都需要相应的解析器)
    module:{//应用loader
        rules:[
            //css loader
            {
                //用正则表达式匹配以css结尾的，遇到css文件
                test:/\.css$/,
                //从后往前解析的先css-loader 再 style-loader
                use:['style-loader','css-loader']
            },
            //html loader
            {
                //用正则表达式以html结尾的,遇到html文件
                test:/\.html$/,
                //从后往前解析
                use:[
                    //单独抽离的html文件进行配置
                    {
                        loader:'file-loader',
                        options:{
                            name:'index.html'
                        }
                    },
                    //单独抽离html文件
                    {
                        loader:'extract-loader'
                    },
                    //找到html文件
                    {
                        loader:'html-loader'
                    }
                ]
            },
            //js loader
            // {
            //     //用正则表达式以js结尾的,遇到js文件
            //     test:/\.js$/,
            //     use:['babel-loader']
            // },
            //img loader
            {
                test:/\.(png|jpg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:8192,
                            name:"img/[name].[ext]"
                        }
                    }
                ]
            },
        ]
    }
}