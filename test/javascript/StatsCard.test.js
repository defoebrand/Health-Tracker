import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import StatsCard from '../../app/javascript/components/StatsCard';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <StatsCard />
      </Provider>,
    );
  });

  it('StatsCard has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const heading = getByRole('heading', { name: '' });
    expect(heading).toBeInTheDocument();
  });
});
