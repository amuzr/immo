import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';
import Main from './pages/Main';
import About from './pages/About';

export default (
  <App>
    <Route exact path="/" component={Main} />
    <Route exact path="/about" component={About} />
  </App>
);