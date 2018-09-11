import React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai } from 'react-syntax-highlighter/styles/prism';

import ComponentShell from '../common/ComponentShell';

import { Foo } from 'ui-components';

export default (props) => {
  return (
    <ComponentShell>
      <h1 className="component__title">Foo</h1>

      <div className="component__example bg-white my-4 p-4 shadow-md rounded">
        <h2>Example</h2>
        <div className="example__render p-4 shadow-inner rounded">
          <Foo text="test" />
        </div>
      </div>

      <div className="component__usage mt-8">
        <h2>Usage</h2>
        <SyntaxHighlighter language='jsx' style={xonokai}>
          {`<Foo text="test" />`}
        </SyntaxHighlighter>
      </div>
    </ComponentShell>
  )
}
