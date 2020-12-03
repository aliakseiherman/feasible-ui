import { createBrowserHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Demo } from './Demo';
import { Koala } from './Koala';
import * as serviceWorker from './serviceWorker';
import { Support } from './Support';

const history = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={history}>
    <Switch>
      <Route path='/demo' component={Demo} />
      <Route path='/quick-start' component={Demo} />
      <Route path='/koala' component={Koala} />
      <Route path='/support' component={Support} />
      <Redirect from='/' to='/demo' />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
