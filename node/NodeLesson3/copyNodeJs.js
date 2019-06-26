function copyNode(module,requrie,exports,__dirname,__filename){
    
    //--
    //中间的内容是我们写的nodeJs的代码
    //--
    module();
    requrie();
    exports();
    __dirname();
    __filename();
    return module.exports;
}