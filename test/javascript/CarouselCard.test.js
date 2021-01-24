import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import CarouselCard from '../../app/javascript/components/CarouselCard';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <CarouselCard />
      </Provider>,
    );
  });

  it('CarouselCard has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const img = getByRole('img', { name: 'First slide' });
    expect(img).toBeInTheDocument();
  });
});
