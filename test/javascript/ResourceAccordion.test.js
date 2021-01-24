import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import ResourceAccordion from '../../app/javascript/components/ResourceAccordion';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <ResourceAccordion />
      </Provider>,
    );
  });

  it('ResourceAccordion has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const button = getByRole('button', { name: 'Visit Now' });
    expect(button).toBeInTheDocument();
  });
});
