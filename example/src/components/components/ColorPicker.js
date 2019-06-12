import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';
import { ColorPicker as UIColorPicker } from 'ui-components';
import './Buttons.scss';

const exampleOne = `
import { ColorPicker } from 'ui-components';

<ColorPicker />
`;

const exampleTwo = `
import { ColorPicker } from 'ui-components';

onColorChange = (color) => {
  this.setState({
    exampleColor: color
  });
}

<ColorPicker color={this.state.exampleColor} onChange={this.onColorChange} />
`;

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exampleColor: '#07456b'
    };
  }
  onColorChange = (color) => {
    this.setState({
      exampleColor: color
    });
  }
  render() {
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Color Picker</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
          Used to select a color.
          </p>
          <p className="mb-8">
          Extended from <a href="https://github.com/react-component/color-picker" target="_blank" rel="noopener noreferrer">React Component Color Picker</a>.
          </p>
          <section className="page-section">
            <h3 className="section-title">Uncontrolled Color Picker</h3>
            <div className="example__render flex items-end">
              <UIColorPicker />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {exampleOne}
              </SyntaxHighlighter>
            </div>
          </section>
          <section className="page-section">
            <h3 className="section-title">Controlled Color Picker</h3>
            <div className="example__render flex items-end">
              <UIColorPicker color={this.state.exampleColor} onChange={this.onColorChange} />
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {exampleTwo}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
