import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

class ActivitiesNav extends Component {

  render () {
    return (
      <div className="activities-nav">
        <NavLink to="/activities/recommended">推荐</NavLink>
        <NavLink to="/activities/all">综合</NavLink>
        <NavLink to="/activities/articles">文章</NavLink>
        <NavLink to="/activities/pins">沸点</NavLink>
      </div>
    )
  }

}

export default ActivitiesNav;