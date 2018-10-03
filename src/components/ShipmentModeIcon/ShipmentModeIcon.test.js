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
  let mountedShipmentModeIcon;
  const shipmentModeIcon = () => {
    if (!mountedShipmentModeIcon) {
      mountedShipmentModeIcon = mount(
        <ShipmentModeIcon {...props} />
      );
    }
    return mountedShipmentModeIcon;
  }

  beforeEach(() => {
    props = {
      mode: undefined,
      small: undefined,
    };
    mountedShipmentModeIcon = undefined;
  });

  it('is truthy', () => {
    expect(ShipmentModeIcon).toBeTruthy()
  });

  it("always renders an img", () => {
    const imgTag = shipmentModeIcon().find("img");
    expect(imgTag.length).toBe(1);
  });
});
