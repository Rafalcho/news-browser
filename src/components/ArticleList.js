import React, { Component } from 'react';
import {getNews} from '../utils/api';

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
    };
  }

  componentDidMount() {
    getNews()
      .then(data => {
        this.setState({
          articles: data,
        });
      });
  }
  render() {
    return <div className='article-list'>
      <ul>
        {this.state.articles ? this.state.articles.map(article => {
          return <li>{article.title}</li>;
        }) :  null}
      </ul>

    </div>;
  }
}

export default ArticleList;
