import moment from 'moment';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DatePicker as AntDatePicker } from 'antd';
import './DateRange.scss';

export default class DateRange extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    startLabel: PropTypes.string,
    endLabel: PropTypes.string,
    format: PropTypes.string,
    boundStartDateValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    boundEndDateValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    datepickerStartChangeFn: PropTypes.func,
    datepickerEndChangeFn: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      endOpen: false,
    };
  }

  disabledStartDate = startValue => {
    const endValue = this.props.boundEndDateValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const startValue = this.props.boundStartDateValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  onStartChange = value => {
    this.onChange('startValue', value.format('MM/DD/YYYY'));
  };

  onEndChange = value => {
    this.onChange('endValue', value.format('MM/DD/YYYY'));
  };

  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  formatDateValue = date => {
    if (typeof date === 'string') {
      return moment(date);
    } else if (moment.isMoment(date)) {
      return date;
    } else {
      return null;
    }
  };

  render() {
    const {
      placeholder = 'MM/DD/YYYY',
      startLabel,
      endLabel,
      format = 'MM/DD/YYYY',
      datepickerStartChangeFn,
      datepickerEndChangeFn,
      boundStartDateValue,
      boundEndDateValue,
    } = this.props;

    const startValueBound = this.formatDateValue(boundStartDateValue);
    const endValueBound = this.formatDateValue(boundEndDateValue);

    const calendarIcon = <i className="material-icons">calendar_today</i>;

    return (
      <div className="date-range flex">
        <div className="ant-form-vertical">
          {startLabel && (
            <div className="ant-form-item-label">
              <label title={startLabel}>{startLabel}</label>
            </div>
          )}
          <AntDatePicker
            placeholder={placeholder}
            className="start-date"
            popupStyle={{ zIndex: 9999 }}
            disabledDate={this.disabledStartDate}
            format={format}
            value={startValueBound}
            onChange={value => {
              this.onStartChange(value);
              if (datepickerStartChangeFn) {
                datepickerStartChangeFn(value.format('YYYY-MM-DD') + 'T00:00:00.000Z');
              }
            }}
            onOpenChange={this.handleStartOpenChange}
            suffixIcon={calendarIcon}
          />
        </div>
        <div className="ant-form-vertical">
          {endLabel && (
            <div className="ant-form-item-label">
              <label title={endLabel}>{endLabel}</label>
            </div>
          )}
          <AntDatePicker
            placeholder={placeholder}
            className="end-date"
            popupStyle={{ zIndex: 9999 }}
            disabledDate={endValueBound ? this.disabledEndDate : null}
            format={format}
            value={endValueBound}
            onChange={value => {
              this.onEndChange(value);
              if (datepickerEndChangeFn) {
                datepickerEndChangeFn(value.format('YYYY-MM-DD') + 'T23:59:59.999Z');
              }
            }}
            open={this.state.endOpen}
            onOpenChange={this.handleEndOpenChange}
            suffixIcon={calendarIcon}
            boundEndDateValue={boundEndDateValue}
          />
        </div>
      </div>
    );
  }
}
