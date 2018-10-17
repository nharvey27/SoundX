import { Route, Switch } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import Nav from './Nav';
import Presenter from './Presenter';
import Single from './Single.jsx';
import React from 'react';

const App = props => {
  const reduxProps = props;

  return(
  <ErrorBoundary>
    <Nav auth={props.actions.userActions.auth} user={props.user} />
    <Switch >
      <Route path="/track/:id" render={props => <Single {...props} {...reduxProps}/> } />
      <Route  render={props => <Presenter {...reduxProps} />} />
    </Switch>
  </ErrorBoundary>
)}

export default App;