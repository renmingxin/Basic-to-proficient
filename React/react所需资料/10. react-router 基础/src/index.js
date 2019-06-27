import React from 'react';
import { render } from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  NavLink
} from 'react-router-dom';

import Home from './pages/Home';
import Activities from './pages/Activities';
import Topics from './pages/Topics';
import Login from './pages/Login';

render(
  <Router>
    <>
      <div className="nav">
        <NavLink to="/" exact>首页</NavLink>
        <NavLink to="/activities">动态</NavLink>
        <NavLink to="/topics">话题</NavLink>
        <NavLink to="/login">登录</NavLink>
      </div>
      <div className="content">
        <Switch>
          <Route path='/' exact component={ Home }></Route>
          <Route path='/activities' component={ Activities }></Route>
          <Route path='/topics' component={ Topics }></Route>
          <Route path='/login' component={ Login }></Route>
          <Redirect to='/'></Redirect>
        </Switch>
      </div>
    </>
  </Router>, 
  document.getElementById('root')
);