import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ToastContainer />
      <App />
    </Provider>
  </BrowserRouter>
);
