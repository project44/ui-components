import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Chips } from 'ui-components';

const chipData = [
  'Lays',
  'Pringles',
  'Ruffles',
  'Cheetos',
  'Thins',
  'Doritos'
];

export default class ChipsDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chipData: chipData
    };
  }

  deleteChip = (index) => {
    this.setState({
      chipData: this.state.chipData.filter((_, i) => i !== index)
    });
  }

  render(){
    return (
      <ComponentShell>
        <h1>Chips</h1>
        <h2>Truncated</h2>
        <Chips listData={this.state.chipData} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>

        <h2>Row</h2>
        <Chips listData={this.state.chipData} layout="row" deleteFn={this.deleteChip}></Chips>

        <h2>Column</h2>
        <Chips listData={this.state.chipData} layout="column" deleteFn={this.deleteChip}></Chips>
      </ComponentShell>
    )
  }
}
