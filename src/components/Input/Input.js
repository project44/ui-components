import React, { Component } from 'react';
import { Input as AntInput } from 'antd';
import './Input.scss';

export default class Input extends Component {

  render() {
    const { label, placeholder, custom, defaultValue, onSearch, size, search = 'primary', onPressEnter, onBlur, onChange } = this.props;

    return (
      <div className="input-group">
        { label &&
          <div className="ant-form-item-label">
            <label title={label}>{label}</label>
          </div>
        }
        { search &&
        <AntInput.Search
          className={search}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onPressEnter={onPressEnter}
          onSearch={onSearch}
          onChange={onChange}
          onBlur={onBlur}
          enterButton={ search === 'super' || search === 'primary'}
          size={ search === 'super' || search === 'primary' || search === 'secondary' ? 'large' : size}
          {...custom}
        >
          {this.props.children}
        </AntInput.Search>
        }
        { !search &&
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
        }
      </div>
    )
  }
};

