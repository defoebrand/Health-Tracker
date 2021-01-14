import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';

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

