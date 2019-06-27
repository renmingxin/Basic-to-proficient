import React from 'react';
// import ChildLifeCycle from './ChildLifeCycle';
import AnotherChild from './AnotherChild';


// componentWillMount、componentWillReceiveProps、componentWillUpdate
class LifeCycle extends React.Component {
  static defaultProps = {}
  static propTypes = {}

  constructor () {
    console.log('1. construtor');
    super();
    this.state = {
      count: 0
    }
  }

  componentWillMount () {
    // ajax 官方不建议 16.3 移除
    console.log('1. willMount');
  }

  render() {
    // 用来渲染 
    // this.setState ? 
    console.log('1. render');
    return (
      <>
        <div>
          count的值：{ this.state.count }
          <button onClick={ this.handleClick }>增加count的值</button>
        </div>
        {/* {
          this.state.count === 0 
            ? <ChildLifeCycle n={ this.state.count }></ChildLifeCycle>
            : ''
        } */}
        {/* <ChildLifeCycle n={ this.state.count }></ChildLifeCycle> */}
        <AnotherChild n={ this.state.count }></AnotherChild>
      </>
    )
  }

  componentDidMount () {
    // ajax setState()
    console.log('1. didMount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    // 优化性能
    console.log('1. shouldUpdate');
    // return (nextState.count === this.state.count);
    return true;
  }

  componentWillUpdate () {
    // 不能设置 状态
    console.log('1. willUpdate')
  }

  componentDidUpdate () {
    console.log('1. didUpdate');
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}

export default LifeCycle;