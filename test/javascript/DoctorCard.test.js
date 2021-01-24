import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import DoctorCard from '../../app/javascript/components/DoctorCard';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <DoctorCard />
      </Provider>,
    );
  });

  it('DoctorCard has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const img = getByRole('img', { name: '' });
    expect(img).toBeInTheDocument();
  });
});
