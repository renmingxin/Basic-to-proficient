import * as Types from './actionTypes';

const initState = {
  inpVal: '',
  list: [1, 2, 3, 7],

  count: 0
}


export default (state=initState, action) => {
  const newState = JSON.parse( JSON.stringify(state));

  switch (action.type) {
    case Types.CHANGE_INPUT_VAL:
      newState.inpVal = action.value;
      return newState;

    case Types.ADD_TODO_ITEM:
      newState.list.push(action.value);
      newState.inpVal = '';
      return newState;

    case Types.DELETE_TODO_ITEM:
      newState.list.splice(action.index, 1);
      return newState;

    case Types.COUNT_ADD:
      newState.count = newState.count + action.n;
      return newState;
  }

  return state;
}