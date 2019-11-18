let mysql = require("mysql");
// console.log(mysql)

//创建连接
let connection = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    user:'root',
    password:'admin',
    database:'school',
});

module.exports = connection;