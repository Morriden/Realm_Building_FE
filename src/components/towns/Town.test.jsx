import React from 'react';
import { shallow } from 'enzyme';
import Town from './Town';

describe('Town component', () => {
  it('renders Town', () => {
    const wrapper = shallow(<Town 
      name="Drexlor"
      food={4}
      law={3}
      population={3}
      production={4}
      traffic={2}
      location="river"
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
