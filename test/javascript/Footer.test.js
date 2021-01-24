import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import Footer from '../../app/javascript/components/Footer';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <Footer />
      </Provider>,
    );
  });

  it('Footer has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const contentinfo = getByRole('contentinfo', { name: '' });
    expect(contentinfo).toBeInTheDocument();
  });
});
