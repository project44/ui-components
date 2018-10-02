import React, {Component} from 'react';
import { Select, MultiSelect, Autocomplete, Chips } from 'ui-components';
import { Icon } from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import {xonokai} from "react-syntax-highlighter/styles/prism/index";
import ComponentShell from "../common/ComponentShell";

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

  render() {
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Select</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
            Select dropdowns that allow the user to select one or more items from a list.
          </p>
          <section className="page-section">
            <h3 className="section-title">Select Input</h3>
            <p>
              p44's Select component is an extension of the <a href="https://ant.design/components/select/" target="_blank">Ant Select Component <Icon type="link" theme="outlined" /></a>
              , thus you have full access to their Select <a href="https://ant.design/components/select/#API" target="_blank">API <Icon type="link" theme="outlined" /></a>.
            </p>
            <h4>Standard Single Select</h4>
            <p>Standard select dropdown allows users to select a single option from the list.</p>
            <div className="example__render">
              <Select
                dataSource={this.state.dataSource}
                placeholder="Standard Select"
                label="Standard Select"
              >
              </Select>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Select } from 'ui-components';\n
<Select
  dataSource={this.state.dataSource}
  placeholder="Standard Select"
  label="Standard Select"
>
</Select>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4>Type-Ahead Single Select</h4>
            <p> A select dropdown that allows the user to search through the list by typing. The list will filter with items that contain the string entered.</p>
            <div className="example__render">
              <Select
                dataSource={this.state.dataSource}
                placeholder="Type-Ahead Single Select"
                label="Type-Ahead Select"
                showSearch={true}
              >
              </Select>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Select } from 'ui-components';\n
<Select
  dataSource={this.state.dataSource}
  placeholder="Type-Ahead Single Select"
  label="Type-Ahead Select"
  showSearch={true}
>
</Select>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4>Multi-Select Input</h4>
            <p>
              p44's Multi-Select component is an extension of the <a href="https://ant.design/components/select/" target="_blank">Ant Select Component <Icon type="link" theme="outlined" /></a>
              , thus you have full access to their Select <a href="https://ant.design/components/select/#API" target="_blank">API <Icon type="link" theme="outlined" /></a>.
            </p>
            <p className="font-bold">Standard Multi-Select</p>
            <p>Standard Multi-Select  dropdown allows users to select a multiple options from the list and populates selected items in a chip display below the input.</p>
            <div className="example__render">
              <MultiSelect
                value={this.state.selectedChips}
                dataSource={this.state.dataSource}
                placeholder="Select Multiple"
                label="Standard Multi-Select"
                onChange={(value) => this.handleChange(value)}
                open={this.state.open}
                allowSearch={false}
              >
              </MultiSelect>
              <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { MultiSelect } from 'ui-components';\n
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
<Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <p className="font-bold">Type-Ahead Multi-Select</p>
            <p>Type-Ahead Multi-Select dropdown allows users to select a multiple options from the list and populates selected items in a chip display below the input.</p>
            <div className="example__render">
              <MultiSelect
                value={this.state.selectedChips}
                dataSource={this.state.dataSource}
                placeholder="Select Multiple"
                label="Type-Ahead Multi-Select"
                onChange={(value) => this.handleChange(value)}
                open={this.state.open}
              >
              </MultiSelect>
              <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { MultiSelect } from 'ui-components';\n
<MultiSelect
  value={this.state.selectedChips}
  dataSource={this.state.dataSource}
  placeholder="Select Multiple"
  label="Sample multi-select dropdown"
  onChange={(value) => this.handleChange(value)}
  open={this.state.open}
>
</MultiSelect>
<Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <p className="font-bold">Type-Ahead Multi-Select with Auto-Close</p>
            <div className="example__render">
              <MultiSelect
                value={this.state.selectedChips}
                dataSource={this.state.dataSource}
                placeholder="Select Multiple"
                label="Type-Ahead Multi-Select"
                onChange={(value) => this.handleChange(value)}
                open={this.state.open}
                closeOnSelect={true}
              >
              </MultiSelect>
              <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { MultiSelect } from 'ui-components';\n
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
<Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <p className="font-bold">Auto-Complete Select Input with Chips</p>
            <div className="example__render">
              <Autocomplete
                value={this.state.selectedChips}
                dataSource={this.state.dataSource}
                placeholder="Start typing"
                label="Auto-Complete Select Input"
                onChange={(value) => this.handleChange(value)}
                open={this.state.open}
              >
              </Autocomplete>
              <Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Autocomplete } from 'ui-components';\n
<Autocomplete
  value={this.state.selectedChips}
  dataSource={this.state.dataSource}
  placeholder="Start typing"
  label="Auto-Complete Select Input"
  onChange={(value) => this.handleChange(value)}
  open={this.state.open}
>
</Autocomplete>
<Chips listData={this.state.selectedChips} showCount={3} layout="row" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

        </div>
      </div>
    )
  }
}
