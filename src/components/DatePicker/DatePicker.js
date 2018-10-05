import React, { Component } from 'react';
import {DatePicker as AntDatePicker} from 'antd';
import './DatePicker.scss';

export default class DatePicker extends Component {

  render() {
    const { placeholder = 'MM/DD/YYYY', onChange, format = 'MM/DD/YYYY' } = this.props;

    const calendarIcon = () => <i className="material-icons">
      calendar_today
    </i>

    return (
      <AntDatePicker
        placeholder={placeholder}
        format={format}
        className="date-picker"
        onChange={onChange}
        suffixIcon={calendarIcon}>
      </AntDatePicker>
    )
  }
};
