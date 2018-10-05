import React, { Component } from 'react';
import {DatePicker as AntDatePicker} from 'antd';
import './DateRange.scss';

export default class DateRange extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startValue: null,
      endValue: null,
      endOpen: false,
    };
  }

  disabledStartDate = (startValue) => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  }

  disabledEndDate = (endValue) => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  }

  onStartChange = (value) => {
    console.log(value)
    this.onChange('startValue', value);
  }

  onEndChange = (value) => {
    this.onChange('endValue', value);
  }

  handleStartOpenChange = (open) => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  }

  handleEndOpenChange = (open) => {
    this.setState({ endOpen: open });
  }


  render() {
    const { placeholder = 'MM/DD/YYYY', startLabel, endLabel, onChange, format = 'MM/DD/YYYY' } = this.props;

    const calendarIcon = () => <i className="material-icons">
      calendar_today
    </i>

    return (
      <div className="date-range flex">
        <div className="ant-form-vertical">
          { startLabel &&
            <div className="ant-form-item-label">
              <label title={startLabel}>{startLabel}</label>
            </div>
          }
          <AntDatePicker
            placeholder={placeholder}
            className="start-date"
            disabledDate={this.disabledStartDate}
            format={format}
            value={this.state.startValue}
            onChange={(value) => {
              this.onStartChange(value);
              onChange;
            }}
            onOpenChange={this.handleStartOpenChange}
            suffixIcon={calendarIcon}>
          </AntDatePicker>
        </div>
        <div className="ant-form-vertical">
          { endLabel &&
          <div className="ant-form-item-label">
            <label title={endLabel}>{endLabel}</label>
          </div>
          }
          <AntDatePicker
            placeholder={placeholder}
            className="end-date"
            disabledDate={this.disabledEndDate}
            format={format}
            value={this.state.endValue}
            onChange={(value) => {
              this.onEndChange(value);
              onChange;
            }}
            open={this.state.endOpen}
            onOpenChange={this.handleEndOpenChange}
            suffixIcon={calendarIcon}>
          </AntDatePicker>
        </div>
      </div>
    )
  }
};
