import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '../redux/store';

import HeaderNav from '../components/HeaderNav';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <HashRouter basename="/">
        <Provider store={store}>
          <HeaderNav />
        </Provider>
      </HashRouter>,
    );
  });

  it('HeaderNav has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const navigation = getByRole('navigation', { name: '' });
    expect(navigation).toBeInTheDocument();
  });

  // it('has a container with class App', () => {
  //   const { getByRole } = renderedComponent;
  //   const tab = getByRole('tab', { name: 'My Friends' });
  //   expect(tab).toBeInTheDocument();
  // });
  //
  // it('has a container with class App', () => {
  //   const { getByRole } = renderedComponent;
  //   const tab = getByRole('tab', { name: 'My Communities' });
  //   expect(tab).toBeInTheDocument();
  // });
  //
  // it('has a container with class App', () => {
  //   const { getByRole } = renderedComponent;
  //   const tab = getByRole('tab', { name: 'All Communities' });
  //   expect(tab).toBeInTheDocument();
  // });
  //
  // it('has a container with class App', () => {
  //   const { getByRole } = renderedComponent;
  //   const heading = getByRole('heading', { name: 'Members:' });
  //   expect(heading).toBeInTheDocument();
  // });
  //
  // it('has a container with class App', () => {
  //   const { getByRole } = renderedComponent;
  //   const button = getByRole('button', { name: 'Join Community' });
  //   expect(button).toBeInTheDocument();
  // });
});
