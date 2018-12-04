// var state = {
//     value:'',
//     sex:'all'
// };

function createStore(initSate) {
    var list = [];
    var state = initSate;
    // console.log(state);
    //返回状态
    function getState(state) {
        return state;
    }

    //修改状态 state action-->{type:'',value:''}
    function dispatch(action) {
        state[action.type] = action.value;
        list.forEach(function (ele, index) {
            ele();
        })
    }

    //订阅 函数 保存所有信息
    function subscribe(handle) {
        list.push(handle);
    }
    return {
        getState:getState,
        dispatch:dispatch,
        subscribe:subscribe
    }
}
// createStore({text:'',sex:'all'})
// var stroe = createStore({text:'',sex:'all'});
// console.log(stroe);