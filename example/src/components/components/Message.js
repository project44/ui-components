import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';
import { message as uiMessage, Button } from 'ui-components';
import './Buttons.scss';

const exampleOne = `
import { message, Button } from 'ui-components';

<Button type="primary" clickFn={() => message.info('Normal Message')}>Normal Message</Button>
<Button type="primary" clickFn={() => message.success('Success Message')}>Success Message</Button>
<Button type="primary" clickFn={() => message.error('Error Message')}>Error Message</Button>
<Button type="primary" clickFn={() => message.warning('Warning Message')}>Warning Message</Button>
`;

class ColorPicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      exampleColor: '#11426a'
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
          <h1>Message</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
          Used to display a message.
          </p>
          <p className="mb-8">
            You have full access to the <a href="https://ant.design/components/message/" target="_blank" rel="noopener noreferrer">Ant Message API</a>.
          </p>
          <section className="page-section">
            <h3 className="section-title">Message Types</h3>
            <div className="example__render flex items-end">
              <Button type="primary" clickFn={() => uiMessage.info('Normal Message')}>Normal Message</Button>
              <Button type="primary" clickFn={() => uiMessage.success('Success Message')}>Success Message</Button>
              <Button type="primary" clickFn={() => uiMessage.error('Error Message')}>Error Message</Button>
              <Button type="primary" clickFn={() => uiMessage.warning('Warning Message')}>Warning Message</Button>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language='jsx' style={xonokai}>
                {exampleOne}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
