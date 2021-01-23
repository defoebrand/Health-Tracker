import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import CommunityCard from '../../app/javascript/components/CommunityCard';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <CommunityCard />
      </Provider>,
    );
  });

  it('CommunityCard has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const button = getByRole('button', { name: '' });
    expect(button).toBeInTheDocument();
  });
});
