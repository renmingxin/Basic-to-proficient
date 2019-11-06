let path = new Map();

function getData(request,response){
    // throw new Error();
    response.writeHead(200);//状态码
    response.write('hello');
    response.end();
}
function getData2(request,response){

}
path.set('/getData',getData)
path.set('/getData2',getData2)

module.exports.path = path;