import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { MultiSelect } from 'ui-components';
import { Chips } from 'ui-components';

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

    return (
      <ComponentShell>
        <h1>Multi-Select DropDown</h1>
        <h2>Standard Multi-Select</h2>
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
        <h2>Standard Multi-Select no search</h2>
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
        <h2>Multi-Select with auto-close dropdown</h2>
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
      </ComponentShell>
    )
  }
}
