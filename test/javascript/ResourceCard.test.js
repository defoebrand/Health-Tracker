import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import ResourceCard from '../../app/javascript/components/ResourceCard';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <ResourceCard />
      </Provider>,
    );
  });

  it('ResourceCard has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const img = getByRole('img', { name: '' });
    expect(img).toBeInTheDocument();
  });
});
