import React from "react";
import { shallow } from "enzyme";
import Radio from './Radio';

describe('Radio', () => {
  let props;
  let mountedComponent;
  const radioComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Radio {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(radioComponent).toBeTruthy()
  });
});
