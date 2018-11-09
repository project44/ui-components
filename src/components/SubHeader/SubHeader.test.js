import React from "react";
import { shallow } from "enzyme";
import SubHeader from './SubHeader';

describe('SubHeader', () => {
  let props;
  let mountedComponent;
  const subHeaderComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <SubHeader {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(subHeaderComponent).toBeTruthy()
  });
});
