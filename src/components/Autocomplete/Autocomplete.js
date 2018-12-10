import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AutoComplete as AntAutoComplete } from 'antd';
import './AutoComplete.scss';
import _ from 'lodash';

export default class AutoComplete extends Component {
  static propTypes = {
    mode: PropTypes.string,
    onSearch: PropTypes.func,
    value: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      options: _.get(props, 'dataSource', []),
      open: false,
      value: ''
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

  handleSelect = () => {
    this.setState({
      value: ''
    });
  }

  render() {
    const {
      mode = 'tags',
      label,
      placeholder,
      custom,
      defaultValue,
      dataSource,
      onSelect,
      onSearch
    } = this.props;

    return (
      <div className='autocomplete ant-form-vertical'>
        {label && (
          <div className='ant-form-item-label'>
            <label title={label}>{label}</label>
          </div>
        )}
        <AntAutoComplete
          className='autocomplete__input'
          value={this.state.value}
          placeholder={placeholder}
          defaultValue={defaultValue}
          dataSource={dataSource}
          onChange={(val) => {
            this.setState(() => {
              return {
                value: val
              };
            });
          }}
          onSearch={onSearch}
          onSelect={(val) => {
            onSelect(val);
            this.setState(() => { return { value: '' }; });
            this.closeDropDown();
          }}
          mode={mode}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          {...custom}
        />
      </div>
    );
  }
}
