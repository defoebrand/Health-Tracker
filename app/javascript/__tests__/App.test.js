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

  it('has a container with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.App');
    expect(appElement).toBeInTheDocument();
  });

  it('has a container with class HeaderNav', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.HeaderNav');
    expect(appElement).toBeInTheDocument();
  });

  it('has a div with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('nav');
    expect(appElement.classList).toContain('navbar');
  });

  it('has an h2 element with text Health Tracker', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('h2');
    expect(appElement.textContent).toContain('Health Tracker');
  });

  it('has a container with class signInBtn', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.signInBtn');
    expect(appElement).toBeInTheDocument();
  });

  it('has anchor element with text Register Now!', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('a');
    expect(appElement.textContent).toContain('Register Now!');
  });

  it('has a container with class imageContainer', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.imageContainer');
    expect(appElement).toBeInTheDocument();
  });

  it('has a div with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('img');
    expect(appElement.alt).toContain('First slide');
  });

  it('has a footer with class Footer', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('footer');
    expect(appElement.classList).toContain('Footer');
  });
});
