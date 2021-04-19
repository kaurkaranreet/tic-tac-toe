import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import "../setupTests";
import Box from './Box';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
describe("Test Box component ", () => {
  
  let wrapper;
  let onClick = jest.fn();
  beforeEach(() => {
    wrapper = mount(<Box value={'X'} onClick={() => onClick()} />);
  });

  it("should render Box component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render prop", () => {
    //const wrapper = shallow(<Box value={'X'} />);
    const text = wrapper.find('#box-button');
    console.log('text ', text);
    expect(text.text()).toEqual('X');
  });
  
  it('should call parent component method passed as prop', () => {
    const button = wrapper.find('#box-button');
    button.simulate('click');
    expect(onClick.mock.calls.length).toEqual(1);
  });
});