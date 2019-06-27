import React from 'react';

class UnControl extends React.Component {
  taskA = React.createRef() // 16.3 
  taskB = React.createRef()

  state = {
    list: []
  }

  render () {
    return (
      <>
        <div>
          taskA：
          <input type="text" ref={ this.taskA } />
          <button name="taskA" onClick={ this.handleClick}>添加A任务</button>
        </div>
        <div>
        taskB：
        <input type="text" ref={ this.taskB } />
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


  handleClick = (e) => {
    console.log(this.taskA.current.value);
    // const type = e.target.name;
    // let task = this[type].value;


    // if(type === 'taskA') {
    //   task = `任务A：${task}`
    // } else if (type === 'taskB') {
    //   task = `任务B：${task}` 
    // }
    
    // this[type].value = '';
    // this.setState({
    //   list: [...this.state.list, task]
    // })
  }
}

export default UnControl;