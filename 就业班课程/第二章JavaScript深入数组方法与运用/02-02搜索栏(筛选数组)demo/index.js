var person = [
    { name: '刘小华', src: '1.jpg', sex: 'male', des: '帅气的男孩子' },
    { name: '王华', src: '2.jpg', sex: 'male', des: '帅气的程序猿' },
    { name: '陈思思', src: '3.jpg', sex: 'female', des: '我是一个女学霸' },
    { name: '王花', src: '4.jpg', sex: 'female', des: '我喜欢游泳' },
    { name: '陈敬业', src: '5.jpg', sex: 'male', des: '我喜欢看恐怖电影' },
    { name: '陈学习', src: '6.jpg', sex: 'female', des: '女生' },
    { name: '王明', src: '7.jpg', sex: 'male', des: '我是男生' }

];
var oUl = document.getElementById('list');
var oInput = document.getElementById('inp');
var sexUl = document.getElementById('sex');
//根据list的值渲染dom结构
function render(list) {
    var str = '';
    list.forEach(function (ele, index) {
        str += '<li>\
                    <img src="./img/' + ele.src + '" alt="">\
                    <span class="name">'+ ele.name +'</span>\
                    <span class="des">'+ ele.des +'</span>\
                </li>'
    })
    console.log(str)
    oUl.innerHTML = str;
}

render(person);

//根据内容筛选value ---> filter筛选数组(newArr) --->新数组 --->render(newArr) --->筛选渲染成功
oInput.oninput = function(){
    // console.log(this.value)
    state.value = this.value;
    // console.log(filterText(value,person));
    render(addFn(filter,person));
}

function filterText(text,arr){
    return arr.filter(function(ele,index){
        if(ele.name.indexOf(text) !== -1){
            return true;
        }
    })
}

sexUl.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        e.target.className = 'active';
        document.getElementsByClassName('active')[0].className = "";
        state.sex = e.target.getAttribute('sex');
        render(addFn(filter,person));
    }
})

function filterSex(sex,arr){
        if(sex == 'all'){
            return arr;
        }else{
            return arr.filter(function(ele,index){
                if(sex == ele.sex){
                    return true;
                }
            })
        }
}

//叠加选择  选择条件 value -->filterText() sex -->filterSex()

//选择条件---条件值
var state = {
    value:'',
    sex:'all'
};
//实现条件的函数----实现条件的函数
var filter = {
    value:filterText,
    sex:filterSex,
}


function addFn(obj,arr){
    var lastArr = arr;
    for(var prop in obj){
        lastArr = obj[prop](state[prop],lastArr)
    }
    return lastArr;
}

































// var oUl = document.getElementById('list');
// var oInp = document.getElementById('inp');
// var sexUl = document.getElementById('sex');

// var store = createStore({
//     text: '',
//     sex: 'all'
// })

// store.subScribe(function(){
//     fn();
//     render(lastPerArr());
// })

// function  fn(){
//     console.log(123);
// }

// function debounce(handler,delay) {
//     var timer = null;
//     return function(){
//         var self = this;
//         var arg = arguments;
//         clearTimeout(timer);
//         timer = setTimeout(function(){
//             handler.apply(self,arg);
//         },delay)
//     }
// }
// function render(list) {
//     var str = '';
//     list.forEach(function (ele, index) {
//         str += '<li>\
//         <img src="./img/' + ele.src + '" alt="">\
//         <span class="name">' + ele.name + '</span> \
//         <span class="des">'+ ele.des + '</span>\
//     </li>'
//     });
//     oUl.innerHTML = str;
// }
// render(person);

// function deal() {
//     // state.text = this.value;
//     store.dispatch({type:'text',value:this.value});
//     // render(filterText(state.text,person));
//     // render(addFn({ text: filterText, sex: filterSex },person))
//     // render(lastPerArr());
// }
// oInp.oninput = debounce(deal,800);

// function filterText(text, arr) {
//     return arr.filter(function (ele, index) {
//         if (ele.name.indexOf(text) !== -1) {
//             return true;
//         }
//     })
// }

// sexUl.addEventListener('click', function (e) {
//     if (e.target.tagName == 'LI') {
//         // state.sex = e.target.getAttribute('sex');
//         store.dispatch({type:'sex',value:e.target.getAttribute('sex')});

//         document.getElementsByClassName('active')[0].className = '';
//         e.target.className = 'active';
//         // render(filterSex(state.sex,person));
//         // render(addFn({ text: filterText, sex: filterSex },person))
//         // render(lastPerArr());
//     }
// })
// function filterSex(sex, arr) {
//     if (sex == 'all') {
//         return arr;
//     } else {
//         return arr.filter(function (ele, index) {
//             if (sex == ele.sex) {
//                 return true;
//             }
//         })
//     }
// }
// // 公共函数筛选
// // var state = {
// //     text: '',
// //     sex: 'all'
// // }
// function addFn(obj, arr) {
//     return function () {
//         var lastArr = arr;
//         for (var prop in obj) {
//             lastArr = obj[prop](store.getState()[prop], lastArr);
//         }
//         console.log(lastArr)
//         return lastArr;
//     }
// }

// var lastPerArr = addFn({ text: filterText, sex: filterSex }, person);

// // state状态--》改变状态filter--》[arr]  renderDom--->view区域