// 引入的react，名字必须叫做React，是大写的R
// import React from 'react';
// import { render } from 'react-dom';

// // jsx   ==>  js + xml(html)
// // React.createElement(type, props, children....)
// // React.createElement('div', {id: 'demo'}, 'shanshan', React.createElement('span', null, 'zuimei'))
// // jsx -> React.createElement(type, props, children....) -> vNode 对象（描述当前元素） -> 渲染到页面上
// let div = <div id='demo'>shanshan<span>zuimei</span></div>

// // vnode, container
// render(div, document.getElementById('root'));

const React = {
  createElement (type, props, ...children) {
    return {
      type, 
      props,
      children
    }
  }
}

let div = <div id='demo'>shanshan<span id="desc">zuimei</span></div>;

const render = (vNode, container) => {
  if( typeof vNode === 'string') {
    const text = document.createTextNode(vNode);
    return container.appendChild(text)
  }
  const { type, props, children } = vNode;

  const ele = document.createElement(type);

  for(let key in props) {
    if(key.startsWith('__')) {
      break;
    }
    ele.setAttribute(key, props[key]);
  }

  children.forEach(item => {
    render(item, ele);
  })

  container.appendChild(ele);

}

render(div, window.root);
