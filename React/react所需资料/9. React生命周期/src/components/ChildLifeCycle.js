import React from 'react';

class ChildLifeCycle extends React.Component {
  render() {
    console.log('2. render');

    return (
      <div>我是子组件</div>
    )
  }

  componentWillReceiveProps ( nextProps ) {
    // 状态的设置
    // ajax请求
    // 不建议
    // 第一次被挂载的时候不执行，之后才执行
    this.setState({
      a: nextProps.n
    })
    console.log('2. willReceive');
  }

  shouldComponentUpdate () {
    console.log('2. shouldUpdate?')
    return true;
  }

  componentWillUpdate () {
    console.log('2. willUpdate')
  }

  componentDidUpdate () {
    console.log('2. didUpdate');
  }

  componentWillUnmount () {
    console.log('2. willUnMount');
  }

}

export default ChildLifeCycle;