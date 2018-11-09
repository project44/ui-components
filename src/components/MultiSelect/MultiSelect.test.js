import React from "react";
import { shallow } from "enzyme";
import MultiSelect from './MultiSelect';

describe('MultiSelect', () => {
  let props;
  let mountedComponent;
  const multiSelectComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <MultiSelect {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(multiSelectComponent).toBeTruthy()
  });
});
