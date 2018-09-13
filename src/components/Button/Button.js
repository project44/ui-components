import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button as AntButton } from 'antd';
import './Button.scss';

class Button extends Component {
  render() {
    const {
      className,
      link,
      upload,
      href,
      clickFn,
      disabled = false,
      blurFn,
      type = 'default',
      download = false,
      htmlType = 'button'
    } = this.props;

    if (link) {
      return (
        <Link to={link} className="custom-button-link">
          <button
            className={`custom-button ${className}`}
            disabled={disabled}
            onClick={clickFn}
            onBlur={blurFn}
            type={type}
            download={download}
            >
              {this.props.children}
            </button>
          </Link>
        );
      } else if (upload) {
        return (
          <label htmlFor={upload}>
            <button
              className={`custom-button ${className}`}
              disabled={disabled}
              onClick={clickFn}
              onBlur={blurFn}
              type={type}
              variant="raised"
              component="span"
              >
                {this.props.children}
              </button>
            </label>
          );
        } else if (!this.props.children) {
          return (
            <AntButton />
          )
        } else {
          return (
              <AntButton
                className={`custom-button ${className}`}
                disabled={disabled}
                onClick={clickFn}
                onBlur={blurFn}
                type={"primary"}
                download={download}
                href={href}
              >
                {this.props.children}
              </AntButton>
            );
          }
  }

};

export default Button;
