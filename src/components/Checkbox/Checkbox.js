import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ShipmentModeIcon from '../ShipmentModeIcon/ShipmentModeIcon';
import { Checkbox as AntCheckbox, Col, Row } from 'antd';
import './Checkbox.scss';

export default class Checkbox extends Component {
  static propTypes = {
    checkboxData: PropTypes.array,
    layout: PropTypes.string,
    styled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    theme: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string
  }

  render() {
    const { label, name, value, checkboxData, layout = 'row', styled = false, theme = 'dark', onChange, className = null } = this.props;

    return (
      <div className={classNames('checkbox-group', className, {
        'styled': styled,
        'dark': theme === 'dark',
        'light': theme === 'light'
      })}>
        <Row className={classNames({ 'ant-checkbox-group': styled })}>
          {checkboxData.map((item, index) => {
            if (layout === 'row') {
              return (
                <AntCheckbox key={item.key || index} value={_.get(item, 'value', item)} checked={_.get(item, 'checked', false)} onChange={onChange}>
                  {styled && item.value &&
                    <ShipmentModeIcon className='item-icon' mode={item.value} small={true} />
                  }
                  <span className='item-title'>{_.get(item, 'label', item)}</span>
                </AntCheckbox>
              );
            } else {
              return (
                <Col key={index}>
                  <AntCheckbox key={item.key || index} value={_.get(item, 'value', item)} checked={_.get(item, 'checked', false)} onChange={onChange}>
                    {styled && item.value &&
                      <ShipmentModeIcon className='item-icon' mode={item.value} small={true} />
                    }
                    <span className='item-title'>{_.get(item, 'label', item)}</span>
                  </AntCheckbox>
                </Col>
              );
            }
          })}
        </Row>
      </div>
    );
  }
}
