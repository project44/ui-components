import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';
import RCColorPicker from 'rc-color-picker';

import 'rc-color-picker/assets/index.css';
import './ColorPicker.scss';

export default class ColorPicker extends Component {
  static propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
    onChangeComplete: PropTypes.func,
  }

  static getDerivedStateFromProps(state, props) {
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
      isOpen: false,
      color: props.color,
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.state.isOpen && this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({
        isOpen: false,
      });
    }
  }

  togglePicker = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  onChange = (color) => {
    this.setState({
      color: color.hex
    });
    if (this.props.onChange) {
      this.props.onChange(color.hex);
    }
  }

  onChangeComplete = (color) => {
    if (this.props.onChangeComplete) {
      this.props.onChangeComplete(color.hex);
    }
  }

  render() {
    return (
      <div>
        <div className={'p44-color-picker'} ref={this.setWrapperRef}>
          <div className={'picker-button'} onClick={this.togglePicker}>
            <div className={'picker-color'} style={{ backgroundColor: this.state.color }}/>
          </div>
          {this.state.isOpen &&
          <div className={'picker-wrapper'}>
            <ChromePicker
              disableAlpha
              color={this.props.color}
              onChange={this.onChange}
              onChangeComplete={this.onChangeComplete}
            />
          </div>
          }
        </div>
        <RCColorPicker enableAlpha={false}><span className="rc-color-picker-trigger picker-button" /></RCColorPicker >
      </div>
    );
  }
}
