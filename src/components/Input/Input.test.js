import React from "react";
import { shallow } from "enzyme";
import Input from './Input';

describe('Input', () => {
  let props;
  let mountedComponent;
  const inputComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Input {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(inputComponent).toBeTruthy()
  });
});
