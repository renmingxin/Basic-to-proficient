let url = require('url');

let studentService = require('../service/studentService');

let path = new Map();

function getData(request,response){
    // throw new Error();
    let obj = {
        msg:200,
        data:[
            {name:'rmx',age:20},
            {name:'lq',age:23}
        ]
    }
    response.writeHead(200);//状态码
    response.write(JSON.stringify(obj));
    response.end();
}
function getData2(request,response){
    studentService.queryAllStudent(result=>{
        response.writeHead(200);//状态码
        response.write(JSON.stringify(result));
        response.end();
    });
}
function login(request,response){
    let params = url.parse(request.url,true).query;//第二个参数传true 转换为object ?name=rmx&age=20 -> {name:'rmx',age:'20'}
    console.log(params)
    studentService.queryStudentByStuNum(params.stuNum, result=>{
        let res = '';
        if(result == null || result.length === 0){
            res = 'fail'
        }else {
            if(result[0].pwd === params.password){
                res = 'ok'
            }else {
                res = 'fail';
            }
        }
        response.write(res);
        response.end();
    })
}
path.set('/getData',getData)
path.set('/getData2',getData2)
path.set('/login',login)
module.exports.path = path;