var path = require('path');
module.exports = {
    //入口文件
    entry:'./src/main.js',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    mode:'development' //无压缩(开发环境)
    // mode:'production'  //压缩后(变成一行)
}