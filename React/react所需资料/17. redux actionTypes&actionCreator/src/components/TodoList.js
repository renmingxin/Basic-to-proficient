import React, { Component } from 'react';
import store from '../store';
import * as Types from '../store/actionTypes';
import * as Actions from '../store/actionCreators';

// store.getState()

class c extends Component {

  state = store.getState()

  componentDidMount () {
    store.subscribe(this.handleStoreChange);
  }

  render () {
    return (
      <>
        <div>
          <input value={ this.state.inpVal } onChange={ this.handleChange }></input>
          <button onClick={ this.handleAdd }>添加</button>
        </div>
        <ul>
          {
            this.state.list.map( (item, index) => (
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
    const action = Actions.getTodoChangeInputValAction(e.target.value);
    store.dispatch(action);
  }

  handleAdd = () => {
    const action = Actions.getTodoAddItemAction( this.state.inpVal );
    store.dispatch( action );
  }

  handleDelete = (index) => {
    const action = Actions.getTodoDeleteItemAction(index);
    store.dispatch(action);
  }

  handleStoreChange = () => {
    this.setState(store.getState());
  }
}

export default c;