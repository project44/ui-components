import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Select } from 'ui-components';

const chipData = [
  'Lays',
  'Pringles',
  'Ruffles',
  'Cheetos',
  'Thins',
  'Doritos'
];

export default class SelectDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: chipData
    };
  }

  render() {
    return (
      <ComponentShell>
        <h1>Single Select Dropdown</h1>
        <h2>Standard Single Select</h2>
        <Select
          dataSource={this.state.dataSource}
          placeholder="Sample dropdown"
          label="Sample dropdown"
        >
        </Select>
        <h2>Search Single Select</h2>
        <Select
          dataSource={this.state.dataSource}
          placeholder="Sample dropdown"
          label="Sample dropdown"
          showSearch={true}
        >
        </Select>
      </ComponentShell>
    )
  }
}
