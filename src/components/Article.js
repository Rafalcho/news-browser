import React, { Component } from 'react';
import {getArticle} from '../utils/api';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleBody: null,
    };
  }

  componentDidMount() {
    getArticle('http://wiadomosci.wp.pl/posel-kukiz15-chce-zamykac-sedziow-tk-w-obozach-tylko-sobie-zartowalem-6131385401800833a')
      .then(data => {
        this.setState({
          articleBody: data
        });
      });
  }

  render() {
    let article;
    let title;
    let image;

    if (this.state.articleBody) {
      title = this.state.articleBody.title;
      image = this.state.articleBody.img.url || null;
      article = this.state.articleBody.body.map((part, index) => {
        function createMarkup() {
          return {__html: part.data};
        }
        return <div
          key={index}
          dangerouslySetInnerHTML={createMarkup()} />;
      });
    }
    return <div className='article'>
      <h1>{title}</h1>
      <img
        className='article-photo'
        src={image}
        alt='article'/>
      {article}
    </div>;
  }
}

export default Article;
