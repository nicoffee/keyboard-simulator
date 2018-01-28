import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import StartPage from './StartPage';
import TrainingPageContainer from './../containers/TrainingPageContainer';
import ResultsPageContainer from './../containers/ResultsPageContainer';

const routes = [
  {
    path: '/',
    component: StartPage,
    exact: true
  },
  {
    path: '/training',
    component: TrainingPageContainer
  },
  {
    path: '/results',
    component: ResultsPageContainer
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
              component={route.component}
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
