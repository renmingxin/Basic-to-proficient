const initState = {
  inpVal: '',
  list: [1, 2, 3, 7]
}


export default (state=initState, action) => {
  const newState = JSON.parse( JSON.stringify(state));

  switch (action.type) {
    case 'CHANGE_INPUT_VAL':
      newState.inpVal = action.value;
      return newState;
    case 'ADD_TODO_ITEM':
      newState.list.push(action.value);
      newState.inpVal = '';
      return newState;
    case 'DELETE_TODO_ITEM':
      newState.list.splice(action.index, 1);
      return newState;
  }

  return state;
}