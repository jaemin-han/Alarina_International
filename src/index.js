import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';
import Position from './components/Position/Position.jsx';


// mount our App at #container
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/main" component={Main} />
      <Route path="/position" component={Position} />

    </Route>
  </Router>
  ), document.querySelector('#root-container'));

