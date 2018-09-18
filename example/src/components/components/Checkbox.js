import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Checkbox } from 'ui-components';
import {Divider, Icon} from "antd";

const checkboxData = [
  {label: 'test1', value: 'test1'},
  {label: 'test2', value: 'test2'},
]

export default class CheckboxDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render(){
    return (
      <ComponentShell name="Checkbox">
        <h2>Checkbox Example</h2>
        <Divider />
        <h4>Checkbox Row</h4>
        <Checkbox checkboxData={checkboxData}></Checkbox>
        <Divider />
        <h4>Checkbox Column</h4>
        <Checkbox checkboxData={checkboxData} layout="column"></Checkbox>
        <Divider />
      </ComponentShell>
    )
  }
}
