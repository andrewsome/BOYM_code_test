import React from 'react';
import { shallow } from 'enzyme';
import Setting from './Setting';
import { Provider } from "react-redux";
import store from '../../store/store';

describe('<Setting />', () => {

  it("should render without throwing an error", () => {
    expect(
      shallow(
        <Provider store={store}>
          <Setting />
        </Provider>
      ).exists()
    ).toBe(true);
  });
});