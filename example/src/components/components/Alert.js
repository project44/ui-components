import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';
import { Alert } from 'ui-components';

const exampleOne = `
import { Alert } from 'ui-components';

<Alert message="Alert Success" type="success" />
<Alert message="Alert with Icon" showIcon />
<Alert message="With Description" description="Detailed description of the alert" showIcon />
<Alert message="Banner" banner/>
<Alert message="Closable" type="error" closable withIcon />
`;

class ColorPicker extends React.Component {
  render() {
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Alert</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">
          Used to display an Alert.
          </p>
          <p className="mb-8">
            You have full access to the <a href="https://ant.design/components/alert/" target="_blank" rel="noopener noreferrer">Ant Alert API</a>.
          </p>
          <section className="page-section">
            <h3 className="section-title">Alert Types</h3>
            <div>
              <Alert className="vertical-spacing" message="Alert Success" type="success" />
              <Alert className="vertical-spacing" message="Alert with Icon" showIcon />
              <Alert className="vertical-spacing" message="With Description" description="Detailed description of the alert" showIcon />
              <Alert className="vertical-spacing" message="Banner" banner/>
              <Alert className="vertical-spacing" message="Closable" type="error" closable withIcon />
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
