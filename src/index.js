import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './redux/configureStore';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
