import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox as AntCheckbox, Col, Row } from 'antd';
import styled from 'styled-components';
import ShipmentModeIcon from '../ShipmentModeIcon/ShipmentModeIcon';
import { ThemeContext, defaultThemeShape } from '../../styles/theme';

import './Checkbox.scss';

const StyledCheckbox = styled.div`
  .ant-checkbox-wrapper {
    margin: 2px 0;
    .ant-checkbox {
      .ant-checkbox-inner {
        background-color: transparent;
      }

      &.ant-checkbox-checked .ant-checkbox-inner {
        background-color: ${props => (props.mode === 'dark' ? props.theme.primaryColor : 'var(--white)')};
        border-color: ${props => (props.mode === 'dark' ? props.theme.primaryColor : 'var(--white)')};
        &::after {
          border-color: ${props => (props.mode === 'dark' ? 'var(--white)' : props.theme.primaryColor)};
        }
      }
    }
    .item-title {
      color: ${props => (props.mode === 'dark' ? 'var(--primary-grey-80);' : 'var(--white)')};
    }
  }
  .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${props => (props.mode === 'dark' ? props.theme.primaryColor : 'var(--white)')};
  }
`;

export default class Checkbox extends Component {
  static propTypes = {
    checkboxData: PropTypes.array,
    layout: PropTypes.string,
    styled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    mode: PropTypes.string,
    theme: PropTypes.shape(defaultThemeShape),
  };

  static contextType = ThemeContext;

  render() {
    const { checkboxData, layout = 'row', styled = false, mode = 'dark', onChange, className = null } = this.props;

    return (
      <StyledCheckbox
        mode={mode}
        theme={this.props.theme || this.context}
        className={classNames('checkbox-group', className, {
          styled: styled,
        })}
      >
        <Row className={classNames({ 'ant-checkbox-group': styled })}>
          {checkboxData.map((item, index) => {
            if (layout === 'row') {
              return (
                <AntCheckbox
                  key={item.key || index}
                  value={_.get(item, 'value', item)}
                  checked={_.get(item, 'checked', false)}
                  onChange={onChange}
                >
                  {styled && item.value && <ShipmentModeIcon className="item-icon" mode={item.value} small />}
                  <span className="item-title">{_.get(item, 'label', item)}</span>
                </AntCheckbox>
              );
            } else {
              return (
                <Col key={index}>
                  <AntCheckbox
                    key={item.key || index}
                    value={_.get(item, 'value', item)}
                    checked={_.get(item, 'checked', false)}
                    onChange={onChange}
                  >
                    {styled && item.value && <ShipmentModeIcon className="item-icon" mode={item.value} small />}
                    <span className="item-title">{_.get(item, 'label', item)}</span>
                  </AntCheckbox>
                </Col>
              );
            }
          })}
        </Row>
      </StyledCheckbox>
    );
  }
}
