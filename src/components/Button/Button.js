import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as AntButton } from 'antd';
import styled from 'styled-components';
import { shade }from 'polished';

import defaultTheme, { defaultThemeShape } from '../../styles/defaultTheme';

import './Button.scss';

const StyledButton = styled(AntButton)`
  &.p44-btn {
    &--primary {
      background-color: ${props => props.theme && props.theme.primaryColor};
      &:hover, &:focus {
        background-color: ${props => shade(.2)(props.theme.primaryColor)};
      }
    }
  }
`;

class Button extends Component {
  static propTypes = {
    upload: PropTypes.bool,
    download: PropTypes.bool,
    clickFn: PropTypes.func,
    blurFn: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    className: PropTypes.string,
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
      className,
      clickFn,
      blurFn,
      upload,
      download = false,
      type = 'default', // default, primary, secondary, destructive
      size = 'med',
      theme,
      ...props
    } = this.props;

    if (upload) {
      return (
        <label htmlFor={upload}>
          <StyledButton
            theme={theme}
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
            {...props}
          >
            {this.props.children}
          </StyledButton>
        </label>
      );
    } else {
      return (
        <StyledButton
          theme={theme}
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
          {...props}
        >
          {this.props.children}
        </StyledButton>
      );
    }
  }
}

export default Button;
