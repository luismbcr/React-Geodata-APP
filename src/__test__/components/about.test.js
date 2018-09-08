import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/about';

test('Should render About Component', () => {
  const wrapper = shallow(<About />);
  expect(wrapper).toMatchSnapshot();
});
