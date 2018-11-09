import React from "react";
import { shallow } from "enzyme";
import Chips from './Chips';

describe('Chips', () => {
  let props;
  let mountedComponent;
  const chipsComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Chips {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(chipsComponent).toBeTruthy()
  });
});
