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
      this.state.articleBody.img ? image = this.state.articleBody.img.url : image = 'https://v.wpimg.pl/LTExNDI2JT1qN2F3eQo0ZX1IYSBnRTw9KB9gNCUdemN0SnhweAV5eWhJeXx8CntkdUl5azNTPzggCCUlZAF8bD1JdnRnQiIz/';

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
