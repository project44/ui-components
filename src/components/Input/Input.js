import React, { Component } from 'react';
import { Input as AntInput } from 'antd';
import './Input.scss';

export default class Input extends Component {

  render() {
    const { label, placeholder, custom, defaultValue, onPressEnter, onBlur, onChange } = this.props;

    return (
      <div className="input-group">
        { label &&
          <div className="ant-form-item-label">
            <label title={label}>{label}</label>
          </div>
        }
        <AntInput
          placeholder={placeholder}
          defaultValue={defaultValue}
          onPressEnter={onPressEnter}
          onChange={onChange}
          onBlur={onBlur}
          {...custom}
        >
          {this.props.children}
        </AntInput>
      </div>
    )
  }
};

