import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';

import CarouselCard from '../components/CarouselCard';

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

  // it('has a container with class App', () => {
  //   const { getByRole } = renderedComponent;
  //   const tab = getByRole('tab', { name: 'My Friends' });
  //   expect(tab).toBeInTheDocument();
  // });
  //
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
