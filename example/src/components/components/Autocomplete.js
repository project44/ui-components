import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Autocomplete } from 'ui-components';
import { Chips } from 'ui-components';
import {Divider} from "antd";

const chipData = [
  'Lays',
  'Pringles',
  'Ruffles',
  'Cheetos',
  'Thins',
  'Doritos'
];

export default class AutocompleteDemo extends Component {

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
      <ComponentShell name="Autocomplete">
        <h2>Autocomplete Example</h2>
        <Divider />
        <h4>Autocomplete with chips</h4>
        <Autocomplete
          value={this.state.selectedChips}
          dataSource={this.state.dataSource}
          placeholder="Sample autocomplete"
          label="Sample autocomplete"
          onChange={(value) => this.handleChange(value)}
          open={this.state.open}
        >
        </Autocomplete>
        <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}>
        </Chips>
        <Divider />
      </ComponentShell>
    )
  }
}
