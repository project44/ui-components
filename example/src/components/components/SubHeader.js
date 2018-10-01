import React from 'react';
import ComponentShell from '../common/ComponentShell';
import { Divider, Icon } from 'antd';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

import { SubHeader } from 'ui-components';

export default (props) => {
  const componentDescription = <p>
    p44's SubHeader component is..
  </p>

  return (
    <ComponentShell name="SubHeader" description={componentDescription}>
      <h2>Basic Example</h2>
      <div className="example__render p-4 shadow-inner rounded">
          <SubHeader><h1>Yo</h1></SubHeader>
      </div>
      <div className="component__usage mt-8">
        <h3>Usage</h3>
        <SyntaxHighlighter language='jsx' style={xonokai}>

        </SyntaxHighlighter>
      </div>
    </ComponentShell>
  )
}
