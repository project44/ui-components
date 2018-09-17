import React, { Component } from 'react';
import { Select as AntMultiSelect } from 'antd';
import './MultiSelect.scss';
import _ from 'lodash';

export default class MultiSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: _.get(props, 'dataSource', []),
      open: false
    };
  }

  closeDropDown = () => {
    this.setState({
      open: false
    })
  }

  openDropDown = () => {
    this.setState({
      open: true
    })
  }

  render() {
    const { mode = 'multiple', onSearch, value, label, closeOnSelect, placeholder, custom, defaultValue, onChange, icon = 'arrow_drop_down'} = this.props;

    return (
      <div className="multi-select ant-form-vertical">
        { label &&
        <div className="ant-form-item-label">
          <label title={label}>{label}</label>
        </div>
        }
        <div className="multi-select__dropdown">
          <AntMultiSelect
            className="multi-select__input"
            value={value}
            placeholder={placeholder}
            onSelect={() => { if (closeOnSelect){this.closeDropDown()}}}
            defaultValue={defaultValue}
            onChange={onChange}
            onSearch={onSearch}
            onFocus={this.openDropDown}
            open={this.state.open}
            mode={mode}
            onBlur={this.closeDropDown}
            onDeselect={this.closeDropDown}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            {...custom}
          >
            { this.state.options.map((item) => {
              return <AntMultiSelect.Option key={item}>{item}</AntMultiSelect.Option>;
            })}
          </AntMultiSelect>
          <div className="select__icon">
            <i className={`material-icons ${this.state.open ? 'open' : 'closed'}`}>{icon}</i>
          </div>
        </div>
      </div>
    )
  }
};
