import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '../redux/store';

import App from '../containers/App';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <React.StrictMode>
        <HashRouter basename="/">
          <Provider store={store}>
            <App />
          </Provider>
        </HashRouter>
      </React.StrictMode>,
    );
  });

  it('has a div with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('div');
    // expect(appElement.classList).toContain('App');
    expect(appElement.classList).toContain('App');
  });
});
