import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { MultiSelect } from 'ui-components';
import { Chips } from 'ui-components';
import {Divider, Icon} from "antd";

const chipData = [
  'Lays',
  'Pringles',
  'Ruffles',
  'Cheetos',
  'Thins',
  'Doritos'
];

export default class MultiSelectDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: chipData,
      selectedChips: []
    };
  }

  deleteChip = (index) => {
    this.setState({
      selectedChips: this.state.selectedChips.filter((_, i) => i !== index)
    });
  }

  handleChange = (values) => {
    this.setState({
      selectedChips: values,
    })
  }

  render(){
    const componentDescription = <p>
      p44's Multi-Select component is an extension of the <a href="https://ant.design/components/select/" target="_blank">Ant Select Component <Icon type="link" theme="outlined" /></a>
      , thus you have full access to their Select <a href="https://ant.design/components/select/#API" target="_blank">API <Icon type="link" theme="outlined" /></a>.
    </p>

    return (
      <ComponentShell name="Multi-Select" description={componentDescription}>

        <h2>Multi-Select Example</h2>
        <Divider />
        <h4>Multi-Select with search</h4>
        <p>Allows users to filter results using a search input.</p>
        <MultiSelect
          value={this.state.selectedChips}
          dataSource={this.state.dataSource}
          placeholder="Select Multiple"
          label="Sample multi-select dropdown"
          onChange={(value) => this.handleChange(value)}
          open={this.state.open}
        >
        </MultiSelect>
        <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}>
        </Chips>
        <Divider />
        <h4>Multi-Select no search</h4>
        <p>Users may only select from the dropdown list.</p>
        <MultiSelect
          value={this.state.selectedChips}
          dataSource={this.state.dataSource}
          placeholder="Select Multiple"
          label="Sample multi-select dropdown"
          onChange={(value) => this.handleChange(value)}
          open={this.state.open}
          allowSearch={false}
        >
        </MultiSelect>
        <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}>
        </Chips>
        <Divider />
        <h4>Multi-Select with auto-close dropdown</h4>
        <p>Dropdown closes on option selection.</p>
        <MultiSelect
          value={this.state.selectedChips}
          dataSource={this.state.dataSource}
          placeholder="Select Multiple"
          label="Sample multi-select dropdown"
          onChange={(value) => this.handleChange(value)}
          open={this.state.open}
          closeOnSelect={true}
        >
        </MultiSelect>
        <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}>
        </Chips>
        <Divider />
      </ComponentShell>
    )
  }
}
