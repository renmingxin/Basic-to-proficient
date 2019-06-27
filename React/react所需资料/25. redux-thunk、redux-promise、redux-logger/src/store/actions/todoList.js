import * as Types from '../actionTypes';
import axios from 'axios';

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
  // return dispatch => {
  //   axios.get('list.json').then(res => {
  //     dispatch({
  //       type: Types.GET_INIT_LIST,
  //       list: res
  //     })
  //   })
  // }

  return new Promise( (resolve, reject) => {
    axios.get('list.json').then(res => {
      resolve({
        type: Types.GET_INIT_LIST,
        list: res
      })
    })
  })
  // let data;
  // axios.get('list.json').then(res => {
  //   data = res;
  // })

  // return {
  //   type: Types.GET_INIT_LIST,
  //   list: data
  // }
}