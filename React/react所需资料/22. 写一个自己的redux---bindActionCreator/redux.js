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

export const combineReducers = reducers => {
  const finalReducers = {};

  for(let key in reducers) {
    const reducer = reducers[key];

    if(typeof reducer === 'undefined') {
      console.error(`reducer ${key} 的值是undefined`)
    }

    if(typeof reducer === 'function') {
      finalReducers[key] = reducer;
    }
  }

  for(let key in finalReducers) {
    const reducer = finalReducers[key];
    const state = reducer(undefined, {type: ActionTypes.INIT});

    if(typeof state === 'undefined') {
      throw new Error(`Reducer ${key} 的返回值为undefined，该reducer非法`);
    }

  }
  
  return (state={}, action) => {
    for(let key in finalReducers) {
      const reducer = finalReducers[key];
      const newState = reducer(state[key], action);
      state[key] = newState;
    }
    return state;
  }
}

export const bindActionCreators = (actions, dispatch) => {
  const boundAction = {};

  if(typeof actions !== 'object' || actions === null) {
    throw new Error('actions必须是一个对象且不能为null');
  }

  for(let key in actions) {
    const actionCreator = actions[key];

    if(typeof actionCreator === 'function') {
      boundAction[key] = (...args) => dispatch(actionCreator(...args))
    }
  }

  return boundAction;
}