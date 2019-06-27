import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../store/actions/todoList';
import axios from 'axios';

axios.interceptors.response.use(res => {
  if(res.data.code === 0) {
    return res.data.data;
  }
  return Promise.reject('请求出错');
})

axios.interceptors.request.use(config => {
  config.headers.token = 'slkjkdflksdflksdjflksdhfl';
  return config;
})


class TodoList extends Component {
  componentDidMount () {
    this.props.getTodoData();
  }

  render () {
    const { inpVal, list } = this.props;
    return (
      <>
        <div>
          <input value={ inpVal } onChange={ this.handleChange }></input>
          <button onClick={ this.handleAdd }>添加</button>
        </div>
        <ul>
          {
            list.map( (item, index) => (
              <li key={item + index}>
                { item }
                <button onClick={ ()=>{ this.handleDelete(index) } }>X</button>
              </li>
            ))
          }
        </ul>
      </>
    )
  }

  handleChange = (e) => {
    this.props.changeVal(e.target.value);
  }

  handleAdd = () => {
    this.props.addItem(this.props.inpVal);
  }

  handleDelete = (index) => {
    this.props.deleteItem(index)
  }
}

const mapStateToProps = (state) => ({
  inpVal: state.todoList.inpVal,
  list: state.todoList.list
})

// const mapDispatchToProps = (dispatch) => ({
//   changeVal: (val) => {
//     dispatch(Actions.getTodoChangeInputValAction(val))
//   },
//   addItem: (val) => {
//     dispatch(Actions.getTodoAddItemAction(val))
//   },
//   deleteItem: (index) => {
//     dispatch(Actions.getTodoDeleteItemAction(index))
//   }
// })

// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, actions)(TodoList);