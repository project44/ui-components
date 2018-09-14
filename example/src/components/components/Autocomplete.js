import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Autocomplete } from 'ui-components';
import { Chips } from 'ui-components';

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
    console.log(this.state.selectedChips)
    this.setState({
      selectedChips: this.state.selectedChips.filter((_, i) => i !== index)
    });
  }

  handleSearch = (value, from) => {
    console.log(value, from)
  }

  handleSelect = (value) => {
      this.setState({
        selectedChips: [...this.state.selectedChips, this.state.dataSource[value] ? this.state.dataSource[value] : value]
      });
  }

  render(){
    return (
      <ComponentShell>
        <h1>Autocomplete</h1>
        <Autocomplete
          dataSource={this.state.dataSource}
          placeholder="Sample autocomplete"
          label="Sample autocomplete"
          onSearch={(value)=> this.handleSearch(value, 'onsearch')}
          showSearch={true}
          onSelect={(value)=> this.handleSelect(value)}
        ></Autocomplete>
        <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>
      </ComponentShell>
    )
  }
}
