import React from 'react';
import { Consumer } from './context';

class TodoItem extends React.Component {
  render () {
    const { task, index } = this.props;

    return (
      <Consumer>
        {
          ({deleteTask}) => 
            <li>
              { task }
              <button onClick={ () => { deleteTask(index) }}>X</button>
            </li>
        }
      </Consumer>
      
    )
  }

  handleDelete = (index) => {
    this.props.deleteTask(index)
  }
}

export default TodoItem;