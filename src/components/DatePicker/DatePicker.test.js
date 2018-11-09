import React from "react";
import { shallow } from "enzyme";
import DatePicker from './DatePicker';

describe('DatePicker', () => {
  let props;
  let mountedComponent;
  const datePickerComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <DatePicker {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(datePickerComponent).toBeTruthy()
  });
});
