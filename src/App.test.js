import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import "./setupTests";
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { findWinner } from './gameUtils';
configure({ adapter: new Adapter() });

describe("Test App component ", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("should render App component", () => {
    expect(wrapper).toBeDefined();
  });

  it("should render child component GameBoard ", () => {
    const text = wrapper.find('GameBoard');
    expect(text).toBeDefined();
  });

  it("should render initial status ", () => {
    const status = wrapper.find('#status');
    expect(status.text()).toEqual("Next player: X");
  });

  it('Returns no winner for empty board', () => {
    const result = findWinner(
      [
        null, null, null,
        null, null, null,
        null, null, null,
      ]
    );
    expect(result).toEqual(null);
  });

  it('Returns X as winner', () => {
    const result = findWinner(
      [
        null, null, 'X',
        'X', 'O', 'X',
        null, 'O', 'X',
      ]
    )
    expect(result).toEqual('X');
  });

  it('Returns O as winner', () => {
    const result = findWinner(
      [
        null, null, 'O',
        'X', 'X', 'O',
        null, 'X', 'O',
      ]
    )
    expect(result).toEqual('O');
  });

});
