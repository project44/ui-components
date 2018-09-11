import React from 'react';
import { Link } from 'react-router-dom';
// import { Button as AntButton } from 'antd';
// import Button as AntButton from 'antd/lib/button';
import './Button.scss';

const Button = (props) => {
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
  } = props;

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
          {props.children}
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
          {props.children}
        </button>
      </label>
    );
  } else {
    return (
      <button
        className={`custom-button ${className}`}
        disabled={disabled}
        onClick={clickFn}
        onBlur={blurFn}
        type={type}
        download={download}
        component={download ? 'a' : 'button'}
        href={href}
      >
        {props.children}
      </button>
    );
  }

};

export default Button;
