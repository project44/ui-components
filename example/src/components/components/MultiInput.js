import React, { Component } from 'react';
import { MultiInput } from 'ui-components';
import EmailValidator from 'email-validator';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism/index';

const exampleOne = `import { MultiInput } from 'ui-components';

<MultiInput placeholder="example placeholder" label="Example Label" />`;

/*const exampleTwo = `import { MultiInput } from 'ui-components';

<MultiInput placeholder="example placeholder" minRows={2} maxRows={4} />`;*/

const exampleThree = `import { MultiInput } from 'ui-components';
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
      exampleThreeValues: [],
    };
  }

  onExampleThreeChange = values => {
    this.setState({
      exampleThreeValues: values,
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
            Multi Text Inputs are used for freeform data entry. They produce chips on blur, enter, tab, or a space. If
            the entry ends with a comma or semicolon it will be removed from the chip since those are common delimiters.
          </p>
          <section className="page-section">
            <h3 className="section-title">Freeform Input</h3>
            <p>
              MultiInput takes in freeform text that transforms into chips. It returns an array of strings on change.
            </p>
            <div className="example__render">
              <MultiInput placeholder="example placeholder" label="Example Label" />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {exampleOne}
              </SyntaxHighlighter>
            </div>
          </section>

          {/*<section className="page-section">
            <h3 className="section-title">With max rows set</h3>
            <p>MultiInput allows for a custom number of rows it can grow too. It defaults to 1.</p>
            <div className="example__render">
              <MultiInput placeholder="example placeholder" minRows={2} maxRows={4} />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {exampleTwo}
              </SyntaxHighlighter>
            </div>
    </section>*/}

          <section className="page-section">
            <h3 className="section-title">With custom validator</h3>
            <p>MultiInput allows for a custom validator to be passed in.</p>
            <div className="example__render">
              <MultiInput
                placeholder="example placeholder"
                validator={EmailValidator.validate}
                onChange={this.onExampleThreeChange}
              />
            </div>
            <div className="example__render vertical-spacing">
              {this.state.exampleThreeValues.map(value => (
                <div key={value}>{value}</div>
              ))}
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {exampleThree}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
