import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

class Nav extends Component {

  render () {
    return (
      <div className="nav">
        <NavLink to="/" exact>首页</NavLink>
        <NavLink to="/activities">动态</NavLink>
        <NavLink to="/topics">话题</NavLink>
        <NavLink to="/login">登录</NavLink>
      </div>
    )
  }

}

export default Nav;