import React from 'react';
import { Route } from 'react-router-dom';

import App from './components/app';
import Main from './pages/main';

export default (
  <App>
    <Route exact path="/" component={Main} />
  </App>
);