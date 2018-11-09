import React from "react";
import { shallow } from "enzyme";
import DateRange from './DateRange';

describe('DateRange', () => {
  let props;
  let mountedComponent;
  const dateRangeComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <DateRange {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(dateRangeComponent).toBeTruthy()
  });
});
