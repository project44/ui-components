import React from 'react';
import ComponentShell from '../common/ComponentShell';
import { Divider, Icon } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

import { Button } from 'ui-components';

export default (props) => {
  return (
    <ComponentShell>
      <h1 className="component__title">Buttons</h1>
      <Divider />

      <p className="mb-4">
        p44's button component is an extention of the <a href="https://ant.design/components/button/" target="_blank">Ant Button <Icon type="link" theme="outlined" /></a>, thus you have full access to their button <a href="https://ant.design/components/button/#API" target="_blank">API <Icon type="link" theme="outlined" /></a>.
      </p>

      <div className="component__example bg-white my-4 p-4 shadow-md rounded">
        <h2>Basic Example</h2>
        <div className="example__render p-4 shadow-inner rounded">
          <Button>Hey there</Button>
        </div>
        <div className="component__usage mt-8">
          <h3>Usage</h3>
          <SyntaxHighlighter language='jsx' style={xonokai}>
            {`import { Button } from 'ui-components';\n\n<Button>Hey there</Button>`}
          </SyntaxHighlighter>
        </div>
      </div>

    </ComponentShell>
  )
}
