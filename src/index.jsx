import { Route } from "react-router-dom";
import { CLIENT_ID, REDIRECT_URI } from "./constants/auth";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import history from "./stores/history";
import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom";
import SC from "soundcloud";
import store from "./stores/configureStore";
import "./index.css";

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={Main} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("app")
);

module.hot.accept();
