import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import "../setupTests";
import GameBoard from './GameBoard';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("Test GameBoard component ", () => {
    let wrapper;
    const squares = Array(9).fill(null);
    let onClick = jest.fn();
    beforeEach(() => {
      wrapper = mount(<GameBoard squares={squares} onClick={() => onClick()} />);
    });
  
    it("should render GameBoard component", () => {
      expect(wrapper).toBeDefined();
    });

    it("should render child component Box ", () => {
      const text = wrapper.find('Box');
      expect(text).toBeDefined();
    });
  });