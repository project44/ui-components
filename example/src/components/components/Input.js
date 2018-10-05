import React, {Component} from 'react';
import { Input } from 'ui-components';
import {Col, Divider, Row} from "antd";
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import {xonokai} from "react-syntax-highlighter/styles/prism/index";

export default class InputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Text Inputs</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
            Text Inputs are used for freeform data entry.
          </p>
          <section className="page-section">
            <h3 className="section-title">Base Text</h3>
            <p>
              A freeform text entry field including a label, placeholder text, helper text (if needed) and validation text and styling.
            </p>
            <p>
              This input element includes support for the following HTML5 types: text, password, number, email, url, search and tel.
            </p>
            <div className="example__render">
              <Input placeholder="Static Input with Placeholder Text" label="Label"></Input>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Input } from 'ui-components';\n
<Input placeholder="Static Input with Placeholder Text" label="Label"></Input>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <div className="example__render">
              <Input placeholder="Invalid Entry" label="Label" hasError={true} errorMessage="Validation Help Text"></Input>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Input } from 'ui-components';\n
<Input placeholder="Invalid Entry" label="Label"></Input>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">Search</h3>
            <p>
              A freeform text entry field including a label, placeholder text, and search icon or button
            </p>
            <h4 className="example-title">Super Search</h4>
            <p>
              This particular styling of the search bar is limited to the tracking landing page.
            </p>
            <div className="example__render">
              <Input search="super" placeholder="Super Search"></Input>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Input } from 'ui-components';\n
<Input search="super" placeholder="Super Search"></Input>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4 className="example-title">Primary Search</h4>
            <p>
              This search bar is for page level search actions. Typically seen in the page subheader.
            </p>
            <div className="example__render">
              <Input search="primary" placeholder="Primary Search"></Input>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Input } from 'ui-components';\n
<Input search="primary" placeholder="Primary Search"></Input>`}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h4 className="example-title">Secondary Search</h4>
            <p>
              This search bar is for searching within content sections or inline search scenarios.
            </p>
            <div className="example__render">
              <Input search="secondary" placeholder="Secondary Search"></Input>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {`import { Input } from 'ui-components';\n
<Input search="secondary" placeholder="Secondary Search"></Input>`}
              </SyntaxHighlighter>
            </div>
          </section>

        </div>
      </div>
    )
  }
}
