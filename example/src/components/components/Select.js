import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Select } from 'ui-components';
import {Divider, Icon} from "antd";

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
    const componentDescription = <p>
      p44's Select component is an extension of the <a href="https://ant.design/components/select/" target="_blank">Ant Select Component <Icon type="link" theme="outlined" /></a>
      , thus you have full access to their Select <a href="https://ant.design/components/select/#API" target="_blank">API <Icon type="link" theme="outlined" /></a>.
    </p>

    return (
      <ComponentShell name="Single Select Dropdown" description={componentDescription}>
        <h2>Select Example</h2>
        <Divider />
        <h4>Standard Single Select</h4>
        <p>Users may only select from the dropdown list.</p>
        <Select
          dataSource={this.state.dataSource}
          placeholder="Sample dropdown"
          label="Sample dropdown"
        >
        </Select>
        <Divider />
        <h4>Search Single Select</h4>
        <p>Allows users to filter results using a search input.</p>
        <Select
          dataSource={this.state.dataSource}
          placeholder="Sample dropdown"
          label="Sample dropdown"
          showSearch={true}
        >
        </Select>
        <Divider />
      </ComponentShell>
    )
  }
}
