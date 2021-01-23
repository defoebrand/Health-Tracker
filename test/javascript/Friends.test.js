import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import Friends from '../../app/javascript/containers/Friends';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Friends />
      </Provider>,
    );
  });

  it('Friends has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const tablist = getByRole('tablist', { name: '' });
    expect(tablist).toBeInTheDocument();
  });
});
