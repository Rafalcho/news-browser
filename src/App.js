import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Nav} from './components/Nav';

class App extends Component {
  render() {
    return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route exact path='/Wiadomosci' component={ArticleList} />
          <Route exact path='/Tech' component={ArticleList} />
          <Route exact path='/Gwiazdy' component={ArticleList} />
          <Route path='/article' component={Article} />
          <Route path='/Wiadomosci/article' component={Article} />
          <Route path='/Tech/article' component={Article} />
          <Route path='/Gwiazdy/article' component={Article} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
