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
path.set('/getData',getData)
path.set('/getData2',getData2)

module.exports.path = path;