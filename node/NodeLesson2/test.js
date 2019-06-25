console.log('testjs!')
var a = 'aaa';
var b = 'bbb';
var c = 'ccc';
//开闭原则
module.exports.a = a;
module.exports.b = b;
exports.c = c;

//module.exports 和 exports 有什么区别？
//导出的永远都是module.exports（会覆盖exports）
//建议使用module.exports
