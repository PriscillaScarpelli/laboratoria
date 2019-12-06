import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import history from './history';
import App from '../../App';

export default function registerRoutes() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' component={App} />
        </Switch>
      </Router>
    </div>
  );
}
