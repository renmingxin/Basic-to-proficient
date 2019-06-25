/*NodeJS的模块是运行在一个函数当中的 */

console.log(__dirname)//当前目录 e:\duyi\Basic-to-proficient\node\NodeLesson2
console.log(__filename)//当前文件 e:\duyi\Basic-to-proficient\node\NodeLesson2\index.js

console.log(arguments[0] == exports);//true
console.log(arguments[1] == require);//true
console.log(arguments[2] == module);//true
console.log(arguments[3] == __filename);//true
console.log(arguments[4] == __dirname);//true