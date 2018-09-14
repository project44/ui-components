import React, { Component } from 'react'
import './Checkbox.scss';
import { Checkbox as AntCheckbox, Row, Col} from 'antd';
import _ from 'lodash';

export default class Checkbox extends Component {

  render() {
    const { checkboxData, layout = 'row', onChange } = this.props;

    return (
      <div className="checkbox-group">
        <AntCheckbox.Group onChange={onChange}>
            { checkboxData.map((item, index) => {
              if (layout === 'row'){
                return <AntCheckbox key={index} value={_.get(item, 'value', item)}>{_.get(item, 'value', item)}</AntCheckbox>
              } else {
                return <Col key={index}>
                  <AntCheckbox value={item.value}>{item.label}</AntCheckbox>
                </Col>
              }
            })}
        </AntCheckbox.Group>
      </div>
    )
  }
};

