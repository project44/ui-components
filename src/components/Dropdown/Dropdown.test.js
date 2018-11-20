import React from "react";
import { shallow } from "enzyme";
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  let props;
  let mountedComponent;
  const dropdownComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Dropdown {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(dropdownComponent).toBeTruthy()
  });
});
