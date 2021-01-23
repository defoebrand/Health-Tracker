import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';

import CommunityCard from '../components/CommunityCard';

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
