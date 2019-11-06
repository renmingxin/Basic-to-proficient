let fs = require('fs');

//加载一个配置文件
let conf = fs.readFileSync('server.config');
let confs = conf.toString().split('\r\n');
let globalConf = {};
for (let i = 0; i < confs.length; i++) {
    let temp = confs[i].split("=");
    if(temp.length < 2){
        continue
    }else {
        globalConf[temp[0]] = temp[1];
    }
}
if(globalConf["path_position"] == "relative"){
    globalConf.basePath = __dirname + globalConf.path;
}else {
    globalConf.basePath = globalConf.path;
}
module.exports = globalConf;