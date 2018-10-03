import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ltlIcon from '../../assets/images/mode-icons/ltl.svg';
import ltlIconSm from '../../assets/images/mode-icons/sm/ltl.svg';
import oceanIcon from '../../assets/images/mode-icons/ocean.svg';
import oceanIconSm from '../../assets/images/mode-icons/sm/ocean.svg';
import parcelIcon from '../../assets/images/mode-icons/parcel.svg';
import parcelIconSm from '../../assets/images/mode-icons/sm/parcel.svg';
import railIcon from '../../assets/images/mode-icons/rail.svg';
import railIconSm from '../../assets/images/mode-icons/sm/rail.svg';
import tlIcon from '../../assets/images/mode-icons/tl.svg';
import tlIconSm from '../../assets/images/mode-icons/sm/tl.svg';
import vltlIcon from '../../assets/images/mode-icons/vltl.svg';
import vltlIconSm from '../../assets/images/mode-icons/sm/vltl.svg';
import allIcon from '../../assets/images/mode-icons/sm/all-modes.svg';

class ShipmentModeIcon extends Component {
  getModeIcon = (mode, small) => {
    switch (mode) {
      case "LTL":
        return small ? ltlIconSm : ltlIcon;
      case "OCEAN":
        return small ? oceanIconSm : oceanIcon;
      case "PARCEL":
        return small ? parcelIconSm : parcelIcon;
      case "RAIL":
        return small ? railIconSm : railIcon;
      case "TL":
        return small ? tlIconSm : tlIcon;
      case "VLTL":
        return small ? vltlIconSm : vltlIcon;
      case "ALL":
        return allIcon;
      default:
        return tlIcon;
    }
  }

  getAltText = (mode) => {
    switch (mode) {
      case "LTL":
        return "LTL";
      case "OCEAN":
        return "Ocean";
      case "PARCEL":
        return "Parcel";
      case "RAIL":
        return "Rail";
      case "TL":
        return "Trucklaod";
      case "VLTL":
        return "VLTL";
      default:
        return "Unknown";
    }
  }

  render() {
    let { mode, small, ...props } = this.props;

    return (
      <img
        {...props}
        src={this.getModeIcon(mode, small)}
        alt={`${this.getAltText(mode)} Shipment`}
      />
    );
  }
}

ShipmentModeIcon.propTypes = {
  mode: PropTypes.string,
  small: PropTypes.bool
}

export default ShipmentModeIcon;
