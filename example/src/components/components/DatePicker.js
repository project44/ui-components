import React from 'react';
import ComponentShell from '../common/ComponentShell';
import { DatePicker } from 'ui-components';
import {Divider} from "antd";

export default (props) => {
  return (
    <ComponentShell name="Date Picker">
      <h2>Date Picker Example</h2>
      <Divider />
      <h4>Basic Datepicker</h4>
      <DatePicker placeholder="Select Date"></DatePicker>
      <Divider />
    </ComponentShell>
  )
}
