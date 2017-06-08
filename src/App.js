import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={ArticleList} />
          <Route path='/article' component={Article} />
          <Route render={() => <p>Not Found</p>} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
