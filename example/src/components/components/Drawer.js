import React, { Component } from 'react';
import { Drawer, Button } from 'ui-components';
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism/index';

const exampleOne = `import { Drawer, Button } from 'ui-components';

showDrawer = () => {
  this.setState({
    drawerOpen: true,
  });
};

hideDrawer = () => {
  this.setState({
    drawerOpen: false,
  });
};

<Button type="primary" clickFn={this.showDrawer}>
  Open
</Button>
<Drawer
  title="Basic Drawer"
  width={400}
  visible={this.state.drawerOpen}
  onClose={this.hideDrawer}
  placement="right"
>
  <div>Inner Contents</div>
</Drawer>`;

export default class DrawerDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
  }

  showDrawer = () => {
    this.setState({
      drawerOpen: true,
    });
  };

  hideDrawer = () => {
    this.setState({
      drawerOpen: false,
    });
  };

  render() {
    return (
      <div className="p44-ui__page">
        <div className="page-header">
          <h1>Drawer</h1>
        </div>
        <div className="page-content">
          <p className="page-intro">A drawer is a panel that slides in from screen edge.</p>
          <section className="page-section">
            <div className="example__render">
              <Button type="primary" clickFn={this.showDrawer}>
                Open
              </Button>
              <Drawer
                title="Basic Drawer"
                width={400}
                visible={this.state.drawerOpen}
                onClose={this.hideDrawer}
                placement="right"
              >
                <div>Inner Contents</div>
              </Drawer>
            </div>
            <div className="component__usage mt-8">
              <SyntaxHighlighter language="jsx" style={xonokai}>
                {exampleOne}
              </SyntaxHighlighter>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
