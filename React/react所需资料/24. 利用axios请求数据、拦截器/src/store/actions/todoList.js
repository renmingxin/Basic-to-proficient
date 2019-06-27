import * as Types from '../actionTypes';

export const changeVal = (value) => {
  return {
    type: Types.CHANGE_INPUT_VAL,
    value
  }
}

export const addItem = (value) => {
  return {
    type: Types.ADD_TODO_ITEM,
    value
  }
}

export const deleteItem = (index) => {
  return {
    type: Types.DELETE_TODO_ITEM,
    index
  }
}

export const getInitList = list => {
  return {
    type: Types.GET_INIT_LIST,
    list
  }
}