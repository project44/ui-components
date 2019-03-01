import _ from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Radio as AntRadio, Col } from 'antd';
import styled from 'styled-components';
import { rgba } from 'polished';

import ShipmentModeIcon from '../ShipmentModeIcon/ShipmentModeIcon';
import { ThemeContext } from '../../styles/theme';

const StyledRadioGroup = styled(AntRadio.Group)`
  &.block {
    display: flex;
    background-color: #f3f3f3;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);

    > label {
      flex: 1;
      text-align: center;
      color: #aba9a8;
      background-color: transparent !important;

      &.ant-radio-button-wrapper-checked {
        background-color: ${props => rgba(props.theme.primaryColor, 0.13)} !important;
        border-color: #d5d4d4 !important;
        color: #575451 !important;
      }
    }
  }
  &.styled {
    color: #575451;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;

    .ant-radio-button-wrapper {
      height: auto !important;

      &.ant-radio-button-wrapper-checked {
        background-color: ${props => rgba(props.theme.primaryColor, 0.13)} !important;
        border-color: inherit;
        color: #575451;
        box-shadow: none;

        span:nth-child(2) {
          opacity: 1;
        }
      }

      &:hover {
        color: #575451;

        span:nth-child(2) {
          opacity: 1;
        }
      }

      span:nth-child(2) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
        padding: 6px 0;
        opacity: 0.5;
        transition: all 150ms linear;
      }

      .item-icon {
        height: 15px;
        position: relative;
        margin-top: 8px;
        z-index: 1;
      }

      .item-title {
        display: block;
        align-self: center;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.25;
        text-transform: uppercase;
        color: #575451;
        z-index: 1;
        position: relative;
        margin-top: 4px;
      }
    }
  }
`;
export default class Radio extends Component {
  static propTypes = {
    radioData: PropTypes.array,
    layout: PropTypes.string,
    styled: PropTypes.bool,
    block: PropTypes.bool,
    modeIcons: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string,
  };

  static contextType = ThemeContext;

  render() {
    const {
      radioData,
      layout = 'row',
      styled = false,
      block = false,
      onChange = null,
      value,
      className,
      modeIcons = false,
    } = this.props;

    return (
      <StyledRadioGroup
        className={classNames('radio-group', className, {
          styled: styled,
          block: block,
        })}
        value={value}
        buttonStyle="solid"
        onChange={onChange}
        theme={this.context}
      >
        {radioData.map((item, index) => {
          if (layout === 'row') {
            if (styled) {
              return (
                <AntRadio.Button key={item.value} value={_.get(item, 'value', item)}>
                  {modeIcons && <ShipmentModeIcon className="item-icon" mode={item.value} small />}
                  <span className="item-title">{_.get(item, 'label', item)}</span>
                </AntRadio.Button>
              );
            } else {
              return (
                <AntRadio key={index} value={_.get(item, 'value', item)}>
                  <span className="item-title">{_.get(item, 'label', item)}</span>
                </AntRadio>
              );
            }
          } else {
            if (styled) {
              return (
                <Col key={index}>
                  <AntRadio.Button key={item.value} value={_.get(item, 'value', item)}>
                    <span className="item-title">{_.get(item, 'label', item)}</span>
                  </AntRadio.Button>
                </Col>
              );
            } else {
              return (
                <Col key={index}>
                  <AntRadio key={item.value} value={_.get(item, 'value', item)}>
                    <span className="item-title">{_.get(item, 'label', item)}</span>
                  </AntRadio>
                </Col>
              );
            }
          }
        })}
      </StyledRadioGroup>
    );
  }
}
