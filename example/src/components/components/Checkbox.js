import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Checkbox } from 'ui-components';

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
      <ComponentShell>
        <h1>Checkbox</h1>
        <Checkbox checkboxData={checkboxData}></Checkbox>

      </ComponentShell>
    )
  }
}
