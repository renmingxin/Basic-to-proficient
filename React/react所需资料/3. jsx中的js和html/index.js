import React, { Fragment } from 'react';
import { render } from 'react-dom';
import './index.css';

// Fragment <></>
// jsx { js }  < html >
// 关键字 class -> className   for -- htmlFor
// 列表渲染 wx:for v-for xxxfor?   map , key 唯一，尽量不要用index
//   key 就是他的名字

// const arr = ['a', 'b', 'c']; // -> [c, b, a]

// const newArr = arr.map( item => {
//   return <p key={item}>{item}</p>
// })

//  <p>a</p>    -> a    0
//  <p>b</p>    -> b    1
//  <p>c</p>    -> c    2 

//  <p>c</p>    -> c    0
//  <p>b</p>    -> b    1
//  <p>a</p>    -> a    2


// vue v-html  innerHTML  dangerouslySetInnerHTML XSS

// let str = '<span>shanshan</span>'
// let div = <div dangerouslySetInnerHTML={ {__html: str} }></div>


const topList = [
  {
    id: 0,
    title: '老年人才用9键',
    new: true,
    hot: '46万'
  },
  {
    id: 1,
    title: '人贩子张维平死刑',
    new: true,
    hot: '44万'
  },
  {
    id: 2,
    title: '全国冻哭预警地图',
    new: false,
    hot: '35万'
  },
  {
    id: 3,
    title: '沈梦辰晒婚纱照',
    new: false,
    hot: '33万'
  },
  {
    id: 4,
    title: '恋爱4个月胖50近',
    new: true,
    hot: '32万'
  },
  {
    id: 5,
    title: '郭麒麟初中早恋',
    new: false,
    hot: '25万'
  },
  {
    id: 6,
    title: '男孩滑雪遭遇雪崩',
    new: true,
    hot: '24万'
  },
  {
    id: 7,
    title: '大熊猫玩菜刀',
    new: false,
    hot: '24万'
  },
  {
    id: 8,
    title: '姿态宣布退役',
    new: false,
    hot: '22万'
  },
  {
    id: 9,
    title: '卫龙辣条吃出虫子',
    new: false,
    hot: '20万'
  },
  {
    id: 10,
    title: '女生被罚抱头蹲',
    new: true,
    hot: '20万'
  }
]

let element =(
  <div className="wrapper">
    <div className="search-title-box">
      <h5 className="search-title">搜索热点</h5>
      <span className="refresh">换一换</span>
    </div>
    
    <ul className="top-list-container">
      {

        topList.map( (item, index) => {
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

render(element, document.getElementById('root'));