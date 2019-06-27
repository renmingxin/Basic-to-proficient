import React from 'react';
import PropTypes from 'prop-types';

class Person extends React.Component {
  state = {
    name: this.props.name
  }

  static defaultProps = {
    name: 'duyi'
  }

  static propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    sex: PropTypes.oneOf(['男', '女']),
    figure: PropTypes.objectOf(PropTypes.number),
    hobby: PropTypes.arrayOf(PropTypes.string),
    salary (props, propsName, componentName) {
      if(props[propsName] < 10000) {
        return new Error(
          `${componentName}组件传递过来的${propsName}属性的值太小啦，应该大于1万`
        );
      }
    }
  }

  render () {
    const { name, age, sex, figure, hobby, salary } = this.props

    return (
      <>
        <div>{name} 个人资料</div>
        <div>年龄：{ age }</div>
        <div>性别：{ sex }</div>
        <div>身高：{ figure.height }cm</div>
        <div>体重：{ figure.weight / 2 } kg</div>
        <div>兴趣：{ hobby }</div>
        <div>薪资：{ salary }/月</div>

        <button onClick={ this.handleClick }>点击</button>
      </>
    )
  }

  handleClick = () => {
    // this.props.name = 'duyi'
    this.setState({
      name: 'duyi'
    })
  }
}


export default Person;