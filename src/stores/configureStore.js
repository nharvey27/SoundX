import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";

const logger = createLogger();
const history = createBrowserHistory();
const store = createStore(
  connectRouter(history)(rootReducer),
  applyMiddleware(routerMiddleware(history), logger, thunk)
);

export default store;
