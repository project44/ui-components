import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Input } from 'ui-components';

export default class InputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render(){
    return (
      <ComponentShell>
        <h1>Input</h1>
        <Input placeholder="Sample input"></Input>

      </ComponentShell>
    )
  }
}
