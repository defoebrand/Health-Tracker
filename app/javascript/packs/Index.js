import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from '../components/App';

// import store from './redux/store';

// import './styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter basename="/">
          <App />
      </HashRouter>
    </React.StrictMode>,
    document.body.appendChild(document.createElement('div')),
  )
})

