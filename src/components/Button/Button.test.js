import React from "react";
import { shallow } from "enzyme";
import Button from './Button';

describe('Button', () => {
  let props;
  let mountedComponent;
  const buttonComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Button {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(buttonComponent).toBeTruthy()
  });
});
