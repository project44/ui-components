import React from "react";
import { shallow } from "enzyme";
import Checkbox from './Checkbox';

describe('Checkbox', () => {
  let props;
  let mountedComponent;
  const checkboxComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Checkbox {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(checkboxComponent).toBeTruthy()
  });
});
