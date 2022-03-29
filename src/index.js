import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './redux/configureStore';
import App from './App';

render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
