import React from 'react';
import { shallow } from 'enzyme';
import Report from './Report';
import { Provider } from 'react-redux';
import store from '../../store/store';

describe('<Report />', () => {

  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Report />
        </Provider>
      ).exists()
    ).toBe(true);
  });

});