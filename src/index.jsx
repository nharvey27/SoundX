import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import configureStore from './stores/configureStore';
import App from './components/App';
import Callback from './components/Callback';
import Presenter from './components/Presenter.jsx';
import Main from './components/Main.jsx';
import Single from './components/Single.jsx';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={Presenter} />
        <Route path="/track/:id" component={Single} />
        <Route path="/callback" component={Callback} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

module.hot.accept();
