import React, { Component } from 'react';
import './style.css';

class Home extends Component {
  authorInput = React.createRef()
  articleInput = React.createRef()

  render () {
    return (
      <div className="home">
        <h4>发表话题：</h4>
        <form onSubmit={ this.handleSubmit }>
          <div className="form-box">
            <label htmlFor="author">作者姓名：</label>
            <input id="author" required ref={ this.authorInput }></input>
          </div>
          <div className="form-box">
            <label htmlFor="article">文章标题：</label>
            <input id="article" required ref={ this.articleInput }></input>
          </div>
          <button className="confirm-btn">提交</button>
        </form>
      </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const author = this.authorInput.current.value;
    const title = this.articleInput.current.value;
    const id = Math.floor( Math.random() * 100000000000000 );

    const article = {
      author,
      title,
      id
    }

    this.setArticleStorage(article);
  }

  setArticleStorage = (article) => {
    const articleList = JSON.parse( localStorage.getItem('articleList') ) || [];
    articleList.push( article );
    localStorage.setItem('articleList', JSON.stringify(articleList));
    this.jumpToTopics()
  }

  jumpToTopics = () => {
    console.log(this.props);
    this.props.history.push('/topics');
  }

}

export default Home;