import React from "react";
import { shallow } from "enzyme";
import StickyNav from './StickyNav';

describe('StickyNav', () => {
  let props;
  let mountedComponent;
  const stickyNavComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <StickyNav {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(stickyNavComponent).toBeTruthy()
  });
});
