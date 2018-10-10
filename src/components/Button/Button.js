import React, { Component } from 'react';
import { Button as AntButton } from 'antd';
import './Button.scss';

class Button extends Component {
  render() {
    const {
      className,
      clickFn,
      blurFn,
      upload,
      download = false,
      ...props
    } = this.props;

    if (upload) {
      return (
        <label htmlFor={upload}>
          <AntButton
            className={className ? `p44-btn ${className}` : `p44-btn`}
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
          className={className ? `p44-btn ${className}` : `p44-btn`}
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
