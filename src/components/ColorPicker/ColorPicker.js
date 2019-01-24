import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RCColorPicker from 'rc-color-picker';

import { ChevronDown } from '../Icons';
import 'rc-color-picker/assets/index.css';
import './ColorPicker.scss';

export default class ColorPicker extends Component {
  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
    placement: PropTypes.string,
  }

  static getDerivedStateFromProps(props, state) {
    if (state.color !== props.color) {
      return {
        ...state,
        color: props.color
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      color: props.color,
    };
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  onChange = (color) => {
    this.setState({
      color: color.color
    });
    if (this.props.onChange) {
      this.props.onChange(color.color);
    }
  }

  openColorPicker = () => {
    if (this.wrapperRef && this.wrapperRef.open) {
      this.wrapperRef.open();
    }
  }

  render() {
    return (
      <div className="p44-color-picker-wrapper" onClick={this.openColorPicker}>
        <RCColorPicker
          ref={this.setWrapperRef}
          enableAlpha={false}
          onChange={this.onChange}
          color={this.state.color}
          placement={this.props.placement}
        >
          <div className="p44-color-picker" />
        </RCColorPicker>
        <ChevronDown className="p44-chevron-down-icon" />
      </div>
    );
  }
}
