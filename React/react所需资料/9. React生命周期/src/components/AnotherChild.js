import React from 'react';

class AnotherChild extends React.Component {
  static defaultprops = {}
  static propsType = {}

  constructor () {
    console.log('3. constructor')
    super();
    this.state = {
      childCount: 0,
      w: -1
    }

  }

  static getDerivedStateFromProps(props, state) {
    // 必须有返回值
    // 第一次被挂载到父组件上就可以执行

    console.log('3. getDerivedStateFromProps', props, state)
    return {
      w: props.n
    };
  }

  render () {
    console.log('3. render');
    return (
      <div>
        另一个子组件的count值：{ this.state.childCount }
        <button onClick={ this.handleClick }>增加childCount的值</button>
      </div>
    )
  }

  componentDidMount () {
    console.log('3. didMount');
  }

  shouldComponentUpdate () {
    console.log('3. shouldUpdate?');
    return true;
  }

  getSnapshotBeforeUpdate () {
    // 必须有返回值
    // 必须和componentDidUpdate写在一起
    console.log('3. getSnapshotBeforeUpdate');
    return {
      a: 10
    };
  }

  componentDidUpdate (prevProps, prevState, snapShot) {

    console.log('3. didUpdate', snapShot);
  }

  handleClick = () => {
    this.setState({
      childCount: this.state.childCount + 1,
      w: 100
    })
  }
}
export default AnotherChild;