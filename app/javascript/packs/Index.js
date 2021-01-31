import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '../redux/store';

import App from '../containers/App';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/stylesheets/application.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <HashRouter basename="/">
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>,
    document.getElementById('root'),
  );
});
