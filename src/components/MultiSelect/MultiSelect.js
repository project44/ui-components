import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Select as AntMultiSelect } from 'antd';
import './MultiSelect.scss';
import _ from 'lodash';

export default class MultiSelect extends Component {
  static propTypes = {
    dataSource: PropTypes.array.isRequired,
    mode: PropTypes.string,
    onSearch: PropTypes.func,
    value: PropTypes.array,
    label: PropTypes.string,
    allowSearch: PropTypes.bool,
    closeOnSelect: PropTypes.bool,
    placeholder: PropTypes.string,
    custom: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
    icon: PropTypes.string,
    className: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      options: _.get(props, 'dataSource', []),
      open: false
    };
  }

  closeDropDown = () => {
    this.setState((state, props) => {
      return {
        open: false
      }
    });
  }

  openDropDown = () => {
    this.setState((state, props) => {
      return {
        open: true
      }
    });
  }

  toggleDropdown = () => {
    const { open } = this.state;

    if (!open) {
      this.MultiSelect.focus();

      this.setState((state, props) => {
        return { open: true }
      });
    } else {
      this.MultiSelect.blur();

      this.setState((state, props) => {
        return { open: false }
      });
    }
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
      icon = 'arrow_drop_down',
      className
    } = this.props;

    const { options, open } = this.state;

    return (
      <div className='multi-select ant-form-vertical'>
        {label &&
          <div className='ant-form-item-label'>
            <label title={label}>{label}</label>
          </div>
        }
        <div className={allowSearch ? 'multi-select__dropdown' : 'multi-select__dropdown no-search'}>
          <AntMultiSelect
            className={classNames('multi-select__input', className)}
            value={value}
            placeholder={placeholder}
            onSelect={() => closeOnSelect && this.closeDropDown()}
            defaultValue={defaultValue}
            onChange={onChange}
            onSearch={onSearch}
            onFocus={this.openDropDown}
            open={open}
            mode={mode}
            onBlur={this.closeDropDown}
            onDeselect={this.closeDropDown}
            filterOption={allowSearch ? (input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 : false}
            ref={(input) => { this.MultiSelect = input; }}
            {...custom}
          >
            {options && options.map((item) => {
              return <AntMultiSelect.Option key={item.value}>{item.value}</AntMultiSelect.Option>;
            })}
          </AntMultiSelect>
          <div className={classNames('select__icon', { 'open': open })} onClick={this.toggleDropdown} onBlur={this.toggleDropdown}>
            <i className={`material-icons ${open ? 'open' : 'closed'}`}>{icon}</i>
          </div>
        </div>
      </div>
    );
  }
};
