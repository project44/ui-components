import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
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
      <ComponentShell name="Chips">
        <h4>Truncated Chips</h4>
        <Chips listData={this.state.chipData} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>
        <Divider />
        <h4>Chips Row</h4>
        <Chips listData={this.state.chipData} layout="row" deleteFn={this.deleteChip}></Chips>
        <Divider />
        <h4>Chips Column</h4>
        <Chips listData={this.state.chipData} layout="column" deleteFn={this.deleteChip}></Chips>
        <Divider />
      </ComponentShell>
    )
  }
}
