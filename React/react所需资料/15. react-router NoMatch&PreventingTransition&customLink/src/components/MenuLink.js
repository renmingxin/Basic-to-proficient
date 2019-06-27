import React from 'react';
import { Route } from 'react-router-dom';

// componnet
// render 
// children

const MenuLink = ({to, ...props}) => {
  return (
    <Route path={to} {...props} children={(p)=>{
      return (
        <span onClick={()=>{ p.history.push(to) }}
              className={ p.match ? 'active' : ''}
        >
          { props.children }
        </span>
      )
    }}></Route>
  )
}

export default MenuLink;