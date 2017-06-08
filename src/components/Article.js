import React, { Component } from 'react';
import {getArticle} from '../utils/api';
// import queryString from 'query-string';

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleBody: null,
    };
  }

  componentDidMount() {
    const articleUrl = this.props.location.search.slice(1);
    getArticle(articleUrl)
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
