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
