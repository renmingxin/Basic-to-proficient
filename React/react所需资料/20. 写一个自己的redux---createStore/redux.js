// 1. reducer  函数
// 2. {} --> initState
// 3. 函数 -->

const ActionTypes = {
  INIT: '@@redux/INIT'
}


export const createStore = (reducer, preloadedState, enhancer) => {

  if(typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if(typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState);
  }

  if(typeof reducer !== 'function') {
    throw new Error('传入的reducer必须为一个函数');
  }


  let state = preloadedState;
  let listeners = [];
  let isDispatching = false;
  
  const getState = () => state;

  const dispatch = action => {
    if(typeof action !== 'object') {
      throw new Error('传入的action必须为一个简单对象')
    }

    if(typeof action.type === 'undefined') {
      throw new Error('action.type的值不能为undefined');
    }

    if(isDispatching) {
      throw new Error('不能在reducer中调用dispatch');
    }

    try{
      isDispatching = true;
      state = reducer(state, action);
    }finally{
     isDispatching = false; 
    }
    
    listeners.forEach( item => item());
  }

  const subscribe = fn => {
    listeners.push(fn);

    return () => {
      const index = listeners.indexOf(fn);
      listeners.splice(index, 1);
    }
  }

  dispatch({type: ActionTypes.INIT})

  return {
    getState,
    dispatch,
    subscribe
  }
}