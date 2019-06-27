import React from 'react';

import './style.css';

const Article = ({ match, location }) => {
  return (
    <div className="article">
      <div>
        文章ID：
        <span>{ match.params.id }</span>
      </div>
      <div>
        文章作者：
        <span>{ location.state.author }</span>
      </div>
      <div>
        文章标题：
        <span>{ location.state.title }</span>
      </div>
    </div>
  )
}

export default Article;