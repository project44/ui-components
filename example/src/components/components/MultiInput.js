import React, { Component } from 'react';
import { MultiInput } from 'ui-components';
import EmailValidator from 'email-validator';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism/index';

const exampleOne = `import { MultiInput } from 'ui-components';

<MultiInput placeholder="example placeholder" />`;

const exampleTwo = `import { MultiInput } from 'ui-components';
import EmailValidator from 'email-validator';

onChange = (values) => {
  this.setState({
    values,
  });
}

<MultiInput
  placeholder="example placeholder"
  onChange={this.onChange}
  validator={EmailValidator.validate}
/>

<div>
  {this.state.values.map(value => (
    <div key={value}>{value}</div>
  ))}
</div>
`;

export default class MultiInputDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleTwoValues: [],
    };
  }

  onExampleTwoChange = values => {
    this.setState({
      exampleTwoValues: values,
    });
  };

  render() {
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Multi Input</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
            Multi Text Inputs are used for freeform data entry. They produce chips on enter or a space.
          </p>
          <section className="page-section">
            <h3 className="section-title">Freeform Input</h3>
            <p>
              MultiInput takes in freeform text that transforms into chips. It returns an array of strings on change.
            </p>
            <div className="example__render">
              <MultiInput placeholder="example placeholder" />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {exampleOne}
              </SyntaxHighlighter>
            </div>
          </section>

          <section className="page-section">
            <h3 className="section-title">With custom validator</h3>
            <p>MultiInput allows for a custom validator to be passed in.</p>
            <div className="example__render">
              <MultiInput
                placeholder="example placeholder"
                validator={EmailValidator.validate}
                onChange={this.onExampleTwoChange}
              />
            </div>
            <div className="example__render vertical-spacing">
              {this.state.exampleTwoValues.map(value => (
                <div key={value}>{value}</div>
              ))}
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {exampleTwo}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
