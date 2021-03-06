import React from "react";
import { shallow } from "enzyme";
import Autocomplete from './Autocomplete';

describe('Autocomplete', () => {
  let props;
  let mountedComponent;
  const autocompleteComponent = () => {
    if (!mountedComponent) {
      mountedComponent = shallow(
        <Autocomplete {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(autocompleteComponent).toBeTruthy()
  });
});
