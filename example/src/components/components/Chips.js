import React, {Component} from 'react';
import ComponentShell from '../common/ComponentShell';
import { Chips } from 'ui-components';

const chipData = [
  'Jet',
  'fuel',
  'cant',
  'melt',
  'steel',
  'beams'
];

export default class ChipsDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chipData: chipData
    };

  }

  deleteChip = (index) => {
    console.log(this.state.chipData)
    const updatedChips = this.state.chipData.slice(index, 1);
    console.log('updated', updatedChips)
    this.setState({
      chipData: updatedChips
    });
  }

  render(){
    return (
      <ComponentShell>
        <h1>Chips</h1>
        <Chips listData={this.state.chipData} deleteFn={this.deleteChip}></Chips>
      </ComponentShell>
    )
  }
}
