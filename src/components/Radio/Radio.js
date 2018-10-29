import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Radio.scss';
import { Radio as AntRadio, Col } from 'antd';
import _ from 'lodash';

export default class Radio extends Component {
  static propTypes = {
    radioData: PropTypes.array,
    layout: PropTypes.string,
    styled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    const { radioData, layout = 'row', styled = false, block = false, onChange = null, value } = this.props;
    return (
      <AntRadio.Group
        className={classNames('radio-group', {
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
