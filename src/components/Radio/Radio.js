import React, { Component } from 'react'
import './Radio.scss'
import { Radio as AntRadio, RadioGroup, Col } from 'antd'
import _ from 'lodash'

export default class Radio extends Component {

  render() {
    const { radioData, layout = 'row', styled = false, onChange } = this.props;

    return (
      <AntRadio.Group className={styled ? 'radio-group styled' : 'radio-group'} buttonStyle="solid" onChange={onChange}>
        { radioData.map((item, index) => {
          if (layout === 'row') {
            return styled ?
            <AntRadio.Button key={index} value={_.get(item, 'value', item)}>
              <span className="item-title">{_.get(item, 'value', item)}</span>
            </AntRadio.Button> :
            <AntRadio key={index} value={_.get(item, 'value', item)}>
              <span className="item-title">{_.get(item, 'value', item)}</span>
            </AntRadio>
          } else {
            return <Col key={index}>
              <AntRadio key={index} value={_.get(item, 'value', item)}>
                <span className="item-title">{_.get(item, 'value', item)}</span>
              </AntRadio>
            </Col>
            return styled ?
            <Col key={index}>
              <AntRadio.Button key={index} value={_.get(item, 'value', item)}>
                <span className="item-title">{_.get(item, 'value', item)}</span>
              </AntRadio.Button>
            </Col> :
            <Col key={index}>
              <AntRadio key={index} value={_.get(item, 'value', item)}>
                <span className="item-title">{_.get(item, 'value', item)}</span>
              </AntRadio>
            </Col>
          }
        })}
      </AntRadio.Group>
    )
  }
}
