import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as AntButton } from 'antd';
import styled from 'styled-components';
import { shade } from 'polished';
import { ThemeContext, defaultThemeShape } from '../../styles/theme';

import './Button.scss';

const StyledButton = styled(AntButton)`
  &.p44-btn {
    &--primary {
      background-color: ${props => props.theme && props.theme.primaryColor};
      &:hover,
      &:focus {
        background-color: ${props => shade(0.2)(props.theme.primaryColor)};
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    theme: PropTypes.shape(defaultThemeShape),
  };

  static contextType = ThemeContext;

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
          <StyledButton
            theme={this.context}
            className={classNames(className, {
              'p44-btn': type === 'default',
              'p44-btn--primary': type === 'primary',
              'p44-btn--secondary': type === 'secondary',
              'p44-btn--destructive': type === 'destructive',
              'p44-btn--destructive-text': type === 'destructive-text',
              lg: size === 'lg',
              med: size === 'med',
              sm: size === 'sm',
              xsm: size === 'xsm',
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
          theme={this.props.theme || this.context}
          className={classNames(className, {
            'p44-btn': type === 'default',
            'p44-btn--primary': type === 'primary',
            'p44-btn--secondary': type === 'secondary',
            'p44-btn--destructive': type === 'destructive',
            'p44-btn--destructive-text': type === 'destructive-text',
            lg: size === 'lg',
            med: size === 'med',
            sm: size === 'sm',
            xsm: size === 'xsm',
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
