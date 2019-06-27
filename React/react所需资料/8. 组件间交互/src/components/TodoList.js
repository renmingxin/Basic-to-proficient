import React from 'react';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
  render () {
    const { list, fn } = this.props;

    return (
      <ul>
        {
          list.map( (item, index) => 
            // <li key={item+index}>{ item }</li>
            <TodoItem index={index} key={item+index} task={item} deleteTask={fn}></TodoItem>
          )
        }
      </ul>
    )
  }
}

export default TodoList;