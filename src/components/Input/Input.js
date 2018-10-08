import React, { Component } from 'react';
import { Input as AntInput } from 'antd';
import './Input.scss';

export default class Input extends Component {

  render() {
    const { label, placeholder, custom, defaultValue, onSearch, size, search, onPressEnter, onBlur, onChange, hasError, errorMessage } = this.props;

    return (
      <div className="input-group">
        <div className="ant-form-vertical ant-form-item-control-wrapper">
          <div className={ hasError ? 'has-feedback has-error ant-form-item-control' : 'ant-form-item-control' }>
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
            { hasError &&
              <div className="ant-form-explain">{errorMessage}</div>
            }
          </div>
        </div>
      </div>
    )
  }
};