import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './components/App.jsx';
import Home from './components/Home/Home.jsx';
import Main from './components/Main/Main.jsx';

// mount our App at #container
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
        <Route path="/main" component={Main} />
    </Route>
  </Router>
  ), document.querySelector('#root-container'))

