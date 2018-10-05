import _ from 'lodash'
import React, { Component } from 'react'
import ShipmentModeIcon from '../ShipmentModeIcon/ShipmentModeIcon';
import { Checkbox as AntCheckbox, Col, Row } from 'antd'
import './Checkbox.scss'

export default class Checkbox extends Component {

  render() {
    const { checkboxData, layout = 'row', styled, onChange } = this.props;

    return (
      <div className={styled ? 'checkbox-group styled' : 'checkbox-group'}>
        <Row className={styled && 'ant-checkbox-group'}>
          { checkboxData.map((item, index) => {
            if (layout === 'row') {
              return (
                <AntCheckbox key={index} value={_.get(item, 'value', item)} checked={_.get(item, 'checked', false)} onChange={onChange}>
                  { styled && item.value &&
                    <ShipmentModeIcon className="item-icon" mode={item.value} small={true} />
                  }
                  <span className="item-title">{_.get(item, 'label', item)}</span>
                </AntCheckbox>
            )
            } else {
              return <Col key={index}>
                <AntCheckbox key={index} value={_.get(item, 'value', item)} checked={_.get(item, 'checked', false)} onChange={onChange}>
                  { styled && item.value &&
                    <ShipmentModeIcon className="item-icon" mode={item.value} small={true} />
                  }
                  <span className="item-title">{_.get(item, 'label', item)}</span>
                </AntCheckbox>
              </Col>
            }
          })}
        </Row>
      </div>
    )
  }
}
