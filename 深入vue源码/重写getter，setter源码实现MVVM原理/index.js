let _reg = /{{[a-zA-Z]+[a-zA-Z0-9]*}}/g;//解析html模板{{}}
let obj = {
    wd:21,
    sd:6,
}

//2.分析模板 分析{{}}格式里面的信息 把模板给提取出来 [{{wd}},{{sd}}]
function analysisTemplate(html){
    return html.match(_reg);
}
//4.扒括号 例:{{ww}} 解析后 ww  ：去除花括号
function dropBorder(text){
    return text.substring(2,text.length - 2);
}
//3.渲染 把{{wd}} 换成tempValue
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

//4.代理监听data对象里面的变化
function proxyObj(obj, newObj){
    let self = this;
    for(let temp in obj){
        if(obj[temp] instanceof Object){
            proxyObj(obj[temp],newObj[temp]);
        }else {
            Object.defineProperty(obj,temp,{
                get(){
                    console.log('=')
                    return newObj[temp];
                },
                set(value){
                    console.log('+');
                    newObj[temp] = value;
                    render(self.el,self.originTemplate,self.templates,self.data);
                }
            })
        }
    }
}   
//6.Vnode :虚拟dom是用来描述真实dom的
function VNode(dom,type,value){
    this.dom = dom;
    this.type = type;
    this.value = value;
    this.childNodes = [];
    this.appendChild = function(vnode){
        if(!(vnode instanceof VNode)){
            throw new Error('node is not instanceof VNode!')
        }
        this.childNodes.push(vnode);
    }
}

//5.构建虚拟节点(虚拟DOM树):
function buildVirtualNode(node){
    let temp = new VNode(node,node.nodeType,node.nodeValue);
    for (let i = 0; i < node.childNodes.length; i++) {//遍历dom上的节点
        if(node.childNodes[i].nodeType === 1){//dom节点
            let child = buildVirtualNode.call(this,node.childNodes[i]);
            temp.appendChild(child);
        }else if(node.childNodes[i].nodeType === 3){//文本节点
            let child = buildVirtualNode.call(this,node.childNodes[i]);
            temp.appendChild(child);
        }else{
            continue;
        }
    }
    return temp;
}

//1.建立一个映射关系
//页面元素和数据对象的映射关系
function MVVM(id,data){
    this.id = id; //dom
    this.data = data; //{wd:21,sd:6}
    this.el = document.getElementById(this.id);//dom
    this.originTemplate = this.el.innerHTML;//原始模板
    this.templates =  analysisTemplate(this.el.innerHTML);//["{{wd}}","{{sd}}"]
    this.cloneObj = deepClone(this.data);
    proxyObj.call(this,this.data,this.cloneObj);
    render(this.el,this.originTemplate,this.templates,this.data);
    this.vNodeRoot = buildVirtualNode(this.el)
}



window.onload = function(){
    testPapping.data.wd = 222;
}