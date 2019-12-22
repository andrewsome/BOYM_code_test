import React from 'react';
import { shallow } from 'enzyme';
import GenerateReport from './GenerateReport';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('<GenerateReport />', () => {
  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <GenerateReport />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  
});