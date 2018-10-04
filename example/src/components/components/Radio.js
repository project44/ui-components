import React, {Component} from 'react';
import { Radio } from 'ui-components';
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import {xonokai} from "react-syntax-highlighter/styles/prism/index";

const radioData = [
  {label: 'test1', value: 'test1'},
  {label: 'test2', value: 'test2'},
]

export default class RadioDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Radio</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
            Selectable inputs to communicate that one thing is selected.
          </p>
          <section className="page-section">
            <h3 className="section-title">Checkbox</h3>
            <p>
              A selectable input that communicates if an option is true, false or indeterminate. Can be displayed horizontally or vertically or styled.
            </p>
            <h4 className="example-title">Horizontal</h4>
            <div className="example__render">
              <Radio radioData={radioData}></Radio>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Radio } from 'ui-components';\n
<Radio radioData={radioData}></Radio>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4 className="example-title">Vertical</h4>
            <div className="example__render">
              <Radio radioData={radioData} layout="column"></Radio>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Radio } from 'ui-components';\n
<Radio radioData={radioData} layout="column"></Radio>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">Styled Checkbox</h3>
            <p>A styled checkbox group that communicates an option is true or false. This example is specific to Multi-Modal Search Filter.</p>
            <div className="example__render">
              <Radio radioData={radioData} styled={true}></Radio>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Radio } from 'ui-components';
]
<Radio radioData={radioData} styled={true}></Radio>`}
              </SyntaxHighlighter>
            </div>
          </section>

        </div>
      </div>
    )
  }
}
