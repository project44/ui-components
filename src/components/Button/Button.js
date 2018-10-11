import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as AntButton } from 'antd';
import './Button.scss';

class Button extends Component {
  static propTypes = {
    upload: PropTypes.bool,
    download: PropTypes.bool,
    clickFn: PropTypes.func,
    blurFn: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string
  }

  render() {
    const {
      className,
      clickFn,
      blurFn,
      upload,
      download = false,
      type = 'default', // default, primary, secondary, destructive
      size = 'med',
      ...props
    } = this.props;

    if (upload) {
      return (
        <label htmlFor={upload}>
          <AntButton
            className={classNames(className, {
              'p44-btn': type === 'default',
              'p44-btn--primary': type === 'primary',
              'p44-btn--secondary': type === 'secondary',
              'p44-btn--destructive': type === 'destructive',
              'p44-btn--destructive-text': type === 'destructive-text',
              'lg': size === 'lg',
              'med': size === 'med',
              'sm': size === 'sm',
              'xsm': size === 'xsm'
            })}
            onClick={clickFn}
            onBlur={blurFn}
          >
            {this.props.children}
          </AntButton>
        </label>
      );
    } else {
      return (
        <AntButton
          {...props}
          className={classNames(className, {
            'p44-btn': type === 'default',
            'p44-btn--primary': type === 'primary',
            'p44-btn--secondary': type === 'secondary',
            'p44-btn--destructive': type === 'destructive',
            'p44-btn--destructive-text': type === 'destructive-text',
            'lg': size === 'lg',
            'med': size === 'med',
            'sm': size === 'sm',
            'xsm': size === 'xsm'
          })}
          onClick={clickFn}
          onBlur={blurFn}
          download={download}
        >
          {this.props.children}
        </AntButton>
      );
    }
  }
};

export default Button;
