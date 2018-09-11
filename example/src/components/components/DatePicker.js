import React from 'react';
import ComponentShell from '../common/ComponentShell';
import { DatePicker } from 'ui-components';

export default (props) => {
  return (
    <ComponentShell>
      <h1>Date Picker</h1>
      <DatePicker placeholder="Select Date"></DatePicker>
    </ComponentShell>
  )
}
