import React from "react";
import { shallow } from "enzyme";
import Popover from './Popover';

describe('Popover', () => {
  let props;
  let mountedComponent;
  const popoverComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Popover {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(popoverComponent).toBeTruthy()
  });
});
