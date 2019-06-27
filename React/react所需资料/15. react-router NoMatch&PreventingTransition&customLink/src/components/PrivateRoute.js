import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component:Component, ...props}) => {
  return (
    <Route {...props} render={(p)=>{
      const isLogin = document.cookie.includes('login=true');
      if(isLogin) {
        return <Component></Component>
      } else {
        alert('你还没有登录，需转至登录页进行登录');
        return <Redirect to={{
          pathname: "/login",
          state: {
            from: p.location.pathname
          }
        }}></Redirect>
      }
    }}></Route>
  )
}

export default PrivateRoute;