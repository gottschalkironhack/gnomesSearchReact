import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './storeConfig/configureStore';
import { history } from './storeConfig/history';
import 'core-js/fn/array/find';
import 'react-app-polyfill/ie11';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
