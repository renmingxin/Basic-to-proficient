//测试
function test(){
    console.log("tools工具js准备就绪！");
};


//兼容性添加事件函数
function addEvent(elem,type,handle){
    if(elem.addEventListener){
        elem.addEventListener(type,handle,false);
    }else if(elem.attachEvent){
        elem.attachEvent('on' + type,function(){
            handle.call(elem);
        })
    }else {
        elem['on' + type] = handle;
    }
};

//兼容性阻止事件冒泡
function stopBubble(event){
    if(event.stopPropagation){
        event.stopPropagation();
    }else{
        event.cancelBubble = true;
    }
};

//兼容性阻止默认事件：比如右键出现浏览器菜单事件 
function cancelHandler(event){
    if(event.preventDefault){
        event.preventDefault();
    }else {
        event.returnValue = false;
    }
};

//兼容性onload等外部js加载完的兼容性写法
function loadScript(url,callback){
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = url;
    if(script.readyState){
        script.onreadystatechange = function(){
            if(script.readyState == "complete" || script.readyState == "loaded"){
                callback();
            }
        }
    }else{
        script.onload = function(){
            callback();
        }
    }
    document.head.appendChild(script);
}