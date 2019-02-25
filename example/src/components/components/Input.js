import React, { Component } from 'react';
import { Input, TextArea } from 'ui-components';
import SyntaxHighlighter from "react-syntax-highlighter/prism";
import { xonokai } from "react-syntax-highlighter/styles/prism/index";

const textAreaExampleOne = `
import { TextArea } from 'ui-components';

onTextAreaChange = (event) => {
  this.setState({
    textAreaValue: event.target.value
  });
}

<TextArea value={this.state.textAreaValue} onChange={this.onTextAreaChange} />`;

const textAreaExampleTwo = `
import { TextArea } from 'ui-components';

onTextAreaChange = (event) => {
  this.setState({
    textAreaValue: event.target.value
  });
}

<TextArea
  charLimit={250}
  value={this.state.textAreaValue}
  onChange={this.onTextAreaChange}
/>`;

const textAreaExampleThree = `
import { TextArea } from 'ui-components';

onTextAreaChange = (event) => {
  this.setState({
    textAreaValue: event.target.value
  });
}

<TextArea
  charLimit={250}
  label="Example Label"
  placeholder="Example Placeholder"
  autosize={{ minRows: 4, maxRows: 4 }}
  value={this.state.textAreaValue} onChange={this.onTextAreaChange}
/>`;

const textAreaExampleFour = `
import { TextArea } from 'ui-components';

onTextAreaChange = (event) => {
  this.setState({
    textAreaValue: event.target.value
  });
}

<TextArea
  autosize={{ minRows: 6, maxRows: 8 }}
  value={this.state.textAreaValue}
  onChange={this.onTextAreaChange}
/>`;

export default class InputDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textAreaValueOne: '',
      textAreaValueTwo: '',
      textAreaValueThree: '',
      textAreaValueFour: ''
    };
  }

  onTextAreaChangeOne = (event) => {
    this.setState({
      textAreaValueOne: event.target.value
    });
  }

  onTextAreaChangeTwo = (event) => {
    this.setState({
      textAreaValueTwo: event.target.value
    });
  }

  onTextAreaChangeThree = (event) => {
    this.setState({
      textAreaValueThree: event.target.value
    });
  }

  onTextAreaChangeFour = (event) => {
    this.setState({
      textAreaValueFour: event.target.value
    });
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

          <section className="page-section">
            <h3 className="section-title">Text Area</h3>
            <p>
              TextArea is used for multi line text input.
            </p>
            <h4 className="example-title">Basic Text Area</h4>
            <div className="example__render">
              <TextArea value={this.state.textAreaValueOne} onChange={this.onTextAreaChangeOne} />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {textAreaExampleOne}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="example-title">Text Area with Character Limit</h3>
            <p>
              Character limit is used to limit the number of characters a user can enter.
            </p>
            <div className="example__render">
              <TextArea charLimit={250} value={this.state.textAreaValueTwo} onChange={this.onTextAreaChangeTwo} />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {textAreaExampleTwo}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="example-title">Text Area with Label</h3>
            <p>
             A label is used to describe a Text Area. If label and character limit are used together, the character limit will show in the same line as the label.
            </p>
            <div className="example__render">
              <TextArea placeholder="Example Placeholder" charLimit={250} label="Example Label" autosize={{ minRows: 4, maxRows: 4 }} value={this.state.textAreaValueThree} onChange={this.onTextAreaChangeThree} />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {textAreaExampleThree}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="example-title">Text Area using autosize</h3>
            <p>
             Autosize can restrict the size of the Text Area.
            </p>
            <div className="example__render">
              <TextArea autosize={{ minRows: 6, maxRows: 8 }} value={this.state.textAreaValueFour} onChange={this.onTextAreaChangeFour} />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {textAreaExampleFour}
              </SyntaxHighlighter>
            </div>
          </section>

        </div>
      </div>
    );
  }
}
