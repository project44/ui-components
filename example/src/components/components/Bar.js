import React from 'react';
import ComponentShell from '../common/ComponentShell';

import { Bar } from 'ui-components';

export default (props) => {
  return (
    <ComponentShell>
      <h1>Bar</h1>
      <Bar text="test" />
    </ComponentShell>
  )
}
