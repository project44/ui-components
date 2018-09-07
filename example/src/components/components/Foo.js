import React from 'react';

import ComponentShell from '../common/ComponentShell';

import { Foo } from 'ui-components';

export default (props) => {
  return (
    <ComponentShell>
      <h1>Foo</h1>
      <Foo text="test" />
    </ComponentShell>
  )
}
