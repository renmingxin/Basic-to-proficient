import React from 'react';

class TodoList extends React.Component {

  // 状态
  state = {
    inpVal: '',
    list: [1, 2, 3],
    count: 0
  }

  render() {
    return (
      <>
        <div>
          <input type="text" value={ this.state.inpVal } onChange={ this.handleChange } />
          <button onClick={ this.handleClick }>添加</button>
        </div>
        <ul>
          {
            this.state.list.map( (item, index) => (
              <li key={ item }>
                { item }
                <button onClick={ () => { this.handleDelete(index) } }>X</button>
              </li>
            ))
          }
        </ul>
        <div>
          <span>{ this.state.count }</span>
          <button onClick={ this.handleAdd }>添加</button>
        </div>
      </>
    )
  }

  handleChange = e => {
    this.setState({
      inpVal: e.target.value
    })
  }

  handleClick = () => {
    this.setState({
      list: [...this.state.list, this.state.inpVal],
      inpVal: ''
    })
  }

  handleDelete = index => {
    const list = this.state.list;
    list.splice(index, 1);

    this.setState({
      list
    })
  }

  handleAdd = () =>{

    this.setState({
      count: 2
    })

    
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 2
    //   }
    // })
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 3
    //   }
    // })

  }
}

export default TodoList;

