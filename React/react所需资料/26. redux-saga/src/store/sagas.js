import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import * as Types from './actionTypes';
import * as actions from './actions/todoList';

function* mySaga () {
  yield takeEvery(Types.ADD_TODO_ITEM, addItem);
  yield takeEvery(Types.GET_TODO_DATA,  getTodoData);
}

function* addItem () {
  console.log('add');
}

function* getTodoData () {
  try {
    const data = yield axios.get('list.json');
    const action = actions.getInitList(data);
    yield put(action);
  } catch (err) {
    console.log(err);
  }
}

export default mySaga;