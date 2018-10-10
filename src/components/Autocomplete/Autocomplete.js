import React, { Component } from 'react';
import { Select as AntAutoComplete } from 'antd';
import './Autocomplete.scss';
import _ from 'lodash';

export default class Autocomplete extends Component {
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

  handleSearch = (value) => {
    this.setState({
      open: value.length > 0 && this.state.options.length > -1
    });
  }

  render() {
    const { mode = 'tags', onSearch, value, label, placeholder, custom, defaultValue, onChange } = this.props;
    return (
      <div className='autocomplete ant-form-vertical'>
        { label &&
        <div className='ant-form-item-label'>
          <label title={label}>{label}</label>
        </div>
        }
        <AntAutoComplete
          className='autocomplete__input'
          value={value}
          placeholder={placeholder}
          onSelect={this.closeDropDown}
          defaultValue={defaultValue}
          onChange={onChange}
          onSearch={(val) => {
            this.handleSearch(val);
            if (onSearch) { onSearch(); }
          }}
          mode={mode}
          open={this.state.open}
          onBlur={this.closeDropDown}
          onDeselect={this.closeDropDown}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          {...custom}
        >
          { this.state.options.map((item) => {
            return <AntAutoComplete.Option key={item}>{item}</AntAutoComplete.Option>;
          })}

        </AntAutoComplete>
      </div>
    );
  }
};
