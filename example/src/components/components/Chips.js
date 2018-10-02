import React, {Component} from 'react';
import { Chips } from 'ui-components';
import {Row, Col} from "antd";
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
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Chips</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
            Chips are used to indicate that something has been selected and a variable has been applied.
          </p>
          <section className="page-section">
            <h3 className="section-title">Removable Chip</h3>
            <p>
              These can be removed or “unapplied” by clicking the “x” icon. These chips can be displayed horizontally or vertically and with a truncated view.
            </p>
            <h4 className="example-title">Horizontal</h4>
            <div className="example__render">
              <Chips listData={this.state.chipData} layout="row" deleteFn={this.deleteChip}></Chips>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Chips } from 'ui-components';\n
 <Chips listData={this.state.chipData} layout="row" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4 className="example-title">Vertical</h4>
            <div className="example__render">
              <Chips listData={this.state.chipData} layout="column" deleteFn={this.deleteChip}></Chips>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Chips } from 'ui-components';\n
 <Chips listData={this.state.chipData} layout="column" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4 className="example-title">Truncated</h4>
              <Row>
                <Col span={12}>
                  <div className="example__render">
                    <Chips listData={this.state.chipData} showCount={4} layout="row" deleteFn={this.deleteChip}></Chips>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="example__render">
                    <Chips listData={this.state.chipData} showCount={4} layout="column" deleteFn={this.deleteChip}></Chips>
                  </div>
                </Col>
              </Row>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Chips } from 'ui-components';\n
<Chips listData={this.state.chipData} showCount={4} layout="row" deleteFn={this.deleteChip}></Chips>
<Chips listData={this.state.chipData} showCount={4} layout="column" deleteFn={this.deleteChip}></Chips>`}
              </SyntaxHighlighter>
            </div>
          </section>

        </div>
      </div>
    )
  }
}
