import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Demo } from './Demo';

const history = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={history} basename="/">
    <Switch>
      <Route path='/demo' component={Demo} />
      <Route path='/quick-start' component={Demo} />
      <Redirect from='/' to='/demo' />
    </Switch>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
