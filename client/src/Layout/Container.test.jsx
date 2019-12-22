import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

it('renders children when passed in', () => {
  const wrapper = shallow((
      <Container>
          <div className="unique" />
      </Container>
  ));
  expect(wrapper.contains(<div className="unique" />)).toBe(true);
});