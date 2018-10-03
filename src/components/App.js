import React from 'react';
import Nav from './Nav';
import styles from '../css/styles';
import Presenter from './Presenter';
import ErrorBoundary from './ErrorBoundary';

const App = props => (
  <ErrorBoundary>
    <Nav auth={props.actions.userActions.auth} user={props.user} />
    {React.cloneElement(props.children, props)}
  </ErrorBoundary>
);

export default App;
