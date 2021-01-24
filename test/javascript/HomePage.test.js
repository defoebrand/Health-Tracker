import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import HomePage from '../../app/javascript/containers/HomePage';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
    );
  });

  it('HomePage has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const link = getByRole('link', { name: 'DefoeBrand' });
    expect(link).toBeInTheDocument();
  });
});
