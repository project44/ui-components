import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Input } from 'ui-components';
import {Divider} from "antd";

export default class InputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render(){
    return (
      <ComponentShell name="Input">
        <h2>Input Example</h2>
        <Divider />
        <h4>Basic Input</h4>
        <Input placeholder="Sample input" label="Sample input"></Input>
        <Divider />
      </ComponentShell>
    )
  }
}
