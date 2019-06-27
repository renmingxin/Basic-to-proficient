import React, { Component } from 'react';
import store from '../store';
import { getCountAddAction } from '../store/actionCreators';

class c extends Component {

  state = {
    count: store.getState().count
  }

  componentDidMount () {
    store.subscribe(()=>{
      this.setState({
        count: store.getState().count
      })
    })
  }

  render () {
    return (
      <div>
        { this.state.count }
        <button onClick={ this.handleClick }>add</button>
      </div>
    )
  }

  handleClick = () => {
    const action = getCountAddAction(3);
    store.dispatch(action);
  }
}

export default c;