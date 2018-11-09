import React from "react";
import { shallow } from "enzyme";
import Select from './Select';

describe('Select', () => {
  let props;
  let mountedComponent;
  const selectComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Select {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(selectComponent).toBeTruthy()
  });
});
