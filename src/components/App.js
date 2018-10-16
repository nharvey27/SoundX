import { Route, Switch } from "react-router-dom";
import React from 'react';
import Nav from './Nav';
import Presenter from './Presenter';
import ErrorBoundary from './ErrorBoundary';
import Single from './Single.jsx';

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