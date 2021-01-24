import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import LineChart from '../../app/javascript/charts/line.rechart';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <LineChart />
      </Provider>,
    );
  });

  it('LineChart has a container with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('.recharts-wrapper');
    expect(appElement).toBeInTheDocument();
  });

  it('LineChart has a container with class App', () => {
    const { container } = renderedComponent;
    const appElement = container.querySelector('svg');
    expect(appElement.classList).toContain('recharts-surface');
  });
});
