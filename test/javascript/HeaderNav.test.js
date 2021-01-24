import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import store from '../../app/javascript/redux/store';

import HeaderNav from '../../app/javascript/components/HeaderNav';

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
});
