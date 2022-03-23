import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";

/**
 * Redux
 */
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleWare from "redux-saga";
import reducers from "./reducers";
import rootSaga from "./sagas";

/**
 * Axios main configuration
 */
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "https://rem-rest-api.herokuapp.com/api";
/**
 * If axios fails
 * axios.defaults.baseURL =  'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api'
 */

/**
 * Redux Configuration
 */

const sagaMiddleWare = createSagaMiddleWare();
const store = createStore(reducers, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
