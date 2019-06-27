import React from 'react';

// 无状态组件
function TagList (props) {
  console.log(this);
  const { list } = props;
  return (
    <div className="wrapper">
      <div className="search-title-box">
        <h5 className="search-title">搜索热点</h5>
        <span className="refresh">换一换</span>
      </div>
      
      <ul className="top-list-container">
        {
  
          list.map( (item, index) => {
            const indexStyle = {};
            switch (index) {
              case 0:
                indexStyle.backgroundColor = '#f54545';
                break;
              case 1:
                indexStyle.backgroundColor = '#ff8547';
                break;
              case 2:
                indexStyle.backgroundColor = '#ffac38';
                break;
              default:
                break;
            }
  
            return (
              <li className="top-list" key={item.id}>
                <div className="top-title">
                  <span className="hot-index" style={ indexStyle }>{ index + 1 }</span>
                  <a className="topic-title">{ item.title }</a>
                  {
                    item.new ? <span className="topic-new">新</span> : ''
                  }
                  
                </div>
                <div className="hot-degree">
                  <span>{ item.hot }</span>
                </div>
              </li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default TagList;