//防抖小demo
var oInp = document.getElementById('inp');

// oInp.oninput = event;

// var timer;
// function event(e){
//     var _this = this;
//     clearTimeout(timer);
//     timer = setTimeout(function(){
//         console.log(_this.value)
//     },1000);
// }

//防抖函数

function debounce(handle,delay){
    var timer = null;
    // console.log(this);//undefined
    return function(){
        // console.log(this);//oInp
        // console.log(arguments);
        var self = this;
        var arg = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            // console.log(arg)
            // console.log(arg[0]);
            handle.apply(self,arg);
        },delay)
    }
}

//功能函数
function event(){
    var self = this;
    console.log(self.value);
}


//绑定事件
oInp.oninput = debounce(event,1000);