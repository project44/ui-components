import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Input as AntInput } from 'antd';
import { shade }from 'polished';
import styled from 'styled-components';

import defaultTheme, { defaultThemeShape } from '../../styles/defaultTheme';

const StyledInput = styled.div`
  width: 100%;

  .has-error .ant-form-explain, .has-error .ant-form-split {
    font-size: 11px;
    margin-top: 0;
  }
  input:focus {
    border: 1px solid #3f789e;
  }
  .has-error input:focus {
    border: 1px solid #ff4d4f;
  }
  .super button, .primary button {
    background-color: ${props => props.theme.primaryColor};
    border-color: ${props => props.theme.primaryColor};
  }
  .super button:hover, .primary button:hover {
    background-color: ${props => shade(.2)(props.theme.primaryColor)};
    border-color: ${props => shade(.2)(props.theme.primaryColor)};
  }
  .super {
    input {
      background-color: var(--primary-grey-05);
      color: var(--primary-grey-80);
      border: none;
    }
  }
  .primary {
    input {
      background-color: #ffffff;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.5);
      border: none;
    }
  }
  input {
    &.ant-input-lg {
      font-size: 14px;
    }
  }
  .ant-btn-lg {
    height: 48px;
  }
`;

export default class Input extends Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onSearch: PropTypes.func,
    size: PropTypes.string,
    search: PropTypes.string,
    onPressEnter: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    hasError: PropTypes.bool,
    errorMessage: PropTypes.string,
    type: PropTypes.string,
    custom: PropTypes.object,
    theme: PropTypes.shape(defaultThemeShape),
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }

  static defaultProps = {
    theme: defaultTheme
  }

  render() {
    const {
      label,
      placeholder,
      defaultValue,
      onSearch,
      size,
      search,
      onPressEnter,
      onBlur,
      onChange,
      hasError,
      errorMessage,
      type,
      theme,
      custom
    } = this.props;

    return (
      <StyledInput theme={theme}>
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
                type={type}
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
                type={type}
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
      </StyledInput>
    );
  }
}
