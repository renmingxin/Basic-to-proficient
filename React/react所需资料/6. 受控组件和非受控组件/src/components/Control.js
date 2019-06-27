import React from 'react';

class Control extends React.Component {
  state = {
    taskA: '',
    taskB: '',
    list: []
  }

  render () {
    return (
      <>
        <div>
          taskA：
          <input type="text" name="taskA" onChange={ this.handleChange } value={ this.state.taskA }/>
          <button name="taskA" onClick={ this.handleClick}>添加A任务</button>
        </div>
        <div>
        taskB：
        <input type="text" name="taskB" onChange={ this.handleChange } value={ this.state.taskB }/>
        <button name="taskB" onClick={ this.handleClick}>添加B任务</button>
      </div>
      <ul>
        {
          this.state.list.map( (item, index) => (
            <li key={ item + index}>{ item }</li>
          ))
        }
      </ul>
    </>
    )
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = (e) => {
    const type = e.target.name;
    let task = this.state[type];

    if(type === 'taskA') {
      task = `任务A：${task}` 
    } else if (type === 'taskB') {
      task = `任务B：${task}` 
    }
    
    this.setState({
      list: [...this.state.list, task],
      [type]: ''
    })
  }
}

export default Control;