import _ from 'lodash';
import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ShipmentModeIcon from '../ShipmentModeIcon/ShipmentModeIcon';
import { Radio as AntRadio, Col } from 'antd';
import './Radio.scss';

export default class Radio extends Component {
  static propTypes = {
    radioData: PropTypes.array,
    layout: PropTypes.string,
    styled: PropTypes.bool,
    block: PropTypes.bool,
    modeIcons: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    value: PropTypes.string
  }

  render() {
    const {
      radioData,
      layout = 'row',
      styled = false,
      block = false,
      onChange = null,
      value,
      className,
      modeIcons = false
    } = this.props;

    return (
      <AntRadio.Group
        className={classNames('radio-group', className, {
          'styled': styled,
          'block': block
        })}
        value={value}
        buttonStyle='solid'
        onChange={onChange}
      >
        {radioData.map((item, index) => {
          if (layout === 'row') {
            if (styled) {
              return (
                <AntRadio.Button key={item.value} value={_.get(item, 'value', item)}>
                  {modeIcons && (
                    <ShipmentModeIcon className='item-icon' mode={item.value} small={true} />
                  )}
                  <span className='item-title'>{_.get(item, 'label', item)}</span>
                </AntRadio.Button>
              );
            } else {
              return (
                <AntRadio key={index} value={_.get(item, 'value', item)}>
                  <span className='item-title'>{_.get(item, 'label', item)}</span>
                </AntRadio>
              );
            }
          } else {
            if (styled) {
              return (
                <Col key={index}>
                  <AntRadio.Button key={item.value} value={_.get(item, 'value', item)}>
                    <span className='item-title'>{_.get(item, 'label', item)}</span>
                  </AntRadio.Button>
                </Col>
              );
            } else {
              return (
                <Col key={index}>
                  <AntRadio key={item.value} value={_.get(item, 'value', item)}>
                    <span className='item-title'>{_.get(item, 'label', item)}</span>
                  </AntRadio>
                </Col>
              );
            }
          }
        })}
      </AntRadio.Group>
    );
  }
}
