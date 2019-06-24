let _reg = /{{[a-zA-Z]+[a-zA-Z0-9]*}}/g;//解析html模板{{}}
let obj = {
    wd:21,
    sd:6,
}
//分析模板
function analysisTemplate(html){
    return html.match(_reg);
}
//扒括号 例:{{ww}} 解析后 ww  ：去除花括号
function dropBorder(text){
    return text.substring(2,text.length - 2);
}
//渲染 把{{wd}} 换成tempValue
function render(el,originTemplate,templates,data){
    let result = originTemplate;
    for (let i = 0; i < templates.length; i++) {
        let tempValue = data[dropBorder(templates[i])];
        if(tempValue){
            result = result.replace(templates[i],tempValue);
        }
    }
    el.innerHTML = result;
}

//简单的深度克隆 无法克隆方法
function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
//代理监听
function proxyObj(obj, newObj){
    let newObj = deepClone(obj);
    for(let temp in obj){
        if(temp instanceof Object){
            proxyObj(obj[temp],newObj);
        }else {
            Object.defineProperty(obj,temp,{
                get(){
                    console.log('=')
                    return newObj[temp];
                },
                set(value){
                    console.log('+');
                    newObj[temp] = value;
                }
            })
        }
    }
}   
proxyObj(obj,newObj);

// 建立一个映射关系
//页面元素和数据对象的映射关系
function MVVM(id,data){
    this.id = id; //dom
    this.data = data; //{wd:21,sd:6}
    this.el = document.getElementById(this.id);//dom
    this.originTemplate = this.el.innerHTML;//原始模板
    this.templates =  analysisTemplate(this.el.innerHTML);//["{{wd}}","{{sd}}"]
    this.cloneObj = deepClone(this.data);
    proxyObj(this.data,this.cloneObj);
    render(this.el,this.originTemplate,this.templates,this.data);
}



window.onload = function(){

}