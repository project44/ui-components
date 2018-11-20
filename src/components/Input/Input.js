import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input as AntInput } from 'antd';
import './Input.scss';

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    custom: PropTypes.string,
    defaultValue: PropTypes.string,
    onSearch: PropTypes.func,
    size: PropTypes.string,
    search: PropTypes.string,
    onPressEnter: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string
  }

  render() {
    const { 
      label, 
      placeholder, 
      custom, 
      defaultValue, 
      onSearch, 
      size, 
      search, 
      onPressEnter, 
      onBlur, 
      onChange, 
      hasError, 
      errorMessage 
    } = this.props;

    return (
      <div className='input-group'>
        <div className={classNames('ant-form-vertical ant-form-item-control-wrapper', {
          'w-full': search === 'primary'
        })}>
          <div 
            className={classNames('ant-form-item-control', {
              'has-error': hasError,
              'has-feedback': hasError
            })}
          >
            {label &&
              <div className='ant-form-item-label'>
                <label title={label}>{label}</label>
              </div>
            }
            {search &&
              <AntInput.Search
                className={search}
                placeholder={placeholder}
                defaultValue={defaultValue}
                onPressEnter={onPressEnter}
                onSearch={onSearch}
                onChange={onChange}
                onBlur={onBlur}
                enterButton={search === 'super' || search === 'primary'}
                size={search === 'super' || search === 'primary' || search === 'secondary' ? 'large' : size}
                {...custom}
              >
                {this.props.children}
              </AntInput.Search>
            }
            {!search &&
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
            {hasError &&
              <div className='ant-form-explain'>{errorMessage}</div>
            }
          </div>
        </div>
      </div>
    );
  }
};
