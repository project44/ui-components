// import ExampleComponent from './'
//
// describe('ExampleComponent', () => {
//   it('is truthy', () => {
//     expect(ExampleComponent).toBeTruthy()
//   })
// })
import React from "react";
import { mount } from "enzyme";
import ShipmentModeIcon from './ShipmentModeIcon';

describe('ShipmentModeIcon', () => {
  let props;
  let mountedComponent;
  const shipmentModeIconComponent = () => {
    if (!mountedComponent) {
      mountedComponent = mount(
        <ShipmentModeIcon {...props} />
      );
    }
    return mountedComponent;
  }

  beforeEach(() => {
    props = {
      mode: undefined,
      small: undefined,
    };
    mountedComponent = undefined;
  });

  it('is truthy', () => {
    expect(shipmentModeIconComponent).toBeTruthy()
  });

  it("always renders an img", () => {
    const imgTag = shipmentModeIconComponent().find("img");
    expect(imgTag.length).toBe(1);
  });
});
