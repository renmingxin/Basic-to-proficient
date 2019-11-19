window.onload = function(){
    // myAjax('GET','/getData2',data=>{
    //     console.log(data);
    // })
}
function myAjax(type='GET',url,callback){
    let xmlHttp;
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open(type,url,true);
    xmlHttp.send(null);
    xmlHttp.onreadystatechange=function () {
        if (xmlHttp.readyState ==4 && xmlHttp.status ==200){
            callback(xmlHttp.responseText)
        }
    }
}

function login(){
    let stuNum = document.getElementById('stuNum').value;
    let password = document.getElementById('password').value;
    let params = `stuNum=${stuNum}&password=${password}`
    myAjax('GET','/login?'+params,data=>{
        if(data === 'ok'){
            alert('登录成功')
        }else {
            alert('登录失败')
        }
    })
}