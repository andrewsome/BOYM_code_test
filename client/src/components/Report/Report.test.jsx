import React from 'react';
import { shallow } from 'enzyme';
import Report from './Report';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { get_rotated_result } from './calculation';

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

  // it('ignores eggs that not in machine', () => {
  //   const result = {
  //     number_of_eggs: 5,
  //     rotation_amount: 0.25,
  //     sequence: '1 7 4 6',
  //   };
  //   get_rotated_result(result)

  //   expect();
  // })
  // it('ignores eggs that already rotated one full rotation', () => {})
});