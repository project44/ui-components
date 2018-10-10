import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Radio.scss';
import { Radio as AntRadio, Col } from 'antd';
import _ from 'lodash';

export default class Radio extends Component {
  static propTypes = {
    radioData: PropTypes.obj,
    layout: PropTypes.string,
    styled: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string
  }

  render() {
    const { radioData, layout = 'row', styled = false, onChange, value } = this.props;

    return (
      <AntRadio.Group className={styled ? 'radio-group styled' : 'radio-group'} value={value} buttonStyle='solid' onChange={onChange}>
        { radioData.map((item, index) => {
          if (layout === 'row') {
            if (styled) {
              return (
                <AntRadio.Button key={index} value={_.get(item, 'value', item)}>
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
                  <AntRadio.Button key={index} value={_.get(item, 'value', item)}>
                    <span className='item-title'>{_.get(item, 'label', item)}</span>
                  </AntRadio.Button>
                </Col>
              );
            } else {
              return (
                <Col key={index}>
                  <AntRadio key={index} value={_.get(item, 'value', item)}>
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
