import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow((<App />));
  });

  it('renders children when passed in', () => {
    expect(wrapper.exists()).toBe(true);
  });

});