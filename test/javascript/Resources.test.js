import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import Resources from '../../app/javascript/containers/Resources';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Resources />
      </Provider>,
    );
  });

  it('Resources has a container with class App', () => {
    const { getAllByRole } = renderedComponent;
    const link = getAllByRole('link', { name: 'Visit Now' });
    expect(link[0]).toBeInTheDocument();
  });
});
