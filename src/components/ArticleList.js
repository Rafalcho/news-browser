import React, { Component } from 'react';
import {getNews} from '../utils/api';
import {Link} from 'react-router-dom';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      articleType: 'Tech'
    };
  }

  componentDidMount() {
    getNews(this.state.articleType)
      .then(data => {
        this.setState({
          articles: data,
        });
      });
  }
  render() {
    let articles;
    this.state.articles ? articles = this.state.articles.map(article => {
      let imgUrl;
      article.img ? imgUrl = article.img.url : imgUrl = 'https://v.wpimg.pl/LTExNDI2JT1qN2F3eQo0ZX1IYSBnRTw9KB9gNCUdemN0SnhweAV5eWhJeXx8CntkdUl5azNTPzggCCUlZAF8bD1JdnRnQiIz/';
      return (
        <Link
          to={{
                pathname: '/article',
                search: article.url
              }}
          key={article.id}
          className='article-preview'>
          <div
            className='preview-image'
            style={{backgroundImage: `url('${imgUrl}')`}}
            >

          </div>
          {article.title}
        </Link>);
    }) : articles = null;

    return <div className='article-list'>
      {articles}
    </div>;
  }
}

export default ArticleList;
