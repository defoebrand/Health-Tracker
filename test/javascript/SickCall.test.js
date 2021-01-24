import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

import store from '../../app/javascript/redux/store';

import SickCall from '../../app/javascript/containers/SickCall';

describe('rendered App', () => {
  let renderedComponent;

  beforeEach(() => {
    renderedComponent = render(
      <Provider store={store}>
        <SickCall />
      </Provider>,
    );
  });

  it('SickCall has a container with class App', () => {
    const { getByRole } = renderedComponent;
    const heading = getByRole('heading', { name: 'Triage Questionnaire coming soon!' });
    expect(heading).toBeInTheDocument();
  });
});
