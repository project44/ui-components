import React, { Component } from 'react'
import './Checkbox.scss'
import { Checkbox as AntCheckbox, Col } from 'antd'
import _ from 'lodash'

export default class Checkbox extends Component {

  render() {
    const { checkboxData, layout = 'row', styled, onChange } = this.props;
    console.log(checkboxData)
    return (
      <div className={styled ? 'checkbox-group styled' : 'checkbox-group'}>
        <AntCheckbox.Group onChange={onChange}>
          { checkboxData.map((item, index) => {
            if (layout === 'row') {
              return <AntCheckbox key={index} value={_.get(item, 'value', item)}>

                { styled && item.icon &&
                  <img className="item-icon" src={item.icon} />
                }
                <span className="item-title">{_.get(item, 'value', item)}</span>
              </AntCheckbox>
            } else {
              return <Col key={index}>
                <AntCheckbox key={index} value={_.get(item, 'value', item)}>
                  { styled && item.icon &&
                  <img className="item-icon" src={item.icon} />
                  }
                  <span className="item-title">{_.get(item, 'value', item)}</span>
                </AntCheckbox>
              </Col>
            }
          })}
        </AntCheckbox.Group>
      </div>
    )
  }
}
