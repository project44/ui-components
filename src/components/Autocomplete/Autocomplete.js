import React, { Component } from 'react';
import { Select as AntAutoComplete } from 'antd';
import './Autocomplete.scss';
import _ from 'lodash';

export default class Autocomplete extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: _.get(props, 'dataSource', [])
    };
  }

  handleChange = (value) => {
    console.log(value)
  }

  render() {
    const { mode = 'tags', onSearch, label, showSearch, placeholder, custom, defaultValue, onBlur, onChange, onSelect, dataSource =[] } = this.props;

    return (
      <div className="autocomplete ant-form-vertical">
        { label &&
        <div className="ant-form-item-label">
          <label title={label}>{label}</label>
        </div>
        }
        <AntAutoComplete
          className="autocomplete__input"
          dataSource={dataSource}
          placeholder={placeholder}
          onSelect={onSelect}
          defaultValue={defaultValue}
          onChange={onChange}
          onSearch={onSearch}
          onBlur={onBlur}
          mode={mode}
          showSearch={showSearch}
          {...custom}
        >
          { dataSource.map((item, index) => {
            return <AntAutoComplete.Option key={index}>{item}</AntAutoComplete.Option>;
          })}

        </AntAutoComplete>
      </div>
    )
  }
};
