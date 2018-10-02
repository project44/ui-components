import React, {Component} from 'react';
import { Select } from 'ui-components';
import { Icon } from 'antd';
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import {xonokai} from "react-syntax-highlighter/styles/prism/index";

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
            <div className="component__usage">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Button } from 'ui-components';\n
<Select
  dataSource={this.state.dataSource}
  placeholder="Standard Select"
  label="Standard Select"
>
</Select>`}
              </SyntaxHighlighter>
            </div>
          </section>
          <div className="example__render">
            <Select
              dataSource={this.state.dataSource}
              placeholder="Search Select"
              label="Search Select"
              showSearch={true}
            >
            </Select>
          </div>
          <div className="component__usage">
            <SyntaxHighlighter language='jsx' style={xonokai}>
              {`import { Button } from 'ui-components';\n
 <Select
  dataSource={this.state.dataSource}
  placeholder="Search Select"
  label="Search Select"
  showSearch={true}
>
</Select>`}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    )
  }
}
