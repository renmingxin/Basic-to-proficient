import React, { Component } from 'react';
import Nav from './components/nav/Nav';

import './styles/app.css';

class c extends Component {

  render () {
    return (
      <div className="app">
        {/* 高阶组件 */}
        {/* <Route component={ Nav }></Route> */}
        <Nav></Nav>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    )
  }

}

export default c;