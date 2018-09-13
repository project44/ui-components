import React, { Component } from 'react';
import { Input as AntInput } from 'antd';
import './Input.scss';

export default class Input extends Component {

  // static propTypes = {
  //   listData: PropTypes.array.required
  // }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { label, placeholder, custom } = this.props;

    return (
      <div className="input-group">
        <label>{label}</label>
        <AntInput
          placeholder={placeholder}
          {...custom}
        >
          {this.props.children}
        </AntInput>
      </div>

    )
  }
};

