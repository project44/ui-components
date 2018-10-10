import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select as AntMultiSelect } from 'antd';
import './MultiSelect.scss';
import _ from 'lodash';

export default class MultiSelect extends Component {
  static propTypes = {
    mode: PropTypes.string,
    onSearch: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    allowSearch: PropTypes.bool,
    closeOnSelect: PropTypes.bool,
    placeholder: PropTypes.string,
    custom: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.string
  }

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
    });
  }

  openDropDown = () => {
    this.setState({
      open: true
    });
  }

  render() {
    const {
      mode = 'multiple',
      onSearch,
      value,
      label,
      allowSearch = true,
      closeOnSelect,
      placeholder,
      custom,
      defaultValue,
      onChange,
      icon = 'arrow_drop_down'
    } = this.props;

    return (
      <div className='multi-select ant-form-vertical'>
        {label &&
          <div className='ant-form-item-label'>
            <label title={label}>{label}</label>
          </div>
        }
        <div className={allowSearch ? 'multi-select__dropdown' : 'multi-select__dropdown no-search'}>
          <AntMultiSelect
            className='multi-select__input'
            value={value}
            placeholder={placeholder}
            onSelect={() => closeOnSelect && this.closeDropDown()}
            defaultValue={defaultValue}
            onChange={onChange}
            onSearch={onSearch}
            onFocus={this.openDropDown}
            open={this.state.open}
            mode={mode}
            onBlur={this.closeDropDown}
            onDeselect={this.closeDropDown}
            filterOption={allowSearch ? (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false}
            {...custom}
          >
            {this.state.options.map((item) => {
              return <AntMultiSelect.Option key={item}>{item}</AntMultiSelect.Option>;
            })}
          </AntMultiSelect>
          <div className='select__icon'>
            <i className={`material-icons ${this.state.open ? 'open' : 'closed'}`}>{icon}</i>
          </div>
        </div>
      </div>
    );
  }
};
