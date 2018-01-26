import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const routes = [
  {
    path: '/',
    exact: true
  },
  {
    path: '/training',
  },
  {
    path: '/results',
  }
];

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className="content">
        <div className="inner">
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
            />
          ))}
        </div>
      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
