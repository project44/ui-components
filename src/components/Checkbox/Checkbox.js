import React, { Component } from 'react'
import './Checkbox.scss';
import { Checkbox as AntCheckbox, Row, Col} from 'antd';

export default class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
    };
  }
  // label, value, disabled
  //
  // labelText(pin): "Running Early"
  // propertyName(pin): "runningEarly"
  // checked(pin): true
  // id(pin): 0
  //
  // openSunday(pin): false
  // openMonday(pin): true
  // openTuesday(pin): true
  // openWednesday(pin): true
  // openThursday(pin): true
  // openFriday(pin): true
  // openSaturday(pin): false

  // "On Time"
  // 1
  //   :
  //   "Running Early"

  render() {
    const { checkboxData, layout = 'row', onChange } = this.props;

    return (
      <div className="checkbox-group">
        <AntCheckbox.Group style={{ width: '100%' }} onChange={onChange}>
          <Row>
            { checkboxData.map((item, index) => {
              if (layout === 'row'){
                return <Row><AntCheckbox value={item.value}>{item.label}</AntCheckbox></Row>
              } else {
                return <Col><AntCheckbox value={item.value}>{item.label}</AntCheckbox></Col>
              }
            })}
          </Row>
        </AntCheckbox.Group>
      </div>
    )
  }
};

